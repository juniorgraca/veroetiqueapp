import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tablecg from "./tableappcg/Tablecg";
import HomeApp from "./homeapp/HomeApp";
import Tabletls from "./tableapptls/Tabletls";
import Table from "./tableapp/Table";
import CgLarge from "./cglarge/CgLarge";
import TableSmallTls from "./tablesmaltls/TableSmallTls";
import About from "./about/About";
import VerificaSerial from "./snhelper/VerificarSerial";
import NotFound from "./notfound/NotFound";
import PedidoMaterial from "./PedidoMaterial/PedidoMaterial";



export default function App() {
  return (

      <Router>
        <Routes>
          <Route path="/" element={<HomeApp />} />
          <Route path="/tlssmall" element={<Tabletls />} />
          <Route path="/cgsmall" element={<Tablecg />} />
          <Route path="/andsmall" element={<Table />} />
          <Route path="/cgbig" element={<CgLarge />} />
          <Route path= "/tlssmal1" element = {<TableSmallTls/>} />
          <Route path = "/about" element ={<About/>} />
          <Route path = "/vsn" element ={<VerificaSerial/>} />
          <Route path = "/pedido" element={<PedidoMaterial/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>   
      </Router>
   
  );


  return (
    <>
    <HomeApp></HomeApp>
    <Tablecg></Tablecg>
    </>
  )
};
