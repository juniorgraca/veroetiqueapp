declare module 'quagga' {
  export interface QuaggaConfig {
    inputStream: {
      name?: string;
      type: string;
      target: HTMLElement | string;
      constraints?: any;
    };
    decoder: {
      readers: string[];
    };
    locator?: any;
  }

  export interface QuaggaResult {
    codeResult: {
      code: string;
    };
  }

  const Quagga: {
    init(config: QuaggaConfig, callback: (err: any) => void): void;
    start(): void;
    stop(): void;
    onDetected(callback: (result: QuaggaResult) => void): void;
  };

  export default Quagga;
}
