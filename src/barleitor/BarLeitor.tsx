import React, { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader, NotFoundException, Result } from '@zxing/library';

const BarLeitor: React.FC = () => {
  const [codigo, setCodigo] = useState<string>('');
  const [error, setError] = useState<string>('');
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const overlayRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    if (videoRef.current) {
      codeReader.decodeFromVideoDevice(null, videoRef.current, (result: Result | null, err: any) => {
        if (result) {
          setCodigo(result.getText());
          setError('');
          drawOverlay(result);
        } else if (err && !(err instanceof NotFoundException)) {
          console.error(err);
          setError('Erro ao ler o código. Tente novamente.');
        }
      });
    }

    return () => {
      codeReader.reset();
    };
  }, []);

  const drawOverlay = (result: Result) => {
    const overlay = overlayRef.current;
    if (overlay) {
      const ctx = overlay.getContext('2d');
      const width = overlay.width;
      const height = overlay.height;

      if (ctx) { // Verifica se ctx não é null
        ctx.clearRect(0, 0, width, height); // Limpa o canvas

        // Desenhar retângulos ao redor dos pontos detectados
        const points = result.getResultPoints();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;

        points.forEach((point: { getX: () => number; getY: () => number }) => {
          ctx.strokeRect(point.getX() - 10, point.getY() - 10, 20, 20); // Desenhar um retângulo em torno do ponto
        });
      }
    }
  };

  return (
    <div style={{ position: 'relative', width: '500px', height: '500px' }}>
      <h1>BarLeitor - Leitor de Código de Barras e QR Code</h1>
      <video ref={videoRef} style={{ width: '100%', height: '100%' }} />
      <canvas ref={overlayRef} className="canvas-overlay" width={500} height={500} />
      <p>Código escaneado: {codigo}</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default BarLeitor;
