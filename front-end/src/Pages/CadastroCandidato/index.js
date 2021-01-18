import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import AccessBar from "../../Components/AccessBar";
import Header from "../../Components/Header";
import AccessMenu from "../../Components/AccessMenu";
import Input from "../../Components/Input";
import BlueButton from "../../Components/BlueButton";
import Footer from "../../Components/Footer";

import Userimg from "../../assets/images/user.webp";
import imagemCadastroCandidato from "../../assets/imgCadastroCandidato.webp";

import { uri } from "../../services/conexao";

import "./style.css";

export default function CadastroEmpresa() {
  const [NomeCompleto, SetNomeCompleto] = useState("");
  const [Rg, SetRg] = useState("");
  const [CPF, SetCPF] = useState("");
  const [Linkedin, SetLinkedin] = useState("");
  const [Telefone, SetTelefone] = useState("");
  const [Cursos, SetCursos] = useState([]);
  const [Curso, SetCurso] = useState(0);
  const [Email, SetEmail] = useState("");
  const [Senha, SetSenha] = useState("");
  const [ConfirmarSenha, SetConfirmarSenha] = useState("");
  const [PerguntaSeguranca, SetPergunta] = useState("");
  const [RespostaSeguranca, SetResposta] = useState("");
  const [CaminhoImagem, setCaminho] = useState("");

  const history = useHistory();

  const emailRegex = /^\S+@\S+\.\S+$/g;
  const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&\*_-])(?=.{9,15})/g;

  let result = document.querySelector(".password-matching-text");
  let redBox = document.querySelector("#confirmarSenha-cadastroCandidato");
  let instructions = document.querySelector(".password-instructions-text");

  const verificacaoEmail = emailRegex.test(Email);
  const verificacaoSenha = senhaRegex.test(Senha);

  useEffect(() => {
    listarcurso();
  }, []);

  const uploadFile = (event) => {
    event.preventDefault();

    let formdata = new FormData();

    formdata.append("arquivo", event.target.files[0]);

    fetch(`${uri}/api/Usuario/Image`, {
      method: "POST",
      body: formdata,
    })
    .then(response => response.json())
    .then(data => {
        setCaminho(data);
    })
    .catch(err => console.log(err))
  }

  const escreverResultado = () => {
    if (Senha !== ConfirmarSenha) {
      redBox.style.border = "solid red 1px";
      redBox.style.boxShadow = "3px 3px 3px gray";
      result.style.color = "red";
      result.innerText = "As senhas não conferem";
    } else {
      redBox.style.border = "unset";
      redBox.style.boxShadow = "unset";
      result.style.color = "unset";
      result.innerText = "As senhas conferem";
    }

    if (verificacaoSenha !== true) {
      redBox.style.border = "solid red 1px";
      redBox.style.boxShadow = "3px 3px 3px gray";
      instructions.style.color = "red";
      instructions.innerText = `A senha deve conter, no mínimo, 9 caracteres, e no máximo 15, dentre eles:
        • 1 letra minúscula
        • 1 letra maiúscula
        • 1 número
        • 1 caractere especial`;
    } else {
      redBox.style.border = "unset";
      redBox.style.boxShadow = "unset";
      instructions.style.color = "unset";
      instructions.innerText = "";
    }
  };

  function salvar() {
    if (Senha !== ConfirmarSenha) {
      alert("As senhas não são semelhantes");
    } else if (verificacaoEmail !== true) {
      alert("O e-mail deve ser válido");
    } else if (verificacaoSenha !== true) {
      alert("A(s) senha(s) não confere(m) com o padrão solicitado");
    } else {
      const data = {
        nomeCompleto: NomeCompleto,
        rg: Rg,
        cpf: CPF,
        telefone: Telefone,
        linkLinkedinCandidato: Linkedin,
        idCurso: Curso,
        email: Email,
        senha: Senha,
        respostaSeguranca: RespostaSeguranca,
        perguntaSeguranca: PerguntaSeguranca,
        CaminhoImagem: CaminhoImagem,
      };
      fetch(`${uri}/api/Usuario/Candidato`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => {
          if (response.status !== 200) {
            alert("Não foi possivel efetuar o cadastro");
          } else {
            alert("Cadastrado com sucesso");
            history.push("/");
          }
        })
        .catch((err) => console.error(err));
    }
  }

  const listarcurso = () => {
    fetch(`${uri}/api/Usuario/ListarCurso`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((dados) => {
        SetCursos(dados);
      })
      .catch((err) => console.error(err));
  };

  function View() {
    if (
      (CaminhoImagem == "" && CaminhoImagem.length < 3) ||
      CaminhoImagem === undefined
    ) {
      return (
        <img className="imagemCadastro" src={Userimg} alt="Imagem de perfil" />
      );
    } else if (CaminhoImagem.length > 3) {
      return (
        <img
          className="imagemCadastro"
          src={`${uri}/ImageBackUp/` + CaminhoImagem}
          alt="Imagem de perfil"
        />
      );
    }
  }

  return (
    <body>
      <AccessBar />
      <Header />
      <AccessMenu />
      <div className="registerApplicant">
        <div className="box-form">
          <div className="form-content">
            <h1>Cadastre-se como Candidato</h1>
            <p>
              Bem-vindo ao cadastro do candidato. <br />
              Ficamos felizes de tê-lo na nossa plataforma
            </p>
            <div className="imgCadastroPerfil">
              {View()}
              <br />
              <button className="btSelecionar">
                <label htmlFor="ButtonImage" className="lbBt">
                  Selecione uma imagem
                </label>
              </button>
            </div>
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                salvar();
              }}
            >
              <input
                type="file"
                className="none"
                id="ButtonImage"
                onChange={(event) => {
                  uploadFile(event);
                }}
              />
              <Input
                id="fullName"
                name="fullName"
                className="cadastre"
                label="Nome completo:"
                type="text"
                placeholder="Maria dos Santos"
                required
                maxLength={65}
                minLength={5}
                onChange={(e) => SetNomeCompleto(e.target.value)}
              />

              <Input
                id="rg"
                name="rg"
                className="cadastre"
                label="RG:"
                type="text"
                placeholder="00.000.000-0"
                maxLength={9}
                minLength={9}
                required
                onChange={(e) => SetRg(e.target.value)}
              />

              <Input
                id="cpf"
                name="cpf"
                className="cadastre"
                label="CPF:"
                type="text"
                placeholder="000.000.000-00"
                required
                maxLength={11}
                minLength={11}
                onChange={(e) => {
                  SetCPF(e.target.value);
                }}
              />

              <Input
                id="telefone"
                name="telefone"
                className="cadastre"
                label="Telefone:"
                type="text"
                placeholder="(11) 91234-5678"
                maxLength={11}
                minLength={11}
                required
                onChange={(e) => SetTelefone(e.target.value)}
              />

              <Input
                id="linkedin"
                name="linkedin"
                className="cadastre"
                label="LinkedIn:"
                type="text"
                placeholder="linkedin.com/in/maria-dos-santos"
                maxLength={150}
                minLength={5}
                onChange={(e) => SetLinkedin(e.target.value)}
              />

              <div>
                <label
                  htmlFor="selectCursoCandidato"
                  className="select-cadastroCandidato-title"
                >
                  Curso
                </label>
                <br />
                <select
                  className="select-cadastroCandidato"
                  onChange={(e) => SetCurso(e.target.value)}
                  value={Curso}
                  required
                  id="selectCursoCandidato"
                >
                  <option value="0">Selecione seu curso</option>
                  {Cursos.map((item) => {
                    return (
                      <option value={item.idCurso}>{item.nomeCurso}</option>
                    );
                  })}
                </select>
              </div>

              <Input
                id="email"
                name="email"
                className="cadastre"
                label="E-mail:"
                type="text"
                placeholder="exemplo@exemplo.com"
                required
                maxLength={254}
                minLength={5}
                onChange={(e) => {
                  SetEmail(e.target.value);
                }}
              />

              <Input
                id="password"
                name="password"
                className="cadastre"
                label="Senha:"
                type="password"
                placeholder="Digite sua senha"
                required
                maxLength={15}
                minLength={9}
                onKeyUp={() => escreverResultado()}
                onChange={(e) => SetSenha(e.target.value)}
              />

              <Input
                id="confirmarSenha-cadastroCandidato"
                name="confirmarSenha-cadastroCandidato"
                className="cadastre"
                label="Confirmar senha:"
                type="password"
                placeholder="Confirme a senha"
                required
                maxLength={15}
                minLength={9}
                onKeyUp={() => escreverResultado()}
                onChange={(e) => SetConfirmarSenha(e.target.value)}
              />

              <p className="password-matching-text"></p>
              <p className="password-instructions-text"></p>

              <div>
                <label
                  htmlFor="selectCadastroCandidato"
                  className="select-cadastroCandidato-title"
                >
                  Pergunta de seguranca:
                </label>
                <br />
                <select
                  className="select-cadastroCandidato"
                  onChange={(e) => SetPergunta(e.target.value)}
                  value={PerguntaSeguranca}
                  required
                  id="selectCadastroCandidato"
                >
                  <option value="0">Selecione sua pergunta de segurança</option>
                  <option value="Como se chama o seu cachorro">
                    {" "}
                    Como se chama o seu cachorro
                  </option>
                  <option value="Qual o seu sobrenome">
                    Qual o seu sobrenome
                  </option>
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
                id="Respostaseguranca"
                name="Respostaseguranca"
                className="cadastre"
                label="Resposta de segurança:"
                type="text"
                placeholder="Meu cachorro se chama..."
                required
                maxLength={30}
                minLength={5}
                onChange={(e) => SetResposta(e.target.value)}
              />
              <p>Ao cadastrar-se, você aceita os nossos termos de uso.</p>

              <div className="form-button">
                <BlueButton type="submit" name="Criar conta">
                  Criar conta
                </BlueButton>
              </div>
            </form>
          </div>
        </div>

        <div className="box-img">
          <img
            src={imagemCadastroCandidato}
            alt="Pessoa acessando sua conta"
            className="img-cadastro-candidato"
          />
        </div>
      </div>
      <Footer />
    </body>
  );
}
