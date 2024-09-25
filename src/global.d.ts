declare module 'quagga' {
  export interface QuaggaConfig {
    inputStream: {
      name?: string;
      type: string;
      target: HTMLElement | string;
      constraints?: {
        width?: number;
        height?: number;
        facingMode?: string;
      };
    };
    decoder: {
      readers: string[];
    };
    locator?: {
      patchSize?: string;
      halfSample?: boolean;
    };
    locate?: boolean;
  }

  export interface QuaggaResult {
    codeResult: {
      code: string;
    };
    boxes: any[]; // Can be typed more specifically if needed
    box: any; // Current detected box, can be typed more specifically if needed
  }

  const Quagga: {
    init(config: QuaggaConfig, callback: (err: any) => void): void;
    start(): void;
    stop(): void;
    onDetected(callback: (result: QuaggaResult) => void): void;
    onProcessed(callback: (result: QuaggaResult) => void): void;
    canvas: {
      dom: {
        overlay: HTMLCanvasElement; // Added to access the canvas
      };
    };
    ImageDebug: {
      drawPath: (box: any, ctx: CanvasRenderingContext2D, options: { color: string; lineWidth: number }) => void; // Added for debugging
    };
  };

  export default Quagga;
}