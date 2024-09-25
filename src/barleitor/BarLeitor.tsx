import React, { useEffect, useRef, useState } from 'react';
import Quagga from 'quagga'; // Certifique-se de que o Quagga foi instalado corretamente

const BarLeitor: React.FC = () => {
  const [codigo, setCodigo] = useState<string>('');
  const videoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      Quagga.init({
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: videoRef.current, // Referência para o vídeo
          constraints: {
            width: 640, // Define a resolução
            height: 480,
            facingMode: "environment", // Usa a câmera traseira
          }
        },
        locator: {
          patchSize: "medium", // Tamanho do patch de detecção (small, medium, large)
          halfSample: true // Reduz a resolução para performance
        },
        numOfWorkers: navigator.hardwareConcurrency || 4, // Número de threads para processamento
        decoder: {
          readers: [
            "code_128_reader", // Adicione outros tipos de leitores se necessário
            "ean_reader",
            "ean_8_reader",
            "code_39_reader"
          ]
        },
        locate: true // Habilita a busca por códigos de barras na tela
      }, (err: any) => {
        if (err) {
          console.error("Erro ao inicializar o Quagga:", err);
          return;
        }
        Quagga.start();
      });

      Quagga.onProcessed((result: any) => {
        const drawingCanvas = Quagga.canvas.dom.overlay;
        if (result) {
          const ctx = drawingCanvas.getContext('2d');
          if (ctx && result.boxes) {
            ctx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
            result.boxes
              .filter((box: any) => box !== result.box)
              .forEach((box: any) => Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, ctx, { color: "green", lineWidth: 2 }));
            if (result.box) {
              Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, ctx, { color: "red", lineWidth: 2 });
            }
          }
        }
      });

      Quagga.onDetected((data: any) => {
        if (data && data.codeResult && data.codeResult.code) {
          setCodigo(data.codeResult.code);
        }
      });

      return () => {
        Quagga.stop();
      };
    }
  }, []);

  return (
    <div>
      <h1>BarLeitor - Leitor de Código de Barras</h1>
      <div ref={videoRef} style={{ width: "500px", height: "500px" }} />
      <p>Código escaneado: {codigo}</p>
    </div>
  );
}

export default BarLeitor;
