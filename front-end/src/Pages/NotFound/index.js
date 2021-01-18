import React from "react";
import { Link } from "react-router-dom";

import AccessBar from "../../Components/AccessBar";
import AccessMenu from "../../Components/AccessMenu";
import Footer from "../../Components/Footer";
import Robot from "../../Components/imgsvg/robot.js";

import Techvagas from "../../assets/logops.webp";

import { parseJwt } from "../../services/token";

import "./style.css";

const NotFound = () => {
  function View() {
    if (
      localStorage.getItem("token") == null ||
      localStorage.getItem("token") == undefined
    ) {
      return (
        <Link to="/" className="pagina-principal-link">
          página principal.
        </Link>
      );
    } else if (parseJwt().Role == "1") {
      return (
        <Link to="/perfil" className="pagina-principal-link">
          página principal.
        </Link>
      );
    } else if (parseJwt().Role == "2") {
      return (
        <Link to="/perfilCandidato" className="pagina-principal-link">
          página principal.
        </Link>
      );
    } else if (parseJwt().Role == "3") {
      return (
        <Link to="/perfilEmpresa" className="pagina-principal-link">
          página principal.
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
            <strong>Erro 404</strong>
          </h3>
          <h3>Que pena! Não encontramos o quê você estava procurando.</h3>
          <p>Você pode voltar para a {View()}</p>
        </div>
        <div className="not-found-img">
          <Robot />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
