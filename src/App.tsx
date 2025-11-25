
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
import TableTam1 from "./tabletam1/TableTam1";
import TableTam2 from "./tabletam2/TableTam2";



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
          <Route path= "/tam1" element = {<TableTam1/>} />
          <Route path= "/tam2" element = {<TableTam2/>} />
          <Route path = "/about" element ={<About/>} />
          <Route path = "/vsn" element ={<VerificaSerial/>} />
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
