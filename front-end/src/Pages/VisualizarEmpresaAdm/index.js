import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import AccessBar from "../../Components/AccessBar";
import AccessMenu from "../../Components/AccessMenu";
import Tag from "../../Components/Tag/Index";

import imgDelete from "../../assets/delete.webp";

import { uri } from "../../services/conexao";

import "./style.css";

export default function VisualizarEmpresaAdm() {
  const [NomeResponsavel, SetNomeResponsavel] = useState("");
  const [CNPJ, SetCNPJ] = useState("");
  const [NomeFantasia, SetNomeFantasia] = useState("");
  const [RazaoSocial, SetRazaoSocial] = useState("");
  const [Telefone, SetTelefone] = useState("");
  const [NumFuncionario, SetNumFuncionario] = useState(0);
  const [NumCNAE, SetNumCNAE] = useState("");
  const [CEP, SetCEP] = useState("");
  const [Logradouro, SetLogradouro] = useState("");
  const [Complemento, SetComplemento] = useState("");
  const [EmailContato, SetEmailContato] = useState("");
  const [Estado, SetEstado] = useState("");
  const [Cidade, SetCidade] = useState("");
  const [CaminhoImagem, setCaminho] = useState("");
  const [Vagas, setVagas] = useState([]);
  let history = useHistory();

  useEffect(() => {
    BuscarEmpresaPorId();
    listarVagas();
  }, []);

  const listarVagas = () => {
    fetch(
      `${uri}/api/Administrador/ListarVagasEmpresaAdm/` +
        localStorage.getItem("IdEmpresaSelecionada"),
      {
        method: "GET",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
      .then((response) => response.json())
      .then((dados) => {
        setVagas(dados);
      })
      .catch((err) => console.error(err));
  };

  const BuscarEmpresaPorId = (id) => {
    fetch(
      `${uri}/api/Administrador/BuscarEmpresaPorIdAdm/` +
        localStorage.getItem("IdEmpresaSelecionada"),
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
      .then((response) => response.json())
      .then((dados) => {
        SetNomeResponsavel(dados.nomeReponsavel);
        SetCNPJ(dados.cnpj);
        SetNomeFantasia(dados.nomeFantasia);
        SetRazaoSocial(dados.razaoSocial);
        SetTelefone(dados.telefone);
        SetNumFuncionario(dados.numFuncionario);
        SetNumCNAE(dados.numCnae);
        SetCEP(dados.cep);
        SetLogradouro(dados.logradouro);
        SetComplemento(dados.complemento);
        SetEmailContato(dados.emailContato);
        SetEstado(dados.uf);
        SetCidade(dados.localidade);
        setCaminho(dados.idUsuarioNavigation.caminhoImagem);
      })
      .catch((err) => console.error(err));
  };

  const DeletarVaga = (id) => {
    fetch(`${uri}/api/Administrador/DeletarVaga/${id}`, {
      method: "DELETE",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        alert(dados);
        listarVagas();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="VisualizarVagaAdm">
      <AccessBar />
      <Header />
      <AccessMenu />
      <div className="MeioVizualizarAdm">
        <div className="EsquerdoAdm">
          <div>
            {Vagas.map((item) => {
              return (
                <div key={item.idEmpresa} className="BoxPerfil">
                  <div className="flexBoxPerfil">
                    <img
                      className="imgUsuario"
                      src={`${uri}/imgPerfil/${item.caminhoImagem}`}
                      alt="usuario"
                    />
                    <div className="ColumnTituloArea">
                      <h2>{item.tituloVaga}</h2>
                      <p>{item.nomeArea}</p>
                    </div>
                  </div>
                  <div className="ColumnPerfilBanir">
                    <img
                      className="Delete"
                      src={imgDelete}
                      onClick={() => DeletarVaga(item.idVaga)}
                      alt="Botão que deleta a vaga da empresa"
                    />
                    <div className="DeletePerfil">
                      <button
                        className="btVerPerfil"
                        onClick={(e) => {
                          e.preventDefault();
                          localStorage.setItem(
                            "idVagaSelecionadaAdm",
                            item.idVaga
                          );
                          history.push("VizualizarVagaAdmin");
                        }}
                      >
                        <h4>Ver vaga</h4>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <hr className="hrAdm"></hr>
        <div className="DireitoAdm">
          <div className="BoxEmpresa">
            <div className="ImagemEmpresaAdm">
              <img
                src={`${uri}/imgPerfil/${CaminhoImagem}`}
                alt="Imagem de perfil da empresa"
              />
              <h5>{RazaoSocial}</h5>
            </div>
            <div className="DadosDaEmpresa">
              <Tag NomeTag={"Nome do responsável:" + NomeResponsavel} />
              <Tag NomeTag={"CNPJ:" + CNPJ} />
              <Tag NomeTag={"Email para contato:" + EmailContato} />
              <Tag NomeTag={"Nome fantasia:" + NomeFantasia} />
              <Tag NomeTag={"Telefone:" + Telefone} />
              <Tag
                NomeTag={"Numero de fúncionarios atuando:" + NumFuncionario}
              />
              <Tag NomeTag={"Número do CNAE:" + NumCNAE} />
              <Tag NomeTag={"Estado:" + Estado} />
              <Tag NomeTag={"Cidade:" + Cidade} />
              <Tag NomeTag={"CEP:" + CEP} />
              <Tag NomeTag={"Logradouro:" + Logradouro} />
              <Tag NomeTag={"Complemento:" + Complemento} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
