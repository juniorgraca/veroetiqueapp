import React, { useEffect, useRef, useState } from 'react';
import Quagga from 'quagga'; // Agora reconhecido pelo TypeScript

const BarLeitor: React.FC = () => {
  const [codigo, setCodigo] = useState<string>('');
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      Quagga.init({
        inputStream: {
          type: "LiveStream",
          target: videoRef.current, // Referência para o vídeo
          constraints: {
            facingMode: "environment", // Usa a câmera traseira
          }
        },
        decoder: {
          readers: ["code_128_reader", "ean_reader", "ean_8_reader", "code_39_reader"], // Tipos de códigos de barras suportados
        }
      }, (err) => {
        if (err) {
          console.error("Erro ao inicializar o Quagga:", err);
          return;
        }
        Quagga.start();
      });

      Quagga.onDetected((data) => {
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
