import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import Logojr from "/logojr.png";

function Navbar() {
  const location = useLocation(); // Obtém a localização atual da rota

  return (
    <>
      <div className="navBartop">
        <div className="logoFundo">
          <img className="logoJr" src={Logojr} width="38" alt="LogoJr" />
        </div>
        <ul>
          <Link
            className={`liBar ${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            Home
          </Link>
          {/* <Link
            className={`liBar ${location.pathname === "/about" ? "active" : ""}`}
            to="/about"
          >
            Gestão de Almoxarifado
          </Link> */}
          <Link
            className={`liBar ${location.pathname === "/vsn" ? "active" : ""}`}
            to="/vsn"
          >
            Verificar Equipamento
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
