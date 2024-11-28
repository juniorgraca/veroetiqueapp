import { useState, useEffect } from 'react';

const TypewriterEffect = () => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [currentText, setCurrentText] = useState<number>(0); // Controla qual texto está sendo exibido
  const texts = ['Bem vindo ao Almox Helper', 'Soluções práticas para seu almoxarifado'];

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + texts[currentText][currentIndex]);
      currentIndex++;

      if (currentIndex === texts[currentText].length) {
        clearInterval(intervalId);

        // Quando terminar o texto atual, espera 1 segundo antes de começar o próximo
        if (currentText < texts.length - 1) {
          setTimeout(() => {
            setDisplayedText(''); // Limpa o texto exibido
            setCurrentText((prev) => prev + 1); // Avança para o próximo texto
          }, 1000);
        }
      }
    }, 100); // Ajuste a velocidade da digitação aqui (100ms entre cada letra)

    return () => clearInterval(intervalId);
  }, [currentText]);

  return <div className="titleHp">{displayedText}</div>;
};

export default TypewriterEffect;
