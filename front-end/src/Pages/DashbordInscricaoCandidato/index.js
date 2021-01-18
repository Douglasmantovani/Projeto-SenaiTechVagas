import React, { useEffect, useState } from "react";

import "./style.css";

import AccessBar from "../../Components/AccessBar/index";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer/index";
import InfoVaga from "../../Components/InfoVaga/Index";
import Tag from "../../Components/Tag/Index";
import AccessMenu from "../../Components/AccessMenu";

import imgGlobal from "../../assets/global.png";
import imgDesenvolvimento from "../../assets/web-programming.webp";
import imgLocalizacao from "../../assets/big-map-placeholder-outlined-symbol-of-interface.webp";
import imgSalario from "../../assets/money (1).webp";
import imgTipoContrato from "../../assets/gears.webp";
import imgFuncao from "../../assets/rocket-launch.webp";
import IconEmpresa from "../../assets/building.webp";

import { uri } from "../../services/conexao";

export default function InscricaoDashboardCandidato() {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    listar();
  }, []);

  const listar = () => {
    fetch(`${uri}/api/Candidato/ListarVagasInscritas`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        FormatarSalario(dados);
        setVagas(dados);
      })
      .catch((erro) => console.error(erro));
  };

  function FormatarSalario(list) {
    for (var i = 0; i < list.length; i++) {
      list[i].salario = list[i].salario.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    }
  }

  const revogarInscricao = (idInscricao) => {
    fetch(`${uri}/api/Candidato/RevogarInscricao/${idInscricao}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        alert(dados);
        listar();
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="InscricaoDashboardCandidato">
      <AccessBar />
      <Header />
      <AccessMenu />
      <main className="">
        <div className="bannerDashboardCandidato">
          <h2>Bem-vindo, Candidato ;)!</h2>
        </div>

        <section className="sessaoVagaInscritas">
          <div className="title-vagas-inscritas">
            <h3>Vagas que você se inscreveu:</h3>
          </div>

          <div className="listadeVagas">
            {vagas.map((item) => {
              return (
                <div className="vaga" key={item.idVaga}>
                  <p>{"Voce se inscreveu em:" + item.dataInscricao}</p>
                  <div className="VagaCompleta">
                    <img
                      src={`${uri}/imgPerfil/${item.caminhoImagem}`}
                      className="ImagemEmpresa"
                      alt="Imagem de perfil da empresa"
                    />
                    <div className="MainVaga">
                      <h3>{item.tituloVaga}</h3>

                      <div className="InfoVagas">
                        <InfoVaga
                          NomeProp={item.razaoSocial}
                          source={IconEmpresa}
                        />
                        <InfoVaga
                          NomeProp={item.localidade}
                          source={imgLocalizacao}
                        />
                        <InfoVaga
                          NomeProp={item.experiencia}
                          source={imgFuncao}
                        />
                        <InfoVaga
                          NomeProp={item.tipoContrato}
                          source={imgTipoContrato}
                        />
                        <InfoVaga NomeProp={item.salario} source={imgSalario} />
                        <InfoVaga
                          NomeProp={item.nomeArea}
                          source={imgDesenvolvimento}
                        />
                        <InfoVaga
                          NomeProp={item.tipoPresenca}
                          source={imgGlobal}
                        />
                      </div>

                      <div className="TecnologiasVaga">
                        {item.tecnologias.map((tec) => {
                          return <Tag key={tec} NomeTag={tec}></Tag>;
                        })}
                      </div>
                      <div className="divisionBtnRevogar">
                        <button
                          className="btnRevogar"
                          onClick={() => revogarInscricao(item.idInscricao)}
                        >
                          revogar inscrição
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
