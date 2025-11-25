
import "./Homeapp.css";
import { Link } from "react-router-dom";

import TypewriterEffect from "./TypewriterEffect";
import { useEffect } from "react";
import Navbar from "../navbar/Navbar";

function HomeApp() {

  useEffect(() => {

    document.title = "Estoque Assistente - Página inicial";
  }, []);
  return (

     <section className="secHome">
      <Navbar></Navbar>
    {/* <div className="navBartop">
      <div className="logoFundo">
    <img className="logoJr" src={Logojr} width="38" alt="LogoJr" />
    </div>
      <ul>
        <li>Home</li>
      <li>Contact</li>
      <Link className="liBar" to="/about">Gestão de Almoxarifado </Link>
      
      </ul>
      
      
      </div> */}
    <div className="news"> <div className="newsIcon">News</div> <p className="updatedText"> Updated v1.0.1 - Três Lagoas - MS: Opção pequena adicionada Updated v1.0.0 / Campo Grande - MS: Opção grande adicionada</p></div>
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
        <Link to="/cgsmall" className="linkadd">
          <div className="StockTagTittle">StockTag 3cm</div>
          <div className="StockTagSubtittle">Média</div>
          </Link>
          </button>

        <button className="btnStockTag">
        <Link to="/cgbig" className="linkadd">
          <div className="StockTagTittle">StockTag 4cm</div>
          <div className="StockTagSubtittle">Grande</div>
          </Link>
          </button>
             
        <button className="btnStockTagDisable">
          {/* <Link to="/cgbig" className="linkadd"> */}
          <div className="StockTagTittle">StockTag 6cm</div>
          <div className="StockTagSubtittle">Grande</div>
          {/* </Link> */}
          </button>
          
        </div>
        </div>
        <div className="contentAndradina">
        <div className="cityTittle">Três Lagoas</div>
        <div className="containetBtn">
          
          <button className="btnStockTag">
          <Link to="/tlssmal1" className="linkadd">
          <div className="StockTagTittle">StockTag 3 Cm</div>
          <div className="StockTagSubtittle">Média</div>
          </Link>
          </button>

        <button className="btnStockTag">
          <Link to="/tlssmall" className="linkadd">
          <div className="StockTagTittle">StockTag 5cm</div>
          <div className="StockTagSubtittle">Grande</div>
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
