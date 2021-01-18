import React, { useState, useEffect } from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import AccessBar from "../../Components/AccessBar";
import AccessMenu from "../../Components/AccessMenu";
import InfoVaga from "../../Components/InfoVaga/Index";
import Tag from "../../Components/Tag/Index";

import imgDesenvolvimento from "../../assets/web-programming.webp";
import imgLocalizacao from "../../assets/big-map-placeholder-outlined-symbol-of-interface.webp";
import imgGlobal from "../../assets/global.png";
import imgSalario from "../../assets/money (1).webp";
import imgTipoContrato from "../../assets/gears.webp";
import imgFuncao from "../../assets/rocket-launch.webp";
import IconEmpresa from "../../assets/building.webp";

import { uri } from "../../services/conexao";

import "./style.css";

export default function VizualizarCandidatosAprovados() {
  let [idVaga, setIdVaga] = useState(0);
  const [Experiencia, setExperiencia] = useState("");
  const [TipoContrato, setTipoContrato] = useState("");
  const [Salario, setSalario] = useState("");
  const [Tecnologias, setTecnologias] = useState([]);
  const [Cidade, setCidade] = useState("");
  const [TituloVaga, setTituloVaga] = useState("");
  const [Candidatos, SetCandidato] = useState([]);
  const [TipoPresenca, setTipoPresenca] = useState("");
  const [NomeArea, setNomeArea] = useState("");
  const [RazaoSocial, setRazaoSocial] = useState("");
  const [CaminhoImagem, setCaminho] = useState("");

  useEffect(() => {
    idVaga = localStorage.getItem("idVagaSelecionadaEmpresa");
    listarCandidatos();
    BuscarPorId();
  }, []);

  const BuscarPorId = () => {
    fetch(`${uri}/api/Usuario/BuscarPorId/${idVaga}`, {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        setIdVaga(dados.idVaga);
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
        setTipoPresenca(dados.tipoPresenca);
        setNomeArea(dados.nomeArea);
        setRazaoSocial(dados.razaoSocial);
        setCaminho(dados.caminhoImagem);
      })
      .catch((err) => console.error(err));
  };

  const listarCandidatos = () => {
    fetch(`${uri}/api/Empresa/ListarCandidatosAprovados/${idVaga}`, {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        SetCandidato(dados);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="bodyPartVizualizarVagaEmpresa">
      <AccessBar />
      <Header />
      <AccessMenu />
      <div className="BannerVizualizarVagaEmpresa">
        <h1>Veja quem foi aprovado à sua vaga</h1>
      </div>
      <br />
      <div className="vaga">
        <div className="VagaCompleta">
          <img
            src={`${uri}/imgPerfil/${CaminhoImagem}`}
            className="ImagemEmpresa"
            alt="Imagem de perfil da empresa"
          />
          <div className="MainVaga">
            <h3>{TituloVaga}</h3>
            <div className="InfoVagas">
              <InfoVaga NomeProp={RazaoSocial} source={IconEmpresa}></InfoVaga>
              <InfoVaga NomeProp={Cidade} source={imgLocalizacao}></InfoVaga>
              <InfoVaga NomeProp={Experiencia} source={imgFuncao}></InfoVaga>
              <InfoVaga
                NomeProp={TipoContrato}
                source={imgTipoContrato}
              ></InfoVaga>
              <InfoVaga NomeProp={Salario} source={imgSalario}></InfoVaga>
              <InfoVaga NomeProp={TipoPresenca} source={imgGlobal} />
              <InfoVaga
                NomeProp={NomeArea}
                source={imgDesenvolvimento}
              ></InfoVaga>
            </div>
            <div className="TecnologiasVaga">
              {Tecnologias.map((tec) => {
                return <Tag key={tec} NomeTag={tec}></Tag>;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="ListaDeInscicoes">
        {Candidatos.map((item) => {
          return (
            <div key={item.idCandidato} className="Inscricao">
              <div className="CabecaInscricao">
                <img
                  className="imgperfilInscricao"
                  src={`${uri}/imgPerfil/${item.idCandidatoNavigation.idUsuarioNavigation.caminhoImagem}`}
                  alt="ImagemPerfil"
                />
                <h3>{item.idCandidatoNavigation.nomeCompleto}</h3>
                <hr className="hr" />
                <h5>{item.idCandidatoNavigation.idCursoNavigation.nomeCurso}</h5>
              </div>
              <div className="CorpoInscricao">
                <Tag NomeTag={"E-mail:" + item.idCandidatoNavigation.idUsuarioNavigation.email}></Tag>
                <Tag NomeTag={"Telefone:" + item.idCandidatoNavigation.telefone}></Tag>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
