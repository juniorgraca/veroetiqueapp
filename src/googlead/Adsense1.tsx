import { useEffect } from 'react';

const Adsense1: React.FC = () => {
  useEffect(() => {
    // Verificar se o script do Google Ads já foi carregado
    if (!window.adsbygoogle) {
      const script = document.createElement('script');
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8188434879073201";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);

      script.onload = () => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      };

      return () => {
        document.body.removeChild(script);
      };
    } else {
      // Se o script já foi carregado, inicializar o anúncio
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []); // O array vazio garante que o efeito seja executado apenas uma vez

  return (
    <ins className="adsbygoogle"
         style={{ display: 'block' }}
         data-ad-client="ca-pub-8188434879073201"
         data-ad-slot="9480896086"
         data-ad-format="auto"
         data-full-width-responsive="true">
    </ins>
  );
};

export default Adsense1;
