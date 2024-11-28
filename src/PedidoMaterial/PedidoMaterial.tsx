import Navbar from '../navbar/Navbar';
import itemSearch from '../type/itemSearch.json';
import style from './PedidoMaterial.module.css';
import { useState } from 'react';

function PedidoMaterial() {
  // Interface Item
  interface Item {
    Produto: string; // Define que Produto é uma string
    Descricao: string; // Define que Descricao é uma string
    'Saldo Atual': number; // Define que Saldo Atual é um número
  }

  // Estado para os dados da tabela
  const [tabelaDados, setTabelaDados] = useState<{ codigo: string; descricao: string; quantidade: number }[]>([]);

  // Estado para os campos de entrada
  const [solicitante, setSolicitante] = useState<string>('');
  const [datesol, setDatesol] = useState<string>('');
  const [projeto, setProjeto] = useState<string>('');
  const [unidade, setUnidade] = useState<string>('');
  const [atividade, setAtividade] = useState<string>('');

  // Estado para a busca
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [resultados, setResultados] = useState<Item[]>([]);
  const [quantidade, setQuantidade] = useState<string>('');

  // Função para buscar itens
  const buscarItens = () => {
    if (!searchTerm.trim()) {
      alert('Por favor, insira um termo para a pesquisa.');
      return;
    }

    setResultados([]);
  
    const resultadosEncontrados = itemSearch.filter((item: Item) =>
      item.Produto.includes(searchTerm) ||
      item.Descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item['Saldo Atual'].toString().includes(searchTerm) // Converte o número para string para comparar
    );
    setResultados(resultadosEncontrados); 
  };

  // Função para salvar a quantidade
  const salvarQuantidade = (codigo: string, descricao: string, quantidade: number | string): void => {
    if (!quantidade || isNaN(Number(quantidade)) || Number(quantidade) <= 0) {
      alert('Por favor, insira uma quantidade válida');
      return;
    }

    // Converte a quantidade para número inteiro
    const novaQuantidade = parseInt(quantidade.toString(), 10);

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

  // Função para copiar o conteúdo renderizado
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

  // Função para lidar com a alteração da data
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value; // Captura a data digitada
    if (/^\d{4}-\d{2}-\d{2}$/.test(selectedDate)) { // Verifica se está no formato ISO completo
      const formattedDate = new Date(selectedDate).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      setDatesol(formattedDate);
    } else {
      setDatesol(selectedDate); // Exibe o valor parcial
    }
  };

  return (
    
    <>
    
    <div className={style.secHome}>
    <Navbar/>
      <div className={style.naoCopiar}> 
        <p className={style.pTitle}>Projeto</p>
        <input type="text" placeholder="DIGITE O NOME PROJETO EX: TROCA DE POSTE" value={projeto} onChange={(e) => setProjeto(e.target.value)} />
        <p className={style.pTitle}>Data</p>
        <input
          type="text"
          value={datesol}
          onChange={handleDateChange}     
          placeholder="DIGITE A DATA NO FORMATO DD/MM/AAAA EX: 30/07/2077" 
        />  
      
        <p className={style.pTitle}>Solicitante</p>
        <input type="text" placeholder="DIGITE O NOME DO SOLICITANTE EX: JÚNIOR GRAÇA" value={solicitante} onChange={(e) => setSolicitante(e.target.value)} />
        <p className={style.pTitle}>Unidade</p>
        <input type="text" placeholder="DIGITE A UNIDADE EX: FILIAL 48 TRES LAGOAS" value={unidade} onChange={(e) => setUnidade(e.target.value)} />
        <p className={style.pTitle}>Atividade</p>
        <input type="text" placeholder="DIGITE A ATIVIDADE" value={atividade} onChange={(e) => setAtividade(e.target.value)} />

        <p className={style.pTitle}>Área de pesquisa</p>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="DIGITE O NOME DO ITEM"
        />
        
        <button onClick={() => {
          buscarItens();
          setSearchTerm(''); // Limpa o campo de busca
        }}>
          <p className={style.pTitle}>Pesquisar</p> 
        </button>
      </div>

      <div>
        {resultados.length > 0 ? (
          <ul className={style.ulFundo}>
            {resultados.map(item => (
              <li key={item['Produto']} className={style.liItems}>
                <span className={style.textPedido}>{item.Descricao} ({item['Produto']})</span>
                <span className={style.textPedido}> Saldo Atual ({item['Saldo Atual']})</span>
                <input
                  type="number"
                  value={quantidade}
                  onChange={(e) => setQuantidade(e.target.value)}
                  placeholder="Quantidade"
                />
                <button onClick={() => salvarQuantidade(item['Produto'], item.Descricao, quantidade)}>
                  Salvar
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className={style.pTitle}>Nenhum item encontrado</p>
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

      <div className={style.tabelaSolicitacao}>
        <div className={style.cabecalho}>
          <thead>
            <tr className={style.trInfo}>
              <th style={{ width: '10%', textAlign: 'center' }}></th>
              <th style={{ width: '150%', textAlign: 'center' }}>LISTA DE SOLICITAÇÃO DE MATERIAIS</th>
              <th style={{ width: '25%', textAlign: 'center' }}></th>
            </tr>
          </thead>
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
            <tr className={style.trInfo}>
              <th style={{ width: '10%', textAlign: 'center' }}>CÓD</th>
              <th style={{ width: '150%', textAlign: 'center' }}>DESCRIÇÃO</th>
              <th style={{ width: '25%', textAlign: 'center' }}>QUANTIDADE</th>
            </tr>
          </thead>
          <tbody>
            {tabelaDados.map(item => (
              <tr key={item.codigo}>
                <td>{item.codigo}</td>
                <td>{item.descricao}</td>
                <td>{item.quantidade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <button onClick={copyRenderedContent}>Copiar conteúdo renderizado</button>
      </div>
      </div>
    </>
  );
}

export default PedidoMaterial;
