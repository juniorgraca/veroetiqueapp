// App.tsx
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tablecg from "./tableappcg/Tablecg";
import HomeApp from "./homeapp/HomeApp";
import Tabletls from "./tableapptls/Tabletls";
import Table from "./tableapp/Table";
import CgLarge from "./cglarge/CgLarge";


export default function App() {
  return (

      <Router>
        <Routes>
          <Route path="/" element={<HomeApp />} />
          <Route path="/tlssmall" element={<Tabletls />} />
          <Route path="/cgsmall" element={<Tablecg />} />
          <Route path="/andsmall" element={<Table />} />
          <Route path="/cgbig" element={<CgLarge />} />


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
