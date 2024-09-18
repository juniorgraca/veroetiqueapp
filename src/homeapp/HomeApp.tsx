
import "./Homeapp.css";
import { Link } from "react-router-dom";
import Logojr from "/logojr.png";
import TypewriterEffect from "./TypewriterEffect";


function HomeApp() {
  return (

     <section className="secHome">
 
    <div className="navBartop">
      <div className="logoFundo">
    <img className="logoJr" src={Logojr} width="38" alt="LogoJr" />
    </div>
      <ul>
        <li>Home</li>
      <li>Contact</li>
      
      </ul>
      
      
      </div>
    <div className="news"> <div className="newsIcon">News</div> <p>Updated - Campo Grande opção large adicionada</p></div>
    <section className="homeAppContainer">
<div className="containerBtnItens">
          <div className="titleHp">
            <TypewriterEffect></TypewriterEffect>
           
          </div>
          <div className="subtitleHp">
          Este é um projeto pessoal sem fins lucrativos, criado com o objetivo de auxiliar e otimizar as rotinas do almoxarifado. <br />
           O foco é melhorar a organização, controle e eficiência dos processos, oferecendo uma solução prática e acessível <br/>para o gerenciamento de estoque e outras atividades diárias
          </div>
          
          <div className="btncontactArea">
          <button className="linkendin" > <a href="https://www.linkedin.com/in/júnior-graça-b22094240/"  target="_blank" rel="noopener noreferrer">Linkedin</a> </button>
          <button className="btnContact">
            <a href="https://api.whatsapp.com/send/?phone=5567935003390&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" >
     Contato</a>
</button>
          
          </div>
          <div className="contentCity">
            <div className="contentAndradina">
        <div className="cityTittle">Andradina</div>
        <div className="containetBtn">
        <button className="btnStockTag">
      <Link to="/andsmall" className="linkadd">
          <div className="StockTagTittle">StockTag 3cm</div>
          <div className="StockTagSubtittle">Pequena</div>
      </Link>
          </button>

        <button className="btnStockTagDisable">
          
          <div className="StockTagTittle">Manutenção</div>
          <div className="StockTagSubtittle">Desabilitado</div>
          </button>

        <button className="btnStockTagDisable">
          
          <div className="StockTagTittle">Manutenção</div>
          <div className="StockTagSubtittle">Desabilitado</div>
        
          </button>
    
        </div>

        </div>
        <div className="contentAndradina">
        <div className="cityTittle">Campo Grande</div>
        <div className="containetBtn">
          
        <button className="btnStockTag">
        <Link to="/cgsmall" className="linkadd">
          <div className="StockTagTittle">StockTag 3cm</div>
          <div className="StockTagSubtittle">Pequena</div>
          </Link>
          </button>

        <button className="btnStockTag">
        <Link to="/cgbig" className="linkadd">

          <div className="StockTagTittle">StockTag 6cm</div>
          <div className="StockTagSubtittle">Grande</div>
          </Link>
          </button>
             
        <button className="btnStockTagDisable">
          
          <div className="StockTagTittle">Manutenção</div>
          <div className="StockTagSubtittle">Desabilitado</div>
          </button>
        </div>
        </div>
        <div className="contentAndradina">
        <div className="cityTittle">Três Lagoas</div>
        <div className="containetBtn">
          
          <button className="btnStockTag">
          <Link to="/tlssmal1" className="linkadd">
          <div className="StockTagTittle">StockTag 3 Cm</div>
          <div className="StockTagSubtittle">Pequena</div>
          </Link>
          </button>
          
        <button className="btnStockTag">
          <Link to="/tlssmall" className="linkadd">
          <div className="StockTagTittle">StockTag 5cm</div>
          <div className="StockTagSubtittle">Media</div>
          </Link>
          </button>

          

    
             
        <button className="btnStockTagDisable">
          <div className="StockTagTittle">Manutenção</div>
          <div className="StockTagSubtittle">Desabilitado</div>
          </button>
        </div>
        <div className="linkdinBody">
        </div>
        </div>
</div>
      </div>

      </section>

    </section>

  )
}

export default HomeApp
