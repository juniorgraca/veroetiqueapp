import itemSearch from '../type/itemSearch.json';
import style from './PedidoMaterial.module.css';
import { useState } from 'react';

function PedidoMaterial() {
  // Estado inicial da tabela de itens salvos
  const [tabelaDados, setTabelaDados] = useState([]);

  // Estados para controle dos formulários
  const [solicitante, setSolicitante] = useState('');
  const [datesol, setDatesol] = useState('');
  const [projeto, setProjeto] = useState('');
  const [unidade, setUnidade] = useState('');
  const [atividade, setAtividade] = useState('');

  // Pesquisa de itens
  const [searchTerm, setSearchTerm] = useState('');
  const [resultados, setResultados] = useState([]);
  const [quantidade, setQuantidade] = useState('');
  const [dadosSalvos, setDadosSalvos] = useState([]);

  const buscarItens = () => {
    const resultadosEncontrados = itemSearch.filter(item =>
      item['Produto'].includes(searchTerm) || 
      item.Descricao.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item['Saldo Atual'].toString().includes(searchTerm) // Garantir que o saldo seja tratado como string
    );
    console.log(resultadosEncontrados); // Para depuração
    setResultados(resultadosEncontrados); // Atualiza os resultados da pesquisa
  };
 

  const salvarQuantidade = (codigo, descricao) => {
    if (!quantidade || isNaN(quantidade) || quantidade <= 0) {
      alert('Por favor, insira uma quantidade válida');
      return;
    }
  
    // Converte a quantidade para número inteiro
    const novaQuantidade = parseInt(quantidade, 10);
  
    // Verifica se o item já existe na tabela de dados
    const itemExistente = tabelaDados.find(item => item.codigo === codigo);
  
    if (itemExistente) {
      // Se o item já existe, atualiza a quantidade somando as quantidades
      const dadosAtualizados = tabelaDados.map(item =>
        item.codigo === codigo
          ? { ...item, quantidade: item.quantidade + novaQuantidade }
          : item
      );
      setTabelaDados(dadosAtualizados);
    } else {
      // Se o item não existe, adiciona o novo item à tabela
      const novoItem = { codigo, descricao, quantidade: novaQuantidade };
      setTabelaDados([...tabelaDados, novoItem]);
    }
  
    // Limpa o campo de quantidade após salvar
    setQuantidade('');
    
    // Log do item salvo ou atualizado
    console.log("Dados salvos ou atualizados:", tabelaDados);
  };

  const copyRenderedContent = () => {
    const tabela = document.querySelector(`.${style.tabelaSolicitacao}`);
    if (!tabela) return;

    const range = document.createRange();
    range.selectNode(tabela);

    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);

      const success = document.execCommand('copy');
      selection.removeAllRanges();

      if (success) {
        alert('Conteúdo visual copiado! Você pode colar no Outlook com formatação.');
      } else {
        alert('Não foi possível copiar. Verifique se o navegador suporta essa funcionalidade.');
      }
    }
  };

  return (
    <>
      

      {/* Formulário de Solicitação */}
      <div className={style.naoCopiar}>
        <p>Projeto</p>
        <input type="text" placeholder="DIGITE O NOME PROJETO EX: TROCA DE POSTE"  className={style.textBox} value={projeto} onChange={(e) => setProjeto(e.target.value)} />
        <p>Data</p>
        <input type="date"  className={style.textBox} value={datesol} onChange={(e) => setDatesol(e.target.value)} />
        <p>Solicitante</p>
        <input type="text"  placeholder="DIGITE O NOME DO SOLICITANTE EX: JÚNIOR GRAÇA" className={style.textBox} value={solicitante} onChange={(e) => setSolicitante(e.target.value)} />
        <p>Unidade</p>
        <input type="text"  placeholder="DIGITE A UNIDADE EX: FILIAL 48 TRES LAGOAS" className={style.textBox} value={unidade} onChange={(e) => setUnidade(e.target.value)} />
        <p>Atividade</p>
        <input type="text"    placeholder="DIGITE A ATIVIDADE" className={style.textBox} value={atividade} onChange={(e) => setAtividade(e.target.value)} />
        <>
        <input
          type="text"
          className={style.textBox}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="DIGITE O NOME DO ITEM"
        />
        <button onClick={buscarItens}>Pesquisar</button>
        <div>
  

        <div>
          {resultados.length > 0 ? (
            <ul>
              {resultados.map(item => (
                <li key={item['Produto']}>
                  <span className={style.textPedido}>{item.Descricao} ({item['Produto']})</span>
                  <span className={style.textPedido}> Saldo Atual ({item['Saldo Atual']})</span>
                  <input
                    type="number"
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                    placeholder="Quantidade"
                  />
                  <button onClick={() => salvarQuantidade(item['Produto'], item.Descricao)}>
                    Salvar
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum item encontrado</p>
          )}
        </div>

        <div>
          <h3>Itens Salvos</h3>
          <ul>
            {tabelaDados.map((item, index) => (
              <li key={index} className={style.textPedido}>
                {item.descricao} ({item.codigo}) - Quantidade: {item.quantidade}
              </li>
            ))}
          </ul>
        </div>
      </div>
        </>
        <button onClick={copyRenderedContent}>Enviar dados</button>
      </div>
      <div className={style.tabelaSolicitacao}>
        <div className={style.cabecalho}>
          <h1>LISTA DE SOLICITAÇÃO DE MATERIAIS</h1>
        </div>
        <div className={style.detalhes}>
          <div className={style.linha}><span><strong>PROJETO:</strong> {projeto}</span></div>
          <div className={style.linha}><span><strong>DATA:</strong> {datesol}</span></div>
          <div className={style.linha}><span><strong>SOLICITANTE:</strong> {solicitante}</span></div>
          <div className={style.linha}><span><strong>UNIDADE:</strong> {unidade}</span></div>
          <div className={style.linha}><span><strong>ATIVIDADE:</strong> {atividade}</span></div>
        </div>
        <table className={style.tabelaMateriais}>
          <thead>
            <tr>
              <th>CÓD</th>
              <th>DESCRIÇÃO</th>
              <th>QTD</th>
            </tr>
          </thead>
          <tbody>
            {tabelaDados.map((item, index) => (
              <tr key={index}>
                <td>{item.codigo}</td>
                <td>{item.descricao}</td>
                <td>{item.quantidade}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={style.buttons}>
          <button onClick={copyRenderedContent}>Copiar Página Renderizada</button>
        </div>
      </div>
    </>
  );
}

export default PedidoMaterial;
