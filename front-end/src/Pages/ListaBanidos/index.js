import React, { useState, useEffect } from "react";

import AccessBar from "../../Components/AccessBar";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import AccessMenu from "../../Components/AccessMenu";

import Refresh from "../../assets/images/refresh.webp";
import imgDelete from "../../assets/delete.webp";

import { uri } from "../../services/conexao";

import "./style.css";

export default function ListaBanidos() {
  const [Banidos, setBanidos] = useState([]);

  useEffect(() => {
    listarBanidos();
  }, []);

  const DesbanirUsuario = (idUsuario) => {
    fetch(`${uri}/api/Administrador/Desbanir/${idUsuario}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        alert(dados);
        listarBanidos();
      })
      .catch((err) => console.error(err));
  };

  const DeletarUsuarioPermanete = (idUsuario) => {
    fetch(`${uri}/api/Administrador/DeletarUsuarioBanido/${idUsuario}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        alert(dados);
        listarBanidos();
      })
      .catch((err) => console.error(err));
  };

  const listarBanidos = () => {
    fetch(`${uri}/api/Administrador/ListarBanidos`, {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        setBanidos(dados);
      })
      .catch((err) => console.error(err));
  };

  return (
    <body className="corpo">
      <AccessBar />
      <Header />
      <AccessMenu />
      <div className="marginBanidos">
        <h1 className="tituloBanidos">Lista de Banidos</h1>
        {Banidos.map((item) => {
          return (
            <div key={item.idUsuario} className="banidoBox">
              <div className="colunaMobile">
                <div className="banido">
                  <img
                    className="user"
                    src={`${uri}/imgPerfil/${item.caminhoImagem}`}
                    alt="Imagem de perfil do usuario"
                  />
                </div>
                <div className="info">
                  <p>ID:{item.idUsuario}</p>
                  <p>E-mail: {item.email}</p>
                </div>
              </div>
              <div className="data">
                <div className="desbanir">
                  <p onClick={() => DesbanirUsuario(item.idUsuario)}>Desbanir</p>
                  <img
                    src={Refresh}
                    onClick={() => DesbanirUsuario(item.idUsuario)}
                    alt="Botão que retorna o aceeso ao usuario banido"
                  />
                </div>
                <div className="DeletarPermanente">
                  <p onClick={() => DeletarUsuarioPermanete(item.idUsuario)}>Deletar permanentemente</p>
                  <img
                    src={imgDelete}
                    onClick={() => DeletarUsuarioPermanete(item.idUsuario)}
                    className="Delete"
                    alt="Botão que deleta o usuario permanetemente"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </body>
  );
}
