import React from "react";
import { useHistory, Link } from "react-router-dom";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import AccessBar from "../../Components/AccessBar";
import AccessMenu from "../../Components/AccessMenu";
import Tag from "../../Components/Tag/Index";
import Svg from "../../Components/imgsvg/Index";
import Confidence from "../../Components/imgsvg/confidence";
import Surprise from "../../Components/imgsvg/surprise";

import imgPadrao from "../../assets/android-character-symbol.webp";
import imgPerfil from "../../assets/perfil-comportamental-online.webp";

import "./style.css";

export default function Home() {
  let history = useHistory();
  return (
    <div>
      <AccessBar />
      <Header />
      <AccessMenu />
      <div className="bodyPart">
        <div className="StartImage">
          <div className="StartText">
            <h1>Bem-vindo ao SENAI TechVagas!</h1>
            <p>
              O site de emprego que oferece as melhores vagas de tecnologia da
              informação!
            </p>
          </div>
          <br />
          <br />
          <br />
          <h3>Dê o seu primeiro passo:</h3>

          <div className="EmpresaCandidato">
            <div className="Empresa">
              <p>Empresas com interesse de divulgar <br />oportunidades</p>
              <br />
              <div>
                <Link to="/cadastro/empresa">
                  <button className="BtnStartEmpresa">
                    <h2>EMPRESA</h2>
                  </button>
                </Link>
              </div>
            </div>

            <div className="Candidato">
              <p>Alunos que escolheram ingressar<br />no curso</p>
              <br />
              <div>
                <Link to="/cadastro">
                  <button className="BtnStartCandidato">
                    <h2>CANDIDATO</h2>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="Imagens">
          <div className="ColumnImages">
            <Svg />
            <h2>Profissionalismo</h2>
            <p>Um dos principais pilares da nossa<br />
            aplicação, demonstramos o  nosso<br />
            compromisso com o aluno e com a empresa</p>
          </div>
          <div className="ColumnImages">
            <Confidence />
            <h2>Confiança</h2>
            <p>Taxa de empregabilidade supera 80% entre<br />
            profissionais que concluíram cursos em <br />
            áreas da tecnologia da informação</p>
          </div>
          <div className="ColumnImages">
            <Surprise />
            <h2>Surpresa</h2>
            <p>Quando você menos espera:<br />
            Você foi aceito! A plataforma faz com <br />
            que você trabalhe seus potenciais</p>
          </div>
        </div>
        <div className="QuadroDeVagas">
          <br />
          <h2>Quadro de vagas</h2>
          <p>Aqui você encontra as melhores vagas disponíveis</p>
          <br />
          <div className="BoxDeVagas">
            <div className="Vaga">
              <div className="Space">
                <img src={imgPadrao} alt="Imagem de perfil" />
                <h3>Google</h3>
                <br />
                <hr className="hr" />
                <br />
                <h4>Desenvolvedor Back-end Jr.</h4>
                <br />
                <div className="Tecnologias">
                  <Tag NomeTag={"Fluther"}></Tag>
                  <Tag NomeTag={"Dart"}></Tag>
                  <Tag NomeTag={"Javascript"}></Tag>
                  <Tag NomeTag={"CSharp"}></Tag>
                  <Tag NomeTag={"React"}></Tag>
                </div>
              </div>
              <div className="LinkVaga">
                <h4 className="UnderlineText" onClick={() => history.push("/login")}>Ver mais sobre a vaga</h4>
              </div>
            </div>
            <div className="Vaga">
              <div className="Space">
                <img src={imgPadrao} alt="Imagem de perfil" />
                <h3>Youtube</h3>
                <br />
                <hr className="hr" />
                <br />
                <h4>Desenvolvedor Back-end Jr.</h4>
                <br />
                <div className="Tecnologias">
                  <Tag NomeTag={"Angular"}></Tag>
                  <Tag NomeTag={"C++"}></Tag>
                  <Tag NomeTag={"Python"}></Tag>
                  <Tag NomeTag={"Html5"}></Tag>
                  <Tag NomeTag={"Css3"}></Tag>
                  <Tag NomeTag={"Java"}></Tag>
                </div>
              </div>
              <div className="LinkVaga">
                <h4 className="UnderlineText" onClick={() => history.push("/login")}>Ver mais sobre a vaga</h4>
              </div>
            </div>
            <div className="Vaga">
              <div className="Space">
                <img src={imgPadrao} alt="Imagem de perfil" />
                <h3>Apple</h3>
                <br />
                <hr className="hr" />
                <br />
                <h4>Desenvolvedor Back-end Jr.</h4>
                <br />
                <div className="Tecnologias">
                  <Tag NomeTag={"NodeJs"}></Tag>
                  <Tag NomeTag={"VueJs"}></Tag>
                  <Tag NomeTag={"MVC"}></Tag>
                  <Tag NomeTag={".Net"}></Tag>
                  <Tag NomeTag={"Entity Framework"}></Tag>
                  <Tag NomeTag={"SQL"}></Tag>
                  <Tag NomeTag={"MongoDB"}></Tag>
                </div>
              </div>
              <div className="LinkVaga">
                <h4 className="UnderlineText" onClick={() => history.push("/login")}>Ver mais sobre a vaga</h4>
              </div>
            </div>
          </div>
          <br />
        </div>

        <div className="TesteDePersonalidade">
          <div className="imgTeste">
            <img src={imgPerfil} alt="Imagem do teste de personalidade ilustrando quatro animais. Uma águia, um lobo, um tubarão e um gato." />
          </div>
          <div className="TextoTeste">
            <br />
            <h2>Teste de perfil comportamental</h2>
            <p>
              As características do mundo animal, também, podem ser usadas no mundo corporativo.
            <br />
É possível traçar: o perfil de personalidade de cada pessoa e o tipo de personalidade, a partir de um mapa comportamental.
<br />
Este teste relaciona às características de um animal ao comportamento humano, apontando pontos positivos e negativos,
<br />do nosso comportamento.
            </p>
            <br />
            <h4>Você é uma Águia, Lobo, Gato ou Tubarão?</h4>
            <h4>Faça o teste e descubra!</h4>
            <br />
            <br />
            <div className="btnTeste">
              <a href="/TesteDePersonalidade">
                <button className="bt">
                  <h4>FAZER O TESTE</h4>
                </button>
              </a>
            </div>
            <br />
          </div>
        </div>
        <div className="Depoimentos">
          <h2>Depoimentos</h2>
          <p>Veja o que estão falando de nós</p>
          <br />
          <br />
          <div className="BoxDepoimentos">
            <div className="BoxTexto">
              <div className="Depo">
                <p>"Um dos grandes diferenciais do Senai é  proporcionar o Ensino Fundamentado efetivo, onde alunos e professores vivenciam o cotidiano do mercado de trabalho com experiências em projetos reais. Fornece uma estrutura e administração  inovadora possibilitando o desenvolvimento técnico e humano de nossos alunos."</p>
              </div>
              <br/>
              <h5 className="NomeDepo">Priscila Medeiro - Orientadora do Projeto</h5>
            </div>

            <div className="BoxTexto">
              <div className="Depo">
                <p>"Tive o imenso prazer de contribuir no aprendizado destas pessoas incríveis e queridas, onde apesar do pouco tempo pude notar um potencial enorme. Fico muito feliz em ver os resultados alcançados e sei que este é apenas o começo de um futuro brilhante. Sucesso pra vocês!"</p>
              </div>
              <br/>
              <h5 className="NomeDepo">
                Saulo Santos - Instrutor e Desenvolvedor da Escola SENAI de Informática
              </h5>
            </div>

            <div className="BoxTexto">
              <div className="Depo">
                <p>“Tive a honra de poder acompanhar o projeto desde o início de sua confecção, é impressionante a evolução que todos vocês tiveram em tão pouco tempo, sem deixar de lado a qualidade técnica e usabilidade da aplicação, meus parabéns!”</p>
              </div>
              <br/>
              <h5 className="NomeDepo">
                Paulo Brandão - Professor do SENAI
              </h5>
            </div>

            <div className="BoxTexto">
              <div className="Depo">
                <p>"Os desafios foram grandes ao longo do ano. Muitos obstáculos foram superados. Momentos em que o cansaço bateu e vontade de desistir não faltou. Mas o resultado apresentado foi fantástico. Vocês estão prontos para enfrentar os desafios do dia a dia, seja em qualquer empresa ou construindo a própria empresa. Meus parabéns."</p>
              </div>
              <br/>
              <h5 className="NomeDepo">
                Roberto Possarle - Instrutor e gestor de projetos do SENAI São Paulo
              </h5>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}