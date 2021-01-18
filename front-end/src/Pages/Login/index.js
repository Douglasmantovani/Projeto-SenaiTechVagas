import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Footer from "../../Components/Footer";

import "./style.css";

import imglogin from "../../assets/ImagemimgLogin.webp";
import AccessBar from "../../Components/AccessBar";
import Header from "../../Components/Header";
import AccessMenu from "../../Components/AccessMenu";
import Input from "../../Components/Input";

import { uri } from "../../services/conexao";
import { parseJwt } from "../../services/token";

export default function Login() {
  let history = useHistory();

  const [NovaSenha, SetNovaSenha] = useState("");
  const [PerguntaSeguranca, SetPerguntaSeguranca] = useState("");
  const [RespostaSeguranca, SetRespostaSeguranca] = useState("");
  const [Mensagem, setMensagem] = useState("");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const login = () => {
    const loginForm = {
      email: email,
      senha: senha,
    };
    fetch(`${uri}/api/Login`, {
      method: "POST",
      body: JSON.stringify(loginForm),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        if (dados.token !== undefined) {
          localStorage.setItem("token", dados.token);
          if (parseJwt().Role === "1") {
            history.push("/perfil");
          } else if (parseJwt().Role === "2") {
            history.push("/perfilCandidato");
          } else if (parseJwt().Role === "3") {
            history.push("/perfilEmpresa");
          }
        } else {
          if (dados.error.length == 0) {
            setMensagem(dados);
            AparecelbErro();
          } else {
            setMensagem("Suas credencias não são válidas");
            AparecelbErro();
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setMensagem("Suas credencias não são válidas");
        AparecelbErro();
      });
  };
  function AparecelbErro() {
    let idlbErro = document.getElementById("lbErro");
    if (idlbErro.classList == "LabelErro none")
      idlbErro.classList.remove("none");
  }

  const RecuperarSenha = () => {
    const form = {
      email: email,
      pergunta: PerguntaSeguranca,
      resposta: RespostaSeguranca,
      novaSenha: NovaSenha,
    };
    fetch(`${uri}/api/Usuario/RecuperarSenha`, {
      method: "PUT",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    })
      .then(function (respose) {
        if (respose.status !== 200) {
          alert(
            "Não foi possivel alterar a senha,entre em contato com o admin do site caso necessario"
          );
          btn_fecharRecuperarSenhaCandidato();
        } else {
          alert("Editado com sucesso");
          btn_fecharRecuperarSenhaCandidato();
        }
      })
      .catch((err) => console.error(err));
  };

  function ApareceRecuperarSenhaCandidato() {
    let idEditarPelicula = document.getElementById(
      "peliculaRecuperarSenhaCandidato"
    );
    let idModalVaga = document.getElementById("modalRecuperarSenhaCandidato");
    if (idEditarPelicula.classList == "peliculaRecuperarSenhaCandidato none")
      idEditarPelicula.classList.remove("none");
    idModalVaga.classList.remove("none");
  }

  function btn_fecharRecuperarSenhaCandidato() {
    let idModalVaga = document.getElementById("modalRecuperarSenhaCandidato");
    let idEditarPelicula = document.getElementById(
      "peliculaRecuperarSenhaCandidato"
    );
    if (idEditarPelicula.classList != "peliculaRecuperarSenhaCandidato none") {
      idEditarPelicula.classList.add("none");
      idModalVaga.classList.add("none");
    }
  }

  return (
    <div className="Login">
      <AccessBar />
      <Header />
      <AccessMenu />
      <main className="principalLogin">
        <section className="sessaoLogar">
          <div className="division-logar">
            <div className="division-logar-title">
              <h2>login</h2>
              <p className="sub-titulo">Bem-vindo ao SENAI | TechVagas</p>
            </div>

            <form
              className="form-logar"
              onSubmit={(event) => {
                event.preventDefault();
                login();
              }}
            >
              <div className="divisionCampo">
                <label htmlFor="EmailLogin">E-mail:</label>
                <input
                  id="EmailLogin"
                  type="text"
                  name="email"
                  className="inputUser"
                  placeholder="exemplo@exemplo.com / mariasantos"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="divisionCampo divisionPassword">
                <label htmlFor="SenhaLogin">Senha:</label>
                <input
                  id="SenhaLogin"
                  type="password"
                  name="password"
                  placeholder="******"
                  className="inputPassword"
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
              <label className="LabelErro none" id="lbErro">
                {Mensagem}
              </label>
              <h5
                className="recuperarPassword"
                onClick={ApareceRecuperarSenhaCandidato}
              >
                Recuperar senha
              </h5>
            </form>

            <div className="divisionBtn">
              <button className="btnNew">
                <Link className="link-cad-conta" to="/cadastro">
                  criar conta
                </Link>
              </button>
              <button className="btnLogar" onClick={login}>
                entrar
              </button>
            </div>
          </div>
        </section>

        <img src={imglogin} className="imgBannerLogin" alt="Banner do site" />
      </main>

      <div
        id="peliculaRecuperarSenhaCandidato"
        className="peliculaRecuperarSenhaCandidato none"
        onClick={btn_fecharRecuperarSenhaCandidato}
      ></div>
      <div
        id="modalRecuperarSenhaCandidato"
        className="modalRecuperarSenhaCandidato none"
      >
        <h2>Alterar senha</h2>
        <form>
          <div className="select-final">
            <label htmlFor="RecuperarSelect">Pergunta de segurança</label>
            <select
              id="RecuperarSelect"
              onChange={(e) => SetPerguntaSeguranca(e.target.value)}
              value={PerguntaSeguranca}
              required
            >
              <option value="0">Selecione sua pergunta de segurança</option>
              <option value="Como se chama o seu cachorro">
                Como se chama o seu cachorro
              </option>
              <option value="Qual o seu sobrenome">Qual o seu sobrenome</option>
              <option value="Qual o nome da sua mãe/pai">
                Qual o nome da sua mãe/pai
              </option>
              <option value="Para qual país você gostaria de viajar">
                Para qual país você gostaria de viajar
              </option>
              <option value="Qual era sua matéria preferida na escola">
                Qual era sua matéria preferida na escola
              </option>
              <option value="De onde vem sua família">
                De onde vem sua família
              </option>
              <option value="Do que você mais gosta de fazer nas suas horas vagas">
                Do que você mais gosta de fazer nas suas horas vagas
              </option>
              <option value="Qual a palavra que te define como pessoa">
                Qual a palavra que te define como pessoa
              </option>
              <option value="Qual o ano mais importante da sua vida">
                Qual o ano mais importante da sua vida
              </option>
            </select>
          </div>
          <Input
            id="RespostaSegurancaRecuperar"
            className="InputCadastro"
            name="RespostaSegurancaRecuperar"
            label="Resposta de seguranca"
            onChange={(e) => SetRespostaSeguranca(e.target.value)}
            maxLength={20}
            minLength={5}
            required
          />

          <Input
            id="emailRecuperacao"
            className="InputCadastro"
            name="emailRecuperacao"
            label="Seu email"
            onChange={(e) => setEmail(e.target.value)}
            maxLength={254}
            minLength={5}
            required
          />

          <Input
            id="NovaSenhaRecuperar"
            className="InputCadastro"
            name="NovaSenhaRecuperar"
            label="Nova senha"
            onChange={(e) => SetNovaSenha(e.target.value)}
            maxLength={15}
            minLength={9}
            type="password"
            required
          />
        </form>
        <button className="btVaga" onClick={RecuperarSenha}>
          Alterar senha
        </button>
      </div>
      <Footer />
    </div>
  );
}
