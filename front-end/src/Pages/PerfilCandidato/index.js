import React, { useEffect, useState } from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import AccessBar from "../../Components/AccessBar";
import AccessMenu from "../../Components/AccessMenu";
import Input from "../../Components/Input/index";
import api from "../../services/api";

import { uri } from "../../services/conexao";

import "./style.css";

export default function PerfilCandidato() {
  const [NomeCompleto, SetNomeCompleto] = useState("");
  const [Rg, SetRg] = useState("");
  const [CPF, SetCPF] = useState("");
  const [Telefone, SetTelefone] = useState("");
  const [Linkedin, SetLinkedin] = useState("");
  const [Curso, SetCurso] = useState("");
  const [CaminhoImagem, setCaminho] = useState("");
  const [Cursos, setCursos] = useState([]);
  const [Vagas, setVagas] = useState([]);
  const [NovaSenha, SetNovaSenha] = useState("");
  const [SenhaAtual, SetSenha] = useState("");

  const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&\*_-])(?=.{9,15})/g;
  const verificacaoSenha = senhaRegex.test(NovaSenha);

  useEffect(() => {
    listarVagas();
    BuscarCandidatoPorId();
    lisCursos();
  }, []);

  const lisCursos = () => {
    api
      .get("/Usuario/ListarCurso", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setCursos(response.data);
      });
  };

  const BuscarCandidatoPorId = () => {
    fetch(`${uri}/api/Candidato/BuscarCandidatoPorId`, {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        SetRg(dados.rg);
        SetCPF(dados.cpf);
        SetTelefone(dados.telefone);
        SetLinkedin(dados.linkLinkedinCandidato);
        SetNomeCompleto(dados.nomeCompleto);
        SetCurso(dados.idCurso);
        setCaminho(dados.idUsuarioNavigation.caminhoImagem);
      })
      .catch((err) => console.error(err));
  };

  const AlterarSenha = () => {
    const form = {
      senhaAtual: SenhaAtual,
      novaSenha: NovaSenha,
    };
    if (verificacaoSenha !== true) {
      alert("A senha não confere com o padrão solicitado");
    } else {
      fetch(`${uri}/api/Usuario/AlterarSenha`, {
        method: "PUT",
        body: JSON.stringify(form),
        headers: {
          "content-type": "application/json",
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then(function (respose) {
          if (respose.status !== 200) {
            alert("Não foi possivel alterar a senha");
          } else {
            alert("Editado com sucesso");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const EditarDadosDoUsuario = () => {
    const form = {
      nomeCompleto: NomeCompleto,
      rg: Rg,
      cpf: CPF,
      telefone: Telefone,
      linkLinkedinCandidato: Linkedin,
      idCurso: Curso,
    };
    fetch(`${uri}/api/Candidato/AtualizarCandidato`, {
      method: "PUT",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then(function (respose) {
        if (respose.status !== 200) {
          alert("Não foi possivel editar os dados do ususário");
        } else {
          alert("Editado com sucesso");
        }
      })
      .catch((err) => console.error(err));
  };

  const listarVagas = () => {
    fetch(`${uri}/api/Candidato/ListarVagasInscritas`, {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        setVagas(dados);
      })
      .catch((err) => console.error(err));
  };

  function ApareceEditarDados() {
    let idEditarPelicula = document.getElementById("peliculaPerfilCandidato");
    let idModalVaga = document.getElementById("modalPerfilCandidato");
    if (idEditarPelicula.classList == "peliculaPerfilCandidato none")
      idEditarPelicula.classList.remove("none");
    idModalVaga.classList.remove("none");
  }

  function btn_fecharEditarDados() {
    let idModalVaga = document.getElementById("modalPerfilCandidato");
    let idEditarPelicula = document.getElementById("peliculaPerfilCandidato");
    if (idEditarPelicula.classList != "peliculaPerfilCandidato none") {
      idEditarPelicula.classList.add("none");
      idModalVaga.classList.add("none");
    }
  }

  function ApareceAlterarSenhaCandidato() {
    let idEditarPelicula = document.getElementById(
      "peliculaAlterarSenhaCandidato"
    );
    let idModalVaga = document.getElementById("modalAlterarSenhaCandidato");
    if (idEditarPelicula.classList == "peliculaAlterarSenhaCandidato none")
      idEditarPelicula.classList.remove("none");
    idModalVaga.classList.remove("none");
  }

  function btn_fecharAlterarSenhaCandidato() {
    let idModalVaga = document.getElementById("modalAlterarSenhaCandidato");
    let idEditarPelicula = document.getElementById(
      "peliculaAlterarSenhaCandidato"
    );
    if (idEditarPelicula.classList != "peliculaAlterarSenhaCandidato none") {
      idEditarPelicula.classList.add("none");
      idModalVaga.classList.add("none");
    }
  }

  const AtualizarImagem = (event) => {
    event.preventDefault();

    let formdata = new FormData();
    formdata.append("arquivo", event.target.files[0]);

    fetch(`${uri}/api/Usuario/AlterarImagem`, {
      method: "PUT",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => {
        setCaminho(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bodyPartVizualizarPerfil">
      <AccessBar />
      <Header />
      <AccessMenu />
      <div className="meioPerfil">
        <div className="EsquerdoPerfil">
          <div className="imgPefilTexto">
            <input
              type="file"
              id="inputImage"
              className="none"
              onChange={(event) => {
                AtualizarImagem(event);
              }}
            />
            <label htmlFor="inputImage">
              <img
                className="imgperfil"
                src={`${uri}/imgPerfil/${CaminhoImagem}`}
                alt="Imagem de perfil"
              />
            </label>
            <h3>{NomeCompleto}</h3>
            <p>Candidato</p>
          </div>
          <div className="BotoesPerfilEmpresa">
            <button className="btPerfil" onClick={ApareceEditarDados}>
              Alterar dados
            </button>
            <button className="btPerfil" onClick={ApareceAlterarSenhaCandidato}>
              Alterar senha
            </button>
          </div>
        </div>
        <div className="DireitoPerfil">
          <h2 className="Desrcicao-Perfil">Vagas em que você se inscreveu</h2>
          {Vagas.map((item) => {
            return (
              <div className="BoxPerfilCandidato">
                <div className="flexBoxPerfilCandidato">
                  <img
                    src={`${uri}/imgPerfil/${item.caminhoImagem}`}
                    alt="Imagem de pefil da empresa dona da vaga"
                  />
                  <h3>{"Nome da empresa: " + item.razaoSocial}</h3>
                </div>
                <h3>{"Tipo do contrato: " + item.tipoContrato}</h3>
                <h3>{"Salario: " + "R$" + item.salario}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <div
        id="peliculaPerfilCandidato"
        className="peliculaPerfilCandidato none"
        onClick={btn_fecharEditarDados}
      ></div>
      <div id="modalPerfilCandidato" className="modalPerfilCandidato none">
        <h2>Editar seus dados pessoais</h2>
        <form>
          <Input
            className="InputCadastro"
            value={NomeCompleto}
            name="NomeCompletoEdit"
            label="Nome completo"
            onChange={(e) => SetNomeCompleto(e.target.value)}
            maxLength={65}
            minLength={5}
            required
            id="NomeCompletoEdit"
          />

          <Input
            className="InputCadastro"
            value={Rg}
            name="RgEdit"
            label="RG"
            onChange={(e) => SetRg(e.target.value)}
            maxLength={9}
            minLength={9}
            required
            id="RgEdit"
          />

          <Input
            className="InputCadastro"
            value={CPF}
            name="CPFEdit"
            label="CPF"
            onChange={(e) => SetCPF(e.target.value)}
            maxLength={11}
            minLength={11}
            required
            id="CPFEdit"
          />

          <Input
            className="InputCadastro"
            value={Telefone}
            name="TelefoneEdit"
            label="Telefone"
            onChange={(e) => SetTelefone(e.target.value)}
            maxLength={11}
            minLength={10}
            required
            id="TelefoneEdit"
          />

          <Input
            className="InputCadastro"
            value={Linkedin}
            name="LinkedinEdit"
            label="Linkedin"
            onChange={(e) => SetLinkedin(e.target.value)}
            maxLength={150}
            minLength={5}
            id="LinkedinEdit"
          />

          <div className="select-final">
            <label htmlFor="CursosEdit">Cursos</label>
            <select
              id="CursosEdit"
              onChange={(e) => SetCurso(e.target.value)}
              value={Curso}
              required
            >
              <option value="0">Selecione seu curso</option>
              {Cursos.map((item) => {
                return <option value={item.idCurso}>{item.nomeCurso}</option>;
              })}
            </select>
          </div>
          <div className="btEditarEstagioDiv">
            <button className="btVaga" onClick={EditarDadosDoUsuario}>
              <h3>Editar</h3>
            </button>
          </div>
        </form>
      </div>

      <div
        id="peliculaAlterarSenhaCandidato"
        className="peliculaAlterarSenhaCandidato none"
        onClick={btn_fecharAlterarSenhaCandidato}
      ></div>
      <div
        id="modalAlterarSenhaCandidato"
        className="modalAlterarSenhaCandidato none"
      >
        <h2>Alterar senha</h2>
        <form>
          <Input
            type="password"
            className="InputCadastro"
            id="SenhaatualCandidato"
            name="SenhaatualCandidato"
            label="Senha atual"
            onChange={(e) => SetSenha(e.target.value)}
            maxLength={15}
            minLength={9}
            required
          />

          <Input
            type="password"
            className="InputCadastro"
            id="NovaSenhaCandidato"
            name="NovaSenhaCandidato"
            label="Nova senha"
            onChange={(e) => SetNovaSenha(e.target.value)}
            maxLength={15}
            minLength={9}
            required
          />
          <button className="btVaga" onClick={AlterarSenha}>
            Alterar senha
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
