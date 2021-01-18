import React, { useEffect, useState } from "react";

import Tag from "../../Components/Tag/Index";
import InfoVaga from "../../Components/InfoVaga/Index";
import Footer from "../../Components/Footer/index";
import AccessBar from "../../Components/AccessBar";
import Header from "../../Components/Header";
import AccessMenu from "../../Components/AccessMenu";

import imgDesenvolvimento from "../../assets/web-programming.webp";
import imgGlobal from "../../assets/global.png";
import imgLocalizacao from "../../assets/big-map-placeholder-outlined-symbol-of-interface.webp";
import imgSalario from "../../assets/money (1).webp";
import imgTipoContrato from "../../assets/gears.webp";
import imgFuncao from "../../assets/rocket-launch.webp";
import IconEmpresa from "../../assets/building.webp";
import { useHistory } from "react-router-dom";

import { uri } from "../../services/conexao";

import "./visualizarvaga.css";

export default function VisualizarVaga() {
  let history = useHistory();
  const [Experiencia, setExperiencia] = useState("");
  const [TipoContrato, setTipoContrato] = useState("");
  const [Salario, setSalario] = useState("");
  const [DescricaoBeneficio, setDescricaoBeneficio] = useState("");
  const [DescricaoEmpresa, setDescricaoEmpresa] = useState("");
  const [DescricaoVaga, setDescricaoVaga] = useState("");
  const [Tecnologias, setTecnologias] = useState([]);
  const [Cidade, setCidade] = useState("");
  const [TituloVaga, setTituloVaga] = useState("");
  const [Area, setArea] = useState("");
  const [RazaoSocial, setRazaoSocial] = useState("");
  const [tipoPresenca, setTipoPresenca] = useState("");
  const [CaminhoImagem, setCaminho] = useState("");

  useEffect(() => {
    listar();
  }, []);

  const SeCandidatar = () => {
    const form = {
      idVaga: localStorage.getItem("idVagaSelecionada"),
    };
    fetch(`${uri}/api/Candidato/AdicionarInscricao`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        alert(dados);
        history.push("/perfilCandidato");
      })
      .catch((err) => console.error(err));
  };

  const listar = () => {
    fetch(
      `${uri}/api/Usuario/BuscarPorId/` +
        localStorage.getItem("idVagaSelecionada"),
      {
        method: "GET",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
          "content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((dados) => {
        setArea(dados.nomeArea);
        setTipoPresenca(dados.tipoPresenca);
        setRazaoSocial(dados.razaoSocial);
        setTituloVaga(dados.tituloVaga);
        setTipoContrato(dados.tipoContrato);
        setSalario(
          dados.salario.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })
        );
        setTecnologias(dados.tecnologias);
        setCidade(dados.localidade);
        setExperiencia(dados.experiencia);
        setDescricaoBeneficio(dados.descricaoBeneficio);
        setDescricaoEmpresa(dados.descricaoEmpresa);
        setDescricaoVaga(dados.descricaoVaga);
        setCaminho(dados.caminhoImagem);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="VisualizarVaga">
      <AccessBar />
      <Header />
      <AccessMenu />
      <main className="sessaoVisualizarVaga">
        <section className="imgBannerDescriVaga">
          <div className="divisionIntroVaga">
            <h2 className="v-titleVaga">{TituloVaga}</h2>

            <div className="divisionTagsLinguagem">
              {Tecnologias.map((item) => {
                return <Tag NomeTag={item} />;
              })}
            </div>
          </div>
        </section>

        <section className="infoVagaVisualizar">
          <div className="icard-division">
            <img
              className="ImagemEmpresa"
              src={`${uri}/imgPerfil/${CaminhoImagem}`}
              alt="Logo da empresa"
            />

            <div className="divisionTagsVagas">
              <div className="card-vaga-info">
                <InfoVaga NomeProp={RazaoSocial} source={IconEmpresa} />
                <InfoVaga NomeProp={Cidade} source={imgLocalizacao} />
                <InfoVaga NomeProp={Experiencia} source={imgFuncao} />
              </div>

              <div className="card-vaga-info">
                <InfoVaga NomeProp={TipoContrato} source={imgTipoContrato} />
                <InfoVaga NomeProp={Salario} source={imgSalario} />
                <InfoVaga NomeProp={Area} source={imgDesenvolvimento} />
                <InfoVaga NomeProp={tipoPresenca} source={imgGlobal} />
              </div>
            </div>
          </div>
        </section>

        <section className="sessao-svempresa">
          <div className="descri-empresa">
            <h2>Descrição da empresa</h2>

            <p>{DescricaoEmpresa}</p>
          </div>

          <div className="descri-vaga">
            <h2>Requisitos da vaga</h2>
            <p>{DescricaoVaga}</p>
          </div>
        </section>

        <section className="divisionBeneVaga">
          <div className="centerBene">
            <h2>O que oferecemos</h2>

            <div className="divisionPlan">
              <div className="divisionPlan">
                <p>{DescricaoBeneficio}</p>
              </div>
            </div>
            <button
              className="btnCandidatase"
              type="submit"
              onClick={SeCandidatar}
            >
              Me Candidatar
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
