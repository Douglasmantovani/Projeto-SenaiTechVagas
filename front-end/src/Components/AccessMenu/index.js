import React from "react";
import { useHistory } from 'react-router-dom';

import { parseJwt } from "../../../src/services/token";

import "./style.css";

export default function AccessMenu() {
  let history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push('/');
}

  const AbrirMenu = () => {
    let bar = document.getElementById("bar");
    let botao1 = document.getElementById("botao");
    let botao2 = document.getElementById("botaomaior");
    let botao3 = document.getElementById("botaolibras");
    let botao4 = document.getElementById("btn-gravar-audio");
    if (bar.classList == "none" || bar.classList == "none1") {
      bar.classList.remove("none");
      bar.classList.remove("none1");
      bar.classList.add("botaoflutuante1");
      botao1.classList.remove("access-icons1");
      botao2.classList.remove("access-icons1");
      botao3.classList.remove("access-icons1");
      botao4.classList.remove("access-icons1");
      botao1.classList.add("access-icons");
      botao2.classList.add("access-icons");
      botao3.classList.add("access-icons");
      botao4.classList.add("access-icons");
    } else {
      bar.classList.remove("botaoflutuante1");
      bar.classList.add("none1");
      botao1.classList.add("access-icons1");
      botao2.classList.add("access-icons1");
      botao3.classList.add("access-icons1");
      botao4.classList.add("access-icons1");
      botao1.classList.remove("access-icons");
      botao2.classList.remove("access-icons");
      botao3.classList.remove("access-icons");
      botao4.classList.remove("access-icons");
    }
  };

  var btnbody = document.getElementsByTagName("body");

  // Ao clicar do botão, ele pega o Id do body e parte para a condição. SE o body tiver a class "preto", ele remove, SE não tiver a class "preto" ele adiciona. Pego tudo o que é body.

  function Contraste() {
    if (
      btnbody[0].classList == "preto" ||
      btnbody[0].classList == "maior preto" ||
      btnbody[0].classList == "preto maior"
    ) {
      btnbody[0].classList.remove("preto");
    } else {
      document
        .querySelectorAll(
          "p, h1, h2, h3, h4, h5, h6, a, span, pre, b, i, li, textarea, input, li, strong, small, bdi, fieldset, select, div, address, section"
        )
        .forEach((e) => btnbody[0].classList.add("preto"));
    }
  }

  // Para aumentar a letra utilizei um processo parecido com o acima. Porém esse existe uma ordem específica para cada class que é adicionada ao body, então colocar no if 3 possibilidade para ativar e desativar a fonte para qualquer modalidade. Também mudei o simbolo do botão.

  function FonteMaior() {
    if (
      btnbody[0].classList == "maior" ||
      btnbody[0].classList == "preto maior" ||
      btnbody[0].classList == "maior preto"
    ) {
      btnbody[0].classList.remove("maior");
    } else {
      document
        .querySelectorAll(
          "p, h1, h2, h3, h4, h5, h6, a, span, pre, b, i, li, textarea, input, li, strong, small, bdi, fieldset, select, div, address"
        )
        .forEach((e) => btnbody[0].classList.add("maior"));
    }
  }

  var validate = 0;
  function Libras() {
    if (validate === 0) {
      document
        .querySelector("body > div.enabled > div.active > img.access-button")
        .click();
      validate = 1;
    } else {
      document
        .querySelector(
          "body > div.enabled > div.active > div > div.vpw-box > div.vpw-settings-btn > img.vpw-settings-btn-close"
        )
        .click();
      validate = 0;
    }
    return validate;
  }

  function Voz() {
    let textarea = document.getElementById("textarea");

    var btn_gravacao = document.querySelector("#btn-gravar-audio");

    var transcricao_audio = "";
    var esta_gravando = false;

    var dicionario = {
      "@": /\barroba\b/gi,
      // ";": /\bponto e v[íi]rgula\b/gi,
      // ",": /\bv[íi]rgula\b/gi,
      // "!": /\bexclamação\b/gi,
      // "?": /\binterrogação\b/gi,
      // "github": /\bgit hub\b/gi,
    };

    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      var speech_api =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      var receber_audio = new speech_api();

      receber_audio.continuous = true;
      receber_audio.interimResults = true;
      receber_audio.lang = "pt-BR";

      receber_audio.onstart = function () {
        esta_gravando = true;
        // btn_gravacao.innerHTML = 'Gravando! Para onde deseja ir?';
      };

      receber_audio.onend = function () {
        esta_gravando = false;
        // btn_gravacao.innerHTML = 'Iniciar Gravação';
      };

      receber_audio.onresult = function (event) {
        var interim_transcript = "";
        const token = localStorage.getItem("token");

        if (token === null||token===undefined) {
          if (textarea.value == "Home" || textarea.value == "home") {
            window.location.href = "/";
          }
          if (textarea.value == "Sobre" || textarea.value == "sobre") {
            window.location.href = "/sobre";
          }
          if (
            textarea.value == "Login" ||
            textarea.value == "login" ||
            textarea.value == "Loguin" ||
            textarea.value == "loguin" ||
            textarea.value == "entrar" ||
            textarea.value == "Entrar" ||
            textarea.value == "candidato"
          ) {
            window.location.href = "/login";
          }
          if (textarea.value == "empresa" || textarea.value == "cadastro empresa") {
            history.push("cadastro/empresa");
            window.location.reload();
          }
          if (textarea.value == "Cadastro" || textarea.value == "cadastro") {
            window.location.href = "/cadastro";
          }
          if (textarea.value == "Conteúdo" || textarea.value == "conteúdo") {
            window.location.href = "/#conteudo";
          }
          if (
            textarea.value == "fazer o teste" ||
            textarea.value == "fazer teste" ||
            textarea.value == "fazer teste personalidade" ||
            textarea.value == "teste de personalidade"
          ) {
            window.location.href = "/TesteDePersonalidade";
          }
        } else if (parseJwt().Role === "1") {
          if (
            textarea.value == "perfil" ||
            textarea.value == "painel" ||
            textarea.value == "dashboard"
          ) {
            window.location.href = "/perfil";
          }

          if (textarea.value == "banidos") {
            window.location.href = "/banidos";
          }

          if (
            textarea.value == "estágio" ||
            textarea.value == "Estágio" ||
            textarea.value == "estágios" ||
            textarea.value == "estágios"
          ) {
            window.location.href = "/Estagio";
          }

          if (
            textarea.value == "cadastro estágio" ||
            textarea.value == "cadastrar estágio"
          ) {
            history.push("/cadastro/Estagio");
            window.location.reload();
          }

          if (
            textarea.value == "Colaboradores" ||
            textarea.value == "colaboradores"
          ) {
            window.location.href = "/colaboradores";
          }

          if (textarea.value == "sair" && parseJwt().Role === "1"){
            logout();
            window.location.reload();
          }
        } else if (parseJwt().Role === "2") {
          if (
            textarea.value == "perfil" ||
            textarea.value == "painel" ||
            textarea.value == "dashboard"
          ) {
            window.location.href = "/perfilCandidato";
          }

          if (
            textarea.value == "principal" ||
            textarea.value == "BuscarVagas"
          ) {
            window.location.href = "/principal";
          }

          if (
            textarea.value == "ver inscrições" ||
            textarea.value == "inscrições" ||
            textarea.value == "Inscriçoes"
          ) {
            window.location.href = "/DashboardInscricaoCandidato";
          }

          if (
            textarea.value == "fazer o teste" ||
            textarea.value == "fazer teste" ||
            textarea.value == "fazer teste personalidade" ||
            textarea.value == "teste de personalidade"
          ) {
            window.location.href = "/TesteDePersonalidade";
          }

          if (textarea.value == "Sobre" || textarea.value == "sobre") {
            window.location.href = "/sobre";
          }

          if (textarea.value == "sair" && parseJwt().Role === "2"){
            logout();
            window.location.reload();
          }
        } else if (parseJwt().Role === "3") {
          if (textarea.value == "perfil" && parseJwt().Role === "3") {
            window.location.href = "/perfilEmpresa";
          }
          if (textarea.value == "sair" && parseJwt().Role === "3"){
            logout();
            window.location.reload();
          }

          if (
            textarea.value == "publicar vaga" ||
            textarea.value == "divulgar vaga" ||
            textarea.value == "cadastrar vaga"
          ) {
            window.location.href = "/cadastro/vaga";
          }

          if (
            textarea.value == "sobre"
          ) {
            window.location.href = "/sobre";
          }

          if (
            textarea.value == "minhas vagas" ||
            textarea.value == "vagas divulgadas" ||
            textarea.value == "vagas"
          ) {
            window.location.href = "/VagasPublicadas";
          }
        }

        for (var i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            transcricao_audio += event.results[i][0].transcript;
            // transcricao_audio += event.results[i][0].transcript;
          } else {
            interim_transcript += event.results[i][0].transcript;
            // interim_transcript += event.results[i][0].transcript;
          }

          var resultado = transcricao_audio || interim_transcript;
        }

        for (var substituto in dicionario) {
          resultado = resultado.replace(dicionario[substituto], substituto);
        }
        document.getElementById("textarea").innerHTML = resultado;
      };

      btn_gravacao.addEventListener(
        "click",
        function (e) {
          if (esta_gravando) {
            receber_audio.stop();
            document.location.reload(true);
            return;
          }

          receber_audio.start();
        },
        false
      );
    } else {
      console.log("Navegador não apresenta suporte a web speech api");
    }
  }

  return (
    <div class="heightomg">
      <div>
        <textarea id="textarea" class="none" />
        <div vw class="enabled">
          <div vw-plugin-wrapper id="vlibras">
            <div class="vw-plugin-top-wrapper"></div>
          </div>
        </div>
        <button
          id="btnbar"
          class="block"
          accesskey="a"
          onClick={(event) => {
            event.preventDefault();
            AbrirMenu();
          }}
        >
          <div
            class="botaoflutuante fa fa-universal-access font1"
            title="Menu acessibilidade"
          ></div>
        </button>
        <div id="bar" class="none">
          <div class="flex">
            <div
              id="botao"
              class="access-icons kit"
              onClick={(event) => {
                event.preventDefault();
                Contraste();
              }}
              accesskey="z"
              title="Alto contraste Alt + z"
            >
              <div class="fa fa-adjust"></div>
            </div>

            <div
              id="botaomaior"
              class="access-icons kit"
              onClick={(event) => {
                event.preventDefault();
                FonteMaior();
              }}
              accesskey="x"
              title="Aumentar fonte Alt + x"
            >
              <div class="fa fa-font"></div>
            </div>

            <div
              id="botaolibras"
              class="access-icons kit"
              onClick={(event) => {
                event.preventDefault();
                Libras();
              }}
              accesskey="c"
              title="Linguagem de libras Alt + l"
            >
              <div class="fa fa-american-sign-language-interpreting"></div>
            </div>

            <div
              id="btn-gravar-audio"
              class="access-icons kit"
              accesskey="v"
              title="Comando de voz Alt + v"
              onClick={(event) => {
                event.preventDefault();
                Voz();
              }}
            >
              <div class="fa fa-microphone"></div>
            </div>
          </div>
          <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
          <script>
            new window.VLibras.Widget("https://vlibras.gov.br/app");
          </script>
        </div>
      </div>
    </div>
  );
}