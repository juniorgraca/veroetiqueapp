import React, { useState, useEffect } from "react";
import "./TableLarge.css";
import { Link } from "react-router-dom";
import veroLogo from "/verologo1pb.png";
import itemsData2 from '../type/item2.json';

interface Item {
  codigo: string;
  nome: string;
  armazem: string;
  map: string;
}

const CgLarge: React.FC = () => {
  useEffect(() => {

    document.title = "Etiqueta - Estoque Assistente";
  }, []);

  const [dados, setDados] = useState<Item[]>([]);
  const [codigo, setCodigo] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [map, setMap] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [quantidade, setQuantidade] = useState<number>(1);
  const [armazensDisponiveis, setArmazensDisponiveis] = useState<string[]>([]);
  const [armazensSelecionados, setArmazensSelecionados] = useState<Set<string>>(new Set());
  const [armazemManual, setArmazemManual] = useState<string>('');

  const fetchItemDescription = (codigo: string) => {
    const armazens = new Set<string>();
    itemsData2.forEach((item) => {
      if (item.Produto === codigo) {
        armazens.add(item.Armazem);
      }
    });

    const armazensArray = Array.from(armazens);
    setArmazensDisponiveis(armazensArray);

    setArmazensSelecionados(new Set(armazensArray.length > 0 ? [armazensArray[0]] : []));
    setArmazemManual('');
    setName(itemsData2.find((item) => item.Produto === codigo)?.Descricao || '');
  };

  useEffect(() => {
    if (codigo) {
      fetchItemDescription(codigo);
    }
  }, [codigo]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const updatedArmazens = new Set(armazensSelecionados);

    if (updatedArmazens.has(value)) {
      updatedArmazens.delete(value);
    } else {
      updatedArmazens.add(value);
    }

    setArmazensSelecionados(updatedArmazens);
  };

  const handleChangeCodigo = (event: React.ChangeEvent<HTMLInputElement>) => setCodigo(event.target.value);
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const handleChangeArmazemManual = (event: React.ChangeEvent<HTMLInputElement>) => setArmazemManual(event.target.value);
  const handleChangeMap = (event: React.ChangeEvent<HTMLInputElement>) => setMap(event.target.value);
  const handleChangeQuantidade = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (value >= 1 || isNaN(value)) {
      setQuantidade(value);
    }
  };

  const handleResetItem = () =>{
    setDados([])
  }
  const handleAddItem = () => {
    if (codigo && name && (armazensSelecionados.size > 0 || armazemManual)) {
      const armazensFinal = new Set(armazensSelecionados);
      if (armazemManual) {
        armazensFinal.add(armazemManual);
      }

      const itens = Array.from(armazensFinal).flatMap((armazem) =>
        Array.from({ length: quantidade }, () => ({
          codigo,
          nome: name,
          armazem,
          map
        }))
      );

      setDados(prevDados => [...prevDados, ...itens]);

      setCodigo('');
      setName('');
      setArmazemManual('');
      setArmazensSelecionados(new Set());
      setMap('');
      setQuantidade(1);
    
    } else {
      console.log('Não é possível adicionar o item. Verifique se todos os campos estão preenchidos.');
    }
  };

  return (
    <>
      <div>
          <div className="no-print">
        <div className="bodyItem">
            <div className="info-section">
              <div className="area-dados">
                <Link to="/" className="link">Voltar ao início</Link>
                <p className="pItem"><b>Código do item</b></p>
                <input
                  type='text'
                  placeholder='Digite o código do produto'
                  value={codigo}
                  onChange={handleChangeCodigo}
                />
                <p className="pItem"><b>Nome do item</b></p>
                <input
                  type='text'
                  placeholder='Digite o nome do produto'
                  value={name}
                  onChange={handleChangeName}
                />
                {armazensDisponiveis.length >= 1 && <p><b>Armazém do item</b></p>}
                {armazensDisponiveis.length > 0 && (
                  <div>
                    {armazensDisponiveis.map((armazem) => (
                      <label key={armazem}>
                        <input
                          type="checkbox"
                          value={armazem}
                          checked={armazensSelecionados.has(armazem)}
                          onChange={handleCheckboxChange}
                        />
                        {armazem}
                      </label>
                    ))}
                  </div>
                )}
                <p className="pItem"><b>Armazém Manual</b></p>
                <input
                  type='text'
                  placeholder='Digite um armazém manualmente'
                  value={armazemManual}
                  onChange={handleChangeArmazemManual}
                />
                <div className='areaInput'>
                <p className="pItem"><b>
                  Mapa de almox</b>
                  <span className='infotext'>(se não houver deixe em branco)</span>
                  <input
                    type="checkbox"
                    className='inputChk'
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                </p>
                  <input
                    type='text'
                    placeholder='Digite o mapa onde encontra o produto'
                    value={map}
                    disabled={!isChecked}
                    onChange={handleChangeMap}
                  />
                </div>
                <p className="pItem"><b className="textInform">Quantidade de itens</b></p>
                <input
                  type='number'
                  placeholder='Número de itens'
                  value={quantidade}
                  onChange={handleChangeQuantidade}
                  min="1"
                />
                <button className="btnOnClick" onClick={handleResetItem}>Limpar</button>
                <button className="btnOnClick" onClick={handleAddItem}>Adicionar</button>
              </div>
            </div>
          </div>
        </div>

        <div className="single-column"> 
          {dados.map((item, index) => (
            <div key={index} className="item-containerlarge">
              <div className="textarealarge">
                <p className="texdescrlarge"><p className="textClass">CÓD.: {item.codigo}</p></p>
                <p className="texdescrlarge"><p className="textClass"> <p className="texdescrlargedescr">{item.nome}</p></p></p>
              
                {isChecked ? (
                  <>
                  <p className="texdescrlarge"><p className="textClass">ARMAZÉM: {item.armazem}</p></p>
                  <p className="texdescrlargebottom"><p className="textClass">{item.map}</p></p>
                  </>
                ):(
                  <>
                    <p className="texdescrlargebottom"><p className="textClass">ARMAZÉM: {item.armazem}</p></p>
                  </>
                )}
              </div>
              <div className="logoarealarge">
                <img className="logoVerolarge" src={veroLogo} width="120px" alt="Logo" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CgLarge;
