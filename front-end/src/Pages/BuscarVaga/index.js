import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import AccessBar from "../../Components/AccessBar";
import Header from "../../Components/Header";
import AccessMenu from "../../Components/AccessMenu";
import Footer from "../../Components/Footer";
import Tag from "../../Components/Tag/Index";
import InfoVaga from "../../Components/InfoVaga/Index";

import imgGlobal from "../../assets/global.png";
import imgDesenvolvimento from "../../assets/web-programming.webp";
import imgLocalizacao from "../../assets/big-map-placeholder-outlined-symbol-of-interface.webp";
import imgSalario from "../../assets/money (1).webp";
import imgTipoContrato from "../../assets/gears.webp";
import imgFuncao from "../../assets/rocket-launch.webp";
import IconEmpresa from "../../assets/building.webp";

import { uri } from "../../services/conexao";

import "./style.css";

export default function BuscarVaga() {
  let history = useHistory();
  const [ListVagas, SetListVagas] = useState([]);
  const [OpcaoFiltro, setOpcaoFiltro] = useState("");
  const [VagaTipoContrato, setVagaTipoContrato] = useState([]);
  const [VagaExperiencia, setVagaExperiencia] = useState([]);
  const [VagaTecnologia, setVagaTecnologia] = useState([]);
  const [Tecnologias, setTecnologias] = useState([]);

  useEffect(() => {
    listarVagas();
    View();
    listarTecnologias();
  }, []);

  const FiltrarTipoContrato = (tipo) => {
    for (let i = 0; i < ListVagas.length; i++) {
      if (ListVagas[i].tipoContrato == tipo) {
        VagaTipoContrato.push(ListVagas[i]);
      }
    }
  };

  function FormatarSalario(list) {
    for (var i = 0; i < list.length; i++) {
      list[i].salario = list[i].salario.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    }
  }

  const FiltrarExperiencia = (Experiencia) => {
    for (let i = 0; i < ListVagas.length; i++) {
      if (ListVagas[i].experiencia == Experiencia) {
        VagaExperiencia.push(ListVagas[i]);
      }
    }
  };

  const FiltrarTecnologia = (tecnologia) => {
    for (var i = 0; i < ListVagas.length; i++) {
      let Tecnologias = ListVagas[i].tecnologias;
      for (var o = 0; o < Tecnologias.length; o++) {
        if (Tecnologias[o] == tecnologia) {
          VagaTecnologia.push(ListVagas[i]);
          break;
        }
      }
    }
  };

  function View() {
    if (OpcaoFiltro == "") {
      return (
        <div className="vagas">
          {ListVagas.map((item) => {
            return (
              <div
                key={item.idVaga}
                className="vaga"
                onClick={(event) => {
                  event.preventDefault();
                  localStorage.setItem("idVagaSelecionada", item.idVaga);
                  history.push("/VisualizarVagaCandidato");
                }}
              >
                <div className="VagaCompleta">
                  <img
                    src={`${uri}/imgPerfil/${item.caminhoImagem}`}
                    className="ImagemEmpresa"
                    alt="Imagem de perfil"
                  ></img>
                  <div className="MainVaga">
                    <h3 className="UnderlineText">{item.tituloVaga}</h3>
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else if (
      OpcaoFiltro == "CLT" ||
      OpcaoFiltro == "PJ" ||
      OpcaoFiltro == "Estagio"
    ) {
      VagaTipoContrato.splice(0, Number.MAX_VALUE);
      FiltrarTipoContrato(OpcaoFiltro);
      return (
        <div className="vagas">
          {VagaTipoContrato.map((item) => {
            return (
              <div
                key={item.idVaga}
                className="vaga"
                onClick={(event) => {
                  event.preventDefault();
                  localStorage.setItem("idVagaSelecionada", item.idVaga);
                  history.push("/VisualizarVagaCandidato");
                }}
              >
                <div className="VagaCompleta">
                  <img
                    src={`${uri}/imgPerfil/${item.caminhoImagem}`}
                    className="ImagemEmpresa"
                    alt="Imagem empresa"
                  ></img>
                  <div className="MainVaga">
                    <h3 className="UnderlineText">{item.tituloVaga}</h3>
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else if (
      OpcaoFiltro == "Júnior" ||
      OpcaoFiltro == "Pleno" ||
      OpcaoFiltro == "Sênior"
    ) {
      VagaExperiencia.splice(0, Number.MAX_VALUE);
      FiltrarExperiencia(OpcaoFiltro);
      return (
        <div className="vagas">
          {VagaExperiencia.map((item) => {
            return (
              <div
                key={item.idVaga}
                className="vaga"
                onClick={(event) => {
                  event.preventDefault();
                  localStorage.setItem("idVagaSelecionada", item.idVaga);
                  history.push("/VisualizarVagaCandidato");
                }}
              >
                <div className="VagaCompleta">
                  <img
                    src={`${uri}/imgPerfil/${item.caminhoImagem}`}
                    className="ImagemEmpresa"
                    alt="Imagem empresa"
                  ></img>
                  <div className="MainVaga">
                    <h3 className="UnderlineText">{item.tituloVaga}</h3>
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else if (OpcaoFiltro.length >= 1) {
      VagaTecnologia.splice(0, Number.MAX_VALUE);
      FiltrarTecnologia(OpcaoFiltro);
      return (
        <div className="vagas">
          {VagaTecnologia.map((item) => {
            return (
              <div
                key={item.idVaga}
                className="vaga"
                onClick={(event) => {
                  event.preventDefault();
                  localStorage.setItem("idVagaSelecionada", item.idVaga);
                  history.push("/VisualizarVagaCandidato");
                }}
              >
                <div className="VagaCompleta">
                  <img
                    src={`${uri}/imgPerfil/${item.caminhoImagem}`}
                    className="ImagemEmpresa"
                    alt="Imagem empresa"
                  ></img>
                  <div className="MainVaga">
                    <h3 className="UnderlineText">{item.tituloVaga}</h3>
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  }

  const listarVagas = () => {
    fetch(`${uri}/api/Candidato/ListarVagasPrincipal`, {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        FormatarSalario(dados);
        SetListVagas(dados);
      })
      .catch((err) => console.error(err));
  };

  const listarTecnologias = () => {
    fetch(`${uri}/api/Usuario/ListarTecnologia`, {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        setTecnologias(dados);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <AccessBar />
      <Header />
      <AccessMenu />
      <div className="BarraPesquisa">
        <h2>Busque sua vaga aqui</h2>
        <br />
        <div className="PeliculaPesquisa">
          <div className="InputPesquisa">
            <select
              className="InputPesquisa"
              onChange={(e) => setOpcaoFiltro(e.target.value)}
              value={OpcaoFiltro}
            >
              <option value="">Selecione a tecnologia que esta buscando</option>
              {Tecnologias.map((item) => {
                return (
                  <option key={item.idTecnologia} value={item.nomeTecnologia}>
                    {item.nomeTecnologia}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <button id="BotaoPesquisa">Pesquisar</button>
          </div>
        </div>
      </div>
      <div className="content-searchJobs">
        <div className="main-content-search-jobs">
          <div id="filter-searchJobs">
            <button
              className="btn-active"
              id="btn-all"
              onClick={(e) => setOpcaoFiltro(e.target.value)}
              value=""
            >
              Todas as vagas
            </button>
            <p>
              <strong>Filtrar por contrato:</strong>
            </p>
            <button
              className="btn-filter"
              onClick={(e) => setOpcaoFiltro(e.target.value)}
              value="CLT"
            >
              CLT
            </button>
            <button
              className="btn-filter"
              onClick={(e) => setOpcaoFiltro(e.target.value)}
              value="Estagio"
            >
              Estágio
            </button>
            <button
              className="btn-filter"
              onClick={(e) => setOpcaoFiltro(e.target.value)}
              value="PJ"
            >
              PJ
            </button>
            <p>
              <strong>Filtrar por experiência:</strong>
            </p>
            <button
              className="btn-filter"
              onClick={(e) => setOpcaoFiltro(e.target.value)}
              value="Júnior"
            >
              Júnior
            </button>
            <button
              className="btn-filter"
              onClick={(e) => setOpcaoFiltro(e.target.value)}
              value="Pleno"
            >
              Pleno
            </button>
            <button
              className="btn-filter"
              onClick={(e) => setOpcaoFiltro(e.target.value)}
              value="Sênior"
            >
              Sênior
            </button>
          </div>
          {View()}
        </div>
      </div>
      <Footer />
    </div>
  );
}
