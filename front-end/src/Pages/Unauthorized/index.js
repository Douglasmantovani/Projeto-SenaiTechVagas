import React from "react";
import { Link } from "react-router-dom";

import AccessBar from "../../Components/AccessBar";
import AccessMenu from "../../Components/AccessMenu";
import Footer from "../../Components/Footer";
import Lock from "../../Components/imgsvg/lock";

import Techvagas from "../../assets/logops.webp";
import { parseJwt } from "../../services/token";

import "./style.css";

const Unauthorized = () => {
  function View() {
    if (
      localStorage.getItem("token") == null ||
      localStorage.getItem("token") == undefined
    ) {
      return (
        <Link to="/login" className="pagina-principal-link">
          página de login..
        </Link>
      );
    } else if (parseJwt().Role == "1") {
      return (
        <Link to="/perfil" className="pagina-principal-link">
          página principal
        </Link>
      );
    } else if (parseJwt().Role == "2") {
      return (
        <Link to="/perfilCandidato" className="pagina-principal-link">
          página principal
        </Link>
      );
    } else if (parseJwt().Role == "3") {
      return (
        <Link to="/perfilEmpresa" className="pagina-principal-link">
          página principal
        </Link>
      );
    }
  }

  return (
    <div className="not-found-all">
      <AccessBar />
      <AccessMenu />
      <div className="not-found">
        <div className="not-found-text">
          <img
            src={Techvagas}
            className="not-found-text-img"
            alt="Logo TechVagas"
          />
          <h3>
            <strong>Erro 401</strong>
          </h3>
          <h3>Você não pode mexer aqui. Autentique-se</h3>
          <p>Volte para a {View()}</p>
        </div>
        <div className="not-found-img">
          <Lock />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Unauthorized;
