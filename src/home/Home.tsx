
import "./Home.css";
import { useEffect } from "react";
import veroLogo from "/verologo1.png";
import { useFilial } from '../FilialContext'; // Importando o contexto

export default function Home() {
  const { filial, setFilial } = useFilial();
  useEffect(() => {

    document.title = "Estoque Assistente - Página inicial";
  }, []);

  const handleFilialChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilial(event.target.value);
  };

  return (
    <>
    <section className="no-print">
      <div className="homeMain">
        <div className="logoandselect">
          <div className="logoandselectArea">
            <img src={veroLogo} width="100px" height="30px" alt="Logo" />
            <div className="fundoSelec">
              <div className="initalMsgSelec">Selecione a Filial</div>
              <select name="filial" id="filial" value={filial} onChange={handleFilialChange}>
                <option value="1">Andradina</option>
                <option value="2">Campo Grande</option>
                <option value="3">Três Lagoas</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      </section>  
    </>
  );
}
