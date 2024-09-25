import "./Navbar.css";
import { Link } from "react-router-dom";
import Logojr from "/logojr.png";

function Navbar() {
  return (
      <>
      <div className="navBartop">
      <div className="logoFundo">
    <img className="logoJr" src={Logojr} width="38" alt="LogoJr" />
    </div>
      <ul>
      <Link className="liBar" to="/">Home </Link>
      <Link className="liBar" to="/about">Gestão de Almoxarifado </Link>
      </ul>
      

      </div>
      </>
  )
}

export default Navbar
