import React, { useEffect, useRef, useState } from 'react';
import Quagga from 'quagga';

const BarLeitor: React.FC = () => {
  const [codigo, setCodigo] = useState<string>('');
  const videoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      Quagga.init({
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: videoRef.current,
          constraints: {
            width: 640,
            height: 480,
            facingMode: "environment",
          }
        },
        locator: {
          patchSize: "medium",
          halfSample: true
        },
        numOfWorkers: navigator.hardwareConcurrency || 4,
        decoder: {
          readers: [
            "code_128_reader",
            "ean_reader",
            "ean_8_reader",
            "code_39_reader"
          ]
        },
        locate: true
      }, (err: any) => {
        if (err) {
          console.error("Erro ao inicializar o Quagga:", err);
          return;
        }
        Quagga.start();
      });

      Quagga.onProcessed((result: QuaggaResult) => {
        const drawingCanvas = Quagga.canvas.dom.overlay;
        if (result) {
          const ctx = drawingCanvas.getContext('2d');
          if (ctx && result.boxes) {
            ctx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
            result.boxes
              .filter((box: any) => box !== result.box)
              .forEach((box: any) => Quagga.ImageDebug.drawPath(box, ctx, { color: "green", lineWidth: 2 }));
            if (result.box) {
              Quagga.ImageDebug.drawPath(result.box, ctx, { color: "red", lineWidth: 2 });
            }
          }
        }
      });

      Quagga.onDetected((data: QuaggaResult) => {
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