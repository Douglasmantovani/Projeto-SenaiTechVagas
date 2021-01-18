import React from "react";

import InputRadius from "../../Components/InputRadius";
import Header from "../../Components/Header";
import AccessBar from "../../Components/AccessBar";
import AccessMenu from "../../Components/AccessMenu";
import Footer from "../../Components/Footer";

import imgLobo from "../../../src/assets/lobo.webp";
import imgTubarao from "../../../src/assets/tubarao.webp";
import imgAguia from "../../../src/assets/aguia.webp";
import imgGato from "../../../src/assets/gato.webp";

import "./style.css";

export default function TesteDePesonalidade() {
  let listResposta = [];
  function CadastrarReposta() {
    listResposta.splice(0, Number.MAX_VALUE);

    let q1;
    if ((q1 = document.querySelector('input[name="q1"]:checked') == null))
      return alert("Preencha todos os campos");
    else q1 = document.querySelector('input[name="q1"]:checked').value;
    listResposta.push(q1);

    let q2;
    if ((q2 = document.querySelector('input[name="q2"]:checked') == null))
      return alert("Preencha todos os campos");
    else q2 = document.querySelector('input[name="q2"]:checked').value;
    listResposta.push(q2);

    let q3;
    if ((q3 = document.querySelector('input[name="q3"]:checked') == null))
      return alert("Preencha todos os campos");
    else q3 = document.querySelector('input[name="q3"]:checked').value;
    listResposta.push(q3);

    let q4;
    if ((q4 = document.querySelector('input[name="q4"]:checked') == null))
      return alert("Preencha todos os campos");
    else q4 = document.querySelector('input[name="q4"]:checked').value;
    listResposta.push(q4);

    let q5;
    if ((q5 = document.querySelector('input[name="q5"]:checked') == null))
      return alert("Preencha todos os campos");
    else q5 = document.querySelector('input[name="q5"]:checked').value;
    listResposta.push(q5);

    let q6;
    if ((q6 = document.querySelector('input[name="q6"]:checked') == null))
      return alert("Preencha todos os campos");
    else q6 = document.querySelector('input[name="q6"]:checked').value;
    listResposta.push(q6);

    let q7;
    if ((q7 = document.querySelector('input[name="q7"]:checked') == null))
      return alert("Preencha todos os campos");
    else q7 = document.querySelector('input[name="q7"]:checked').value;
    listResposta.push(q7);

    let q8;
    if ((q8 = document.querySelector('input[name="q8"]:checked') == null))
      return alert("Preencha todos os campos");
    else q8 = document.querySelector('input[name="q8"]:checked').value;
    listResposta.push(q8);

    let q9;
    if ((q9 = document.querySelector('input[name="q9"]:checked') == null))
      return alert("Preencha todos os campos");
    else q9 = document.querySelector('input[name="q9"]:checked').value;
    listResposta.push(q9);

    let q10;
    if ((q10 = document.querySelector('input[name="q10"]:checked') == null))
      return alert("Preencha todos os campos");
    else q10 = document.querySelector('input[name="q10"]:checked').value;
    listResposta.push(q10);

    let q11;
    if ((q11 = document.querySelector('input[name="q11"]:checked') == null))
      return alert("Preencha todos os campos");
    else q11 = document.querySelector('input[name="q11"]:checked').value;
    listResposta.push(q11);

    let q12;
    if ((q12 = document.querySelector('input[name="q12"]:checked') == null))
      return alert("Preencha todos os campos");
    else q12 = document.querySelector('input[name="q12"]:checked').value;
    listResposta.push(q12);

    let q13;
    if ((q13 = document.querySelector('input[name="q13"]:checked') == null))
      return alert("Preencha todos os campos");
    else q13 = document.querySelector('input[name="q13"]:checked').value;
    listResposta.push(q13);

    let q14;
    if ((q14 = document.querySelector('input[name="q14"]:checked') == null))
      return alert("Preencha todos os campos");
    else q14 = document.querySelector('input[name="q14"]:checked').value;
    listResposta.push(q14);

    let q15;
    if ((q15 = document.querySelector('input[name="q15"]:checked') == null))
      return alert("Preencha todos os campos");
    else q15 = document.querySelector('input[name="q15"]:checked').value;
    listResposta.push(q15);

    let q16;
    if ((q16 = document.querySelector('input[name="q16"]:checked') == null))
      return alert("Preencha todos os campos");
    else q16 = document.querySelector('input[name="q16"]:checked').value;
    listResposta.push(q16);

    let q17;
    if ((q17 = document.querySelector('input[name="q17"]:checked') == null))
      return alert("Preencha todos os campos");
    else q17 = document.querySelector('input[name="q17"]:checked').value;
    listResposta.push(q17);

    let q18;
    if ((q18 = document.querySelector('input[name="q18"]:checked') == null))
      return alert("Preencha todos os campos");
    else q18 = document.querySelector('input[name="q18"]:checked').value;
    listResposta.push(q18);

    let q19;
    if ((q19 = document.querySelector('input[name="q19"]:checked') == null))
      return alert("Preencha todos os campos");
    else q19 = document.querySelector('input[name="q19"]:checked').value;
    listResposta.push(q19);

    let q20;
    if ((q20 = document.querySelector('input[name="q20"]:checked') == null))
      return alert("Preencha todos os campos");
    else q20 = document.querySelector('input[name="q20"]:checked').value;
    listResposta.push(q20);

    let q21;
    if ((q21 = document.querySelector('input[name="q21"]:checked') == null))
      return alert("Preencha todos os campos");
    else q21 = document.querySelector('input[name="q21"]:checked').value;
    listResposta.push(q21);

    let q22;
    if ((q22 = document.querySelector('input[name="q22"]:checked') == null))
      return alert("Preencha todos os campos");
    else q22 = document.querySelector('input[name="q22"]:checked').value;
    listResposta.push(q22);

    let q23;
    if ((q23 = document.querySelector('input[name="q23"]:checked') == null))
      return alert("Preencha todos os campos");
    else q23 = document.querySelector('input[name="q23"]:checked').value;
    listResposta.push(q23);

    let q24;
    if ((q24 = document.querySelector('input[name="q24"]:checked') == null))
      return alert("Preencha todos os campos");
    else q24 = document.querySelector('input[name="q24"]:checked').value;
    listResposta.push(q24);

    let q25;
    if ((q25 = document.querySelector('input[name="q25"]:checked') == null))
      return alert("Preencha todos os campos");
    else q25 = document.querySelector('input[name="q25"]:checked').value;
    listResposta.push(q25);

    if (listResposta.length === 25) {
      PerfilPorcentagem(listResposta);
      AbrirModal();
      return true;
    } else {
      alert("Preencha todas as respostas");
      return false;
    }
  }

  function AbrirModal() {
    const modal = document.getElementById("modalTeste");
    if (modal.classList == "none") {
      modal.classList.remove("none");
    }
  }

  function btn_fechar() {
    const vceh = document.getElementById("vceh");
    const conteudoModalT = document.getElementById("conteudoModalT");
    const conteudoModalL = document.getElementById("conteudoModalL");
    const conteudoModalA = document.getElementById("conteudoModalA");
    const conteudoModalG = document.getElementById("conteudoModalG");
    const modal = document.getElementById("modalTeste");
    if (modal.classList != "none") {
      modal.classList.add("none");
      vceh.classList.add("none");
      conteudoModalL.classList.add("none");
      conteudoModalT.classList.add("none");
      conteudoModalA.classList.add("none");
      conteudoModalG.classList.add("none");
    }
  }
  function PerfilPorcentagem(listResposta) {
    var I = 0;
    var A = 0;
    var O = 0;
    var C = 0;
    for (var i = 0; i < listResposta.length; i++) {
      if (listResposta[i] == "I") {
        I++;
        continue;
      }

      if (listResposta[i] == "A") {
        A++;
        continue;
      }

      if (listResposta[i] == "C") {
        C++;
        continue;
      }

      if (listResposta[i] == "O") O++;
    }

    A = A * 4;
    O = O * 4;
    I = I * 4;
    C = C * 4;

    document.getElementById("I").innerHTML = I + "%";
    document.getElementById("A").innerHTML = A + "%";
    document.getElementById("O").innerHTML = O + "%";
    document.getElementById("C").innerHTML = C + "%";

    const conteudoModalG = document.getElementById("conteudoModalG");
    const conteudoModalT = document.getElementById("conteudoModalT");
    const conteudoModalL = document.getElementById("conteudoModalL");
    const conteudoModalA = document.getElementById("conteudoModalA");

    const modal = document.getElementById("modalTeste");
    if (modal.classList == "none") modal.classList.remove("none");

    if (A > O && A >= I && A > C) {
      conteudoModalT.classList.remove("none");
    } else if (I > O && I > A && I >= C) {
      conteudoModalA.classList.remove("none");
    } else if (C >= O && C > A && C > I) {
      conteudoModalG.classList.remove("none");
    } else if (O > C && O >= A && O > I) {
      conteudoModalL.classList.remove("none");
    }
  }

  function ConteudoAguia() {
    const vceh = document.getElementById("vceh");
    const conteudoModalG = document.getElementById("conteudoModalG");
    const conteudoModalT = document.getElementById("conteudoModalT");
    const conteudoModalL = document.getElementById("conteudoModalL");
    const conteudoModalA = document.getElementById("conteudoModalA");
    if (conteudoModalA.classList == "none") {
      vceh.classList.add("none");
      conteudoModalG.classList.add("none");
      conteudoModalL.classList.add("none");
      conteudoModalT.classList.add("none");
      conteudoModalA.classList.remove("none");
    }
  }

  function ConteudoGato() {
    const vceh = document.getElementById("vceh");
    const conteudoModalT = document.getElementById("conteudoModalT");
    const conteudoModalL = document.getElementById("conteudoModalL");
    const conteudoModalA = document.getElementById("conteudoModalA");
    const conteudoModalG = document.getElementById("conteudoModalG");
    if (conteudoModalG.classList == "none") {
      vceh.classList.add("none");
      conteudoModalL.classList.add("none");
      conteudoModalT.classList.add("none");
      conteudoModalA.classList.add("none");
      conteudoModalG.classList.remove("none");
    }
  }

  function ConteudoTubarao() {
    const vceh = document.getElementById("vceh");
    const conteudoModalG = document.getElementById("conteudoModalG");
    const conteudoModalL = document.getElementById("conteudoModalL");
    const conteudoModalA = document.getElementById("conteudoModalA");
    const conteudoModalT = document.getElementById("conteudoModalT");
    if (conteudoModalT.classList == "none") {
      vceh.classList.add("none");
      conteudoModalG.classList.add("none");
      conteudoModalL.classList.add("none");
      conteudoModalA.classList.add("none");
      conteudoModalT.classList.remove("none");
    }
  }

  function ConteudoLobo() {
    const vceh = document.getElementById("vceh");
    const conteudoModalG = document.getElementById("conteudoModalG");
    const conteudoModalL = document.getElementById("conteudoModalL");
    const conteudoModalA = document.getElementById("conteudoModalA");
    const conteudoModalT = document.getElementById("conteudoModalT");
    if (conteudoModalL.classList == "none") {
      vceh.classList.add("none");
      conteudoModalG.classList.add("none");
      conteudoModalT.classList.add("none");
      conteudoModalA.classList.add("none");
      conteudoModalL.classList.remove("none");
    }
  }

  return (
    <div className="bodyPartTestePersonalidade">
      <AccessBar />
      <Header />
      <AccessMenu />
      <h1>Teste de personalidade</h1>
      <p className="Questionario">
        Para não distorcer o resultado, procure ser bem verdadeiro e escolher a
        resposta mais adequada "para você”!
      </p>
      <div id="q1" className="Questionario">
        <h3>Eu sou...</h3>
        <InputRadius
          label="Idealista,criativo e visionário"
          name="q1"
          value="I"
        />
        <InputRadius
          label="Divertido, espiritual e benéfico"
          name="q1"
          value="C"
        />
        <InputRadius
          label="Confiável, meticuloso e previsíve"
          name="q1"
          value="O"
        />
        <InputRadius
          label="Focado, determinado e persistente"
          name="q1"
          value="A"
        />
      </div>

      <div id="q2" className="Questionario">
        <h3>Eu gosto de...</h3>
        <InputRadius label="Ser piloto" name="q2" value="A" />
        <InputRadius label="Conversar com os passageiros" name="q2" value="C" />
        <InputRadius label="Planejar a viagem" name="q2" value="O" />
        <InputRadius label="Explorar novas rotas" name="q2" value="I" />
      </div>

      <div id="q3" className="Questionario">
        <h3>Se você quiser se dar bem comigo...</h3>
        <InputRadius label="Me dê liberdade" name="tq3" value="I" />
        <InputRadius
          label="Me deixe saber sua expectativa"
          name="q3"
          value="O"
        />
        <InputRadius
          label="Lidere, siga ou saia do caminho"
          name="q3"
          value="A"
        />
        <InputRadius
          label="Seja amigável, carinhoso e compreensivo"
          name="q3"
          value="C"
        />
      </div>

      <div id="q4" className="Questionario">
        <h3>Para conseguir obter bons resultados é preciso...</h3>
        <InputRadius label="Ter incertezas" name="q4" value="I" />
        <InputRadius label="Controlar o essencial" name="q4" value="O" />
        <InputRadius label="Diversão e celebração" name="q4" value="C" />
        <InputRadius label="teste" name="q4" value="A" />
      </div>

      <div id="q5" className="Questionario">
        <h3>Eu me divirto quando...</h3>
        <InputRadius label="Estou me exercitando" name="q5" value="A" />
        <InputRadius label="Tenho novidades" name="q5" value="I" />
        <InputRadius label="Estou com os outros" name="q5" value="C" />
        <InputRadius label="Determino as regras" name="q5" value="O" />
      </div>

      <div id="q6" className="Questionario">
        <h3>Eu penso que...</h3>
        <InputRadius
          label="Unidos venceremos, divididos perderemos"
          name="q6"
          value="C"
        />
        <InputRadius
          label="O ataque é melhor que a defesa"
          name="q6"
          value="A"
        />
        <InputRadius
          label="É bom ser manso, mas andar com um porrete"
          name="q6"
          value="I"
        />
        <InputRadius
          label="Um homem prevenido vale por dois"
          name="q6"
          value="O"
        />
      </div>

      <div id="q7" className="Questionario">
        <h3>Minha preocupação é...</h3>
        <InputRadius label="Gerar a ideia global" name="q7" value="I" />
        <InputRadius
          label="Fazer com que as pessoas gostem"
          name="q7"
          value="C"
        />
        <InputRadius label="Fazer com que funcione" name="q7" value="O" />
        <InputRadius label="Fazer com que aconteça" name="q7" value="A" />
      </div>

      <div id="q8" className="Questionario">
        <h3>Eu prefiro...</h3>
        <InputRadius label="Perguntas a respostas" name="q8" value="I" />
        <InputRadius label="Ter todos os detalhes" name="q8" value="O" />
        <InputRadius label="Vantagens a meu favor" name="q8" value="A" />
        <InputRadius
          label="Que todos tenham a chance de ser ouvidos"
          name="q8"
          value="C"
        />
      </div>

      <div id="q9" className="Questionario">
        <h3>Eu gosto de...</h3>
        <InputRadius label="Fazer progresso" name="q9" value="A" />
        <InputRadius label="Construir memórias" name="q9" value="C" />
        <InputRadius label="Fazer sentido" name="q9" value="O" />
        <InputRadius
          label="Tornar as pessoas confortáveis"
          name="q9"
          value="I"
        />
      </div>

      <div id="q10" className="Questionario">
        <h3>Eu gosto de chegar...</h3>
        <InputRadius label="Na frente" name="q10" value="A" />
        <InputRadius label="Junto" name="q10" value="C" />
        <InputRadius label="Na hora" name="q10" value="O" />
        <InputRadius label="Em outro lugar" name="q10" value="I" />
      </div>

      <div id="q11" className="Questionario">
        <h3>Um ótimo dia para mim é quando...</h3>
        <InputRadius label="Consigo fazer muitas coisas" name="q11" value="A" />
        <InputRadius label="Me divirto com meus amigos" name="q11" value="C" />
        <InputRadius
          label="Tudo segue conforme planejado"
          name="q11"
          value="O"
        />
        <InputRadius
          label="Desfruto de coisas novas e estimulantes"
          name="q11"
          value="I"
        />
      </div>

      <div id="q12" className="Questionario">
        <h3>Eu vejo a morte como...</h3>
        <InputRadius
          label="Uma grande aventura misteriosa"
          name="q12"
          value="I"
        />
        <InputRadius
          label="Oportunidade de rever os falecidos"
          name="q12"
          value="C"
        />
        <InputRadius
          label="Um modo de receber recompensas"
          name="q12"
          value="O"
        />
        <InputRadius
          label="Algo que sempre chega muito cedo"
          name="q12"
          value="A"
        />
      </div>

      <div id="q13" className="Questionario">
        <h3>Minha filosofia de vida é... </h3>
        <InputRadius
          label="Há ganhadores e perdedores, e eu acredito ser um ganhador"
          name="q13"
          value="A"
        />
        <InputRadius
          label="Para eu ganhar, ninguém precisa perder"
          name="q13"
          value="C"
        />
        <InputRadius
          label="Para ganhar é preciso seguir as regras"
          name="q13"
          value="O"
        />
        <InputRadius
          label="Para ganhar, é necessário inventar novas regras"
          name="q13"
          value="I"
        />
      </div>

      <div id="q14" className="Questionario">
        <h3>Eu sempre gostei de...</h3>
        <InputRadius label="Explorar" name="q14" value="I" />
        <InputRadius label="Evitar surpresas" name="q14" value="O" />
        <InputRadius label="Focalizar a meta" name="q14" value="A" />
        <InputRadius
          label="Realizar uma abordagem natural"
          name="q14"
          value="C"
        />
      </div>

      <div id="q15" className="Questionario">
        <h3>Eu gosto de mudanças se...</h3>
        <InputRadius
          label="Me der uma vantagem competitiva"
          name="q15"
          value="A"
        />
        <InputRadius
          label="For divertido e puder ser compartilhado"
          name="q15"
          value="C"
        />
        <InputRadius
          label="Me der mais liberdade e variedade"
          name="q15"
          value="I"
        />
        <InputRadius
          label="Melhorar ou me der mais controle"
          name="q15"
          value="O"
        />
      </div>

      <div id="q16" className="Questionario">
        <h3>Não existe nada de errado em...</h3>
        <InputRadius label="Se colocar na frente" name="q16" value="A" />
        <InputRadius label="Colocar os outros na frente" name="q16" value="C" />
        <InputRadius label="Mudar de ideia" name="q16" value="I" />
        <InputRadius label="Ser consistente" name="q16" value="O" />
      </div>

      <div id="q17" className="Questionario">
        <h3>Eu gosto de buscar conselhos de...</h3>
        <InputRadius label="Pessoas bem-sucedidas" name="q17" value="A" />
        <InputRadius label="Anciões e conselheiros" name="q17" value="C" />
        <InputRadius label="Autoridades no assunto" name="q17" value="I" />
        <InputRadius label="Lugares, os mais estranhos" name="q17" value="O" />
      </div>

      <div id="q18" className="Questionario">
        <h3>Meu lema é...</h3>
        <InputRadius
          label="Fazer o que precisa ser feito"
          name="q18"
          value="I"
        />
        <InputRadius label="Fazer bem feito" name="q18" value="O" />
        <InputRadius label="Fazer junto com o grupo" name="q18" value="C" />
        <InputRadius label="Simplesmente fazer" name="q18" value="A" />
      </div>

      <div id="q19" className="Questionario">
        <h3>Eu gosto de....</h3>
        <InputRadius
          label="Complexidade, mesmo se confuso"
          name="q19"
          value="I"
        />
        <InputRadius label="Ordem e sistematização" name="q19" value="O" />
        <InputRadius label="Calor humano e animação" name="q19" value="C" />
        <InputRadius label="Coisas claras e simples" name="q19" value="A" />
      </div>

      <div id="q20" className="Questionario">
        <h3>Tempo para mim é...</h3>
        <InputRadius
          label="Algo que detesto desperdiçar"
          name="q20"
          value="A"
        />
        <InputRadius label="Um grande ciclo" name="q20" value="C" />
        <InputRadius
          label="Uma flecha que leva ao inevitável"
          name="q20"
          value="O"
        />
        <InputRadius label="Irrelevante" name="q20" value="I" />
      </div>

      <div id="q21" className="Questionario">
        <h3>Se eu fosse bilionário...</h3>
        <InputRadius
          label="Faria doações para entidades"
          name="q21"
          value="C"
        />
        <InputRadius
          label="Criaria uma poupança avantajada"
          name="q21"
          value="O"
        />
        <InputRadius label="Faria o que desse na cabeça" name="q21" value="I" />
        <InputRadius
          label="Exibiria bastante com algumas pessoas"
          name="q21"
          value="A"
        />
      </div>

      <div id="q22" className="Questionario">
        <h3>Eu acredito que...</h3>
        <InputRadius
          label="O destino é mais importante que a jornada"
          name="q22"
          value="A"
        />
        <InputRadius
          label="A jornada é mais importante que o destino"
          name="q22"
          value="C"
        />
        <InputRadius
          label="Um centavo economizado é um centavo ganho"
          name="q22"
          value="O"
        />
        <InputRadius
          label="Bastam um navio e uma estrela para navegar"
          name="q22"
          value="I"
        />
      </div>

      <div id="q23" className="Questionario">
        <h3>Eu acredito também que...</h3>
        <InputRadius
          label="Aquele que hesita está perdido"
          name="q23"
          value="A"
        />
        <InputRadius
          label="De grão em grão a galinha enche o papo"
          name="q23"
          value="O"
        />
        <InputRadius label="O que vai, volta" name="q23" value="C" />
        <InputRadius
          label="Um sorriso ou uma careta é o mesmo para quem é cego"
          name="q23"
          value="I"
        />
      </div>

      <div id="q24" className="Questionario">
        <h3>Eu acredito ainda que...</h3>
        <InputRadius
          label="É melhor prudência do que arrependimento"
          name="q24"
          value="O"
        />
        <InputRadius
          label="A autoridade deve ser desafiada"
          name="q24"
          value="I"
        />
        <InputRadius label="Ganhar é fundamental" name="q24" value="A" />
        <InputRadius
          label="O coletivo é mais importante do que o individual"
          name="q24"
          value="C"
        />
      </div>

      <div id="q25" className="Questionario">
        <h3>Eu penso que</h3>
        <InputRadius
          label="Não é fácil ficar encurralado"
          name="q25"
          value="I"
        />
        <InputRadius
          label="É preferível olhar, antes de pular"
          name="q25"
          value="O"
        />
        <InputRadius
          label="Duas cabeças pensam melhor que do que uma"
          name="q25"
          value="C"
        />
        <InputRadius
          label="Se você não tem condições de competir, não compita"
          name="q25"
          value="A"
        />
      </div>
      <div class="centro">
        <button onClick={CadastrarReposta}>Enviar</button>
      </div>

      <div id="modalTeste" className="none">
        <div className="pelicula" id="pelicula" onClick={btn_fechar}></div>
        <div className="janela">
          <p onClick={btn_fechar} id="fechar">
            X
          </p>
          <div className="headModal">
            <p>Resultado</p>
            <img src="" alt="" class="logoTipo" />
          </div>
          <div className="conteudoModal">
            <div className="animais">
              <div className="animal">
                <div className="alinhar">
                  <img
                    src={imgAguia}
                    alt="Aguia"
                    className="aguia"
                    id="imgAguia"
                    onClick={ConteudoAguia}
                  />

                  <div className="nomePorcentagem">
                    <p>ÁGUIA</p>
                    <p id="I">%</p>
                  </div>
                </div>

                <p className="palavraChave">A CRIATIVA</p>
              </div>
              <div className="animal">
                <div className="alinhar">
                  <img
                    src={imgLobo}
                    alt="Lobo"
                    className="aguia"
                    id="imgLobo"
                    onClick={ConteudoLobo}
                  />
                  <div className="nomePorcentagem">
                    <p id="imgLobo">LOBO</p>
                    <p id="O">%</p>
                  </div>
                </div>

                <p className="palavraChave">O ORGANIZADOR</p>
              </div>
              <div className="animal">
                <div className="alinhar">
                  <img
                    src={imgTubarao}
                    alt="tubarao"
                    className="aguia"
                    id="imgTubarao"
                    onClick={ConteudoTubarao}
                  />
                  <div className="nomePorcentagem">
                    <p id="imgTubarao">TUBARÃO</p>
                    <p id="A">%</p>
                  </div>
                </div>

                <p className="palavraChave">O ATACADO</p>
              </div>
              <div className="animal">
                <div className="alinhar">
                  <img
                    src={imgGato}
                    alt="gato"
                    className="aguia"
                    id="imgGato"
                    onClick={ConteudoGato}
                  />
                  <div className="nomePorcentagem">
                    <p id="imgGato">GATO</p>
                    <p id="C">%</p>
                  </div>
                </div>

                <p className="palavraChave">O EXTROVERTIDO</p>
              </div>
            </div>
            <div className="conteudo">
              <h5 id="vceh">VOCÊ É:</h5>
              <div id="conteudoModalG" className="none">
                <h2 id="nomeAnimal">Gato</h2>

                <p>
                  Seu lema é: 'Fazer Junto'. É sensível, gosta de
                  relacionamentos, de times, é tradicionalista, busca harmonia e
                  delega autoridade. Pontos Fortes: Comunicação, manter a
                  harmonia, desenvolver e manter a cultura empresarial e
                  comunicação aberta. Pontos de melhoria: esconder conflitos,
                  felicidade acima dos resultados, manipulação através dos
                  sentimentos. Motivações: Segurança, aceitação social,
                  construir o consenso, reconhecimento da equipe, supervisão
                  compreensiva, ambiente harmonico e trabalho em grupo.
                </p>
              </div>
              <div id="conteudoModalT" className="none">
                <h2 id="nomeAnimal">Tubarão</h2>

                <p>
                  Seu lema é: 'Fazer rápido'. Tem senso de urgência, ação,
                  iniciativa, é impulsivo, prático, gosta de vencer desafios,
                  focado no aqui e agora. É auto-suficiente e não gosta de
                  delegar poder. Pontos Fortes: Fazer acontecer, parar com a
                  burocracia e a motivação. Pontos de melhoria: socialmente um
                  desastre, faz do modo mais fácil e relacionamento complicado.
                  Motivações: Liberdade para agir individualmente, controle das
                  próprias atividades, resolver os problemas do seu jeito,
                  competição individual, variedade de atividades e não ter que
                  repetir tarefas.{" "}
                </p>
              </div>
              <div id="conteudoModalA" className="none">
                <h2 id="nomeAnimal">Águia</h2>

                <p>
                  Seu lema é: 'Fazer Diferente'. É criativo. intuitivo. tem foco
                  no futuro, distraído, curioso, informal, casual e flexível
                  Pontos fortes: Provoca mudanças radicais, antecipa o futuro e
                  a criatividade. Pontos de melhoria: Falta de atenção no aqui e
                  agora, impaciência, rebeldia e defender o novo pelo novo.
                  Motivações: Liberdade de expressão, ausência de controles
                  rígidos, ambiente de trabalho descontraído, liberdade para
                  fazer exceções e oportunidades para delegar tarefas e
                  detalhes.{" "}
                </p>
              </div>
              <div id="conteudoModalL" className="none">
                <h2 id="nomeAnimal">Lobo</h2>

                <p>
                  Seu lema é: 'Fazer Certo'. É detalhista, organizado,
                  estrategista, busca conhecimento, pontual, conservador e
                  previsível. Pontos Fortes: Organização. Consciência,
                  conformidade e qualidade. Lealdade e segurança. Regras e
                  responsabilidades. Pontos de melhoria: dificuldades de se
                  adaptar as mudanças. Pode impedir o progresso. Detalhista,
                  estruturado e demasiadamente sistematizado. Motivações:
                  Compreensão exata de quais são as regras. Conhecimento
                  específico do trabalho. Ausência de riscos e erros. Ver o
                  produto acabado: começo, meio e fim.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
