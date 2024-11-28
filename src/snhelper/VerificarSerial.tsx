import { useState, KeyboardEvent, ChangeEvent, useRef, useEffect } from 'react';
import styles from './Verificar.module.css';
import Navbar from '../navbar/Navbar';

function SnHelper() {
  const [inputValue, setInputValue] = useState<string>('');
  const [message, setMessage] = useState<JSX.Element | string>('');
  const inputRef = useRef<HTMLInputElement | null>(null); // Criar referência

  useEffect(() => {
    // Foca no input ao montar o componente
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setMessage(''); // Reseta a mensagem ao digitar um novo valor
  };

  const processInput = () => {
    let itemMessage = '';
    let itemCod = '';
    let itemImg = '';
    const itemInput = inputValue; // Armazenando o inputValue em uma variável

    // Verificações do inputValue
    if (itemInput.startsWith('ITBSC')) {
      itemMessage = 'ONT WIFIBER INTELBRAS 121 WIFI AC';
      itemCod = 'SMEQP00402735';
      itemImg = 'intelbras121.png';
    } else if (itemInput.startsWith('ITBS44')) {
      itemMessage = 'ONU GPON/EPON BRIDGE INTELBRAS R1';
      itemCod = 'SMEQP00902691';
    } else if (itemInput.startsWith('ITBSF')) {
      itemMessage = 'ONT WIFIBER INTELBRAS WI FI AX1800V LAN 4P FXS 1P USB 1P';
      itemCod = 'SMEQP00402866';
    } else if (itemInput.startsWith('FHTT')) {
      itemMessage = 'ONU GPON BRIDGE FIBERHOME AN5506-01A 1P GE';
    } else if (itemInput.startsWith('DE30')) {
      itemMessage = 'ONU XPON CDATA FD604GW-GD COMPLETA AC';
    } else if (itemInput.startsWith('RCMG')) {
      itemMessage = 'ONU GPON RAISECON HT803G-WS2';
    } else if (itemInput.startsWith('ZTEY')) {
      itemMessage = 'ROTEADOR ZTE ZXHN H3601P';
    } else if (itemInput.startsWith('48575')) {
      itemMessage = 'ROTEADOR K562 HUAWEI';
    } else if (itemInput.startsWith('ALCL')) {
      itemMessage = 'ALCATEL LUCENTE I-010G';
    } else {
      itemMessage = 'Item informado inválido, tente novamente';
    }

    // Exibindo a mensagem final
    if (itemMessage.startsWith('Item informado inválido')) {
      setMessage(itemMessage); // Exibe a mensagem de erro
    } else {
      setMessage(
        <div>
          <span style={{ fontWeight: 'bold', color: '#130101' }}>
            EQUIPAMENTO: {itemCod} {itemMessage}
          </span>
          <br />
          <span style={{ fontWeight: 'bold', color: '#fff' }}>
            SERIAL NUMBER: {itemInput}
          </span>
          <br />
          {itemImg && <img src={itemImg} width="450px" alt="" />}
        </div>
      );
    }

    // Limpar o campo de entrada
    setInputValue('');
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      processInput();
    }
  };

  return (
    <div className={styles.boddyVerify}>
      <Navbar />
      <h1 className={styles.title}>Verificador de Itens</h1>
      <div className={styles.bodyBtn}>
        <input
          ref={inputRef} // Referência do input
          className={styles.inputClass}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Digite o serial e pressione Enter"
        />
        <button className={styles.btn} onClick={processInput}>
          Enviar
        </button>
      </div>
      <p className={styles.textMsg}>{message}</p>
    </div>
  );
}

export default SnHelper;
