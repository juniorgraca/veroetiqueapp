import React, { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader, NotFoundException, Result } from '@zxing/library';

// Componente principal do leitor de código de barras
const BarLeitor: React.FC = () => {
  // Estados para armazenar o código lido e erros
  const [codigo, setCodigo] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Referências para o vídeo e o canvas do overlay
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const overlayRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    // Inicializa a leitura do vídeo
    if (videoRef.current) {
      codeReader.decodeFromVideoDevice(null, videoRef.current, (result: Result | null, err: any) => {
        if (result) {
          // Atualiza o estado com o código lido
          setCodigo(result.getText());
          setError('');
          drawOverlay(result);
        } else if (err && !(err instanceof NotFoundException)) {
          console.error(err);
          setError('Erro ao ler o código. Tente novamente.');
        }
      });
    }

    // Limpa o leitor quando o componente é desmontado
    return () => {
      codeReader.reset();
    };
  }, []);

  // Função para desenhar um overlay com retângulos ao redor dos pontos detectados
  const drawOverlay = (result: Result) => {
    const overlay = overlayRef.current;
    if (overlay) {
      const ctx = overlay.getContext('2d');
      const width = overlay.width;
      const height = overlay.height;

      if (ctx) {
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
