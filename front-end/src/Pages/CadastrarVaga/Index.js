import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import AccessBar from "../../Components/AccessBar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Input from "../../Components/Input";
import AccessMenu from "../../Components/AccessMenu";

import { uri } from "../../services/conexao";
import api from "../../services/api";

import "./style.css";

export default function CadastrarVaga() {
  const [TituloVaga, SetTituloVaga] = useState("");
  const [Salario, SetSalario] = useState("");
  const [Area, SetArea] = useState("");
  const [Experiencia, SetExperiencia] = useState("");
  const [TipoDeContrato, SetTipoContrato] = useState("");
  const [Estado, SetEstado] = useState("");
  const [Cidade, SetCidade] = useState("");
  const [CEP, SetCEP] = useState("");
  const [Logradouro, SetLogradouro] = useState("");
  const [Complemento, SetComplemento] = useState("");
  const [DescricaoVaga, SetDescricaoVaga] = useState("");
  const [DescricaoEmpresa, SetDescricaoEmpresa] = useState("");
  const [DescricaoBeneficio, SetDescricaoBeneficio] = useState("");
  const [ListAreas, SetListArea] = useState([]);
  const [ListTipoPresencas, setTipoPresencas] = useState([]);
  const [IdTipoPresenca, setIdTipoPresenca] = useState(0);

  useEffect(() => {
    listarAreas();
    ListarTipoPresencas();
  }, []);

  let history = useHistory();

  const validaCep = /^[0-9]{8}$/g;
  let verificacaoCep = validaCep.test(CEP);

  function buscarCep(valor) {
    if (verificacaoCep) {
      const URL = `https://viacep.com.br/ws/${valor}/json/`;
      fetch(URL)
        .then((resposta) => resposta.json())
        .then((data) => {
          if (data.logradouro || data.localidade || data.uf !== undefined) {
            document.getElementById("rua").value = data.logradouro;
            document.getElementById("cidade").value = data.localidade;
            document.getElementById("uf").value = data.uf;
            SetLogradouro(data.logradouro);
            SetCidade(data.localidade);
            SetEstado(data.uf);
          } else {
            alert("O CEP não existe");
          }
        })
        .catch((erro) => console.error(erro));
    } else {
      alert("O CEP deve conter apenas 8 números");
    }
  }
  const listarAreas = () => {
    fetch(`${uri}/api/Usuario/ListarArea`, {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        SetListArea(dados);
      })
      .catch((err) => console.error(err));
  };

  const ListarTipoPresencas = () => {
    fetch(`${uri}/api/Empresa/ListarTipoPresenca`, {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        setTipoPresencas(dados);
      })
      .catch((err) => console.error(err));
  };

  const salvar = () => {
    const form = {
      tituloVaga: TituloVaga,
      salario: Salario,
      idArea: Area,
      idTipoRegimePresencial: IdTipoPresenca,
      experiencia: Experiencia,
      tipoContrato: TipoDeContrato,
      estado: Estado,
      localidade: Cidade,
      cep: CEP,
      logradouro: Logradouro,
      complemento: Complemento,
      descricaoVaga: DescricaoVaga,
      descricaoEmpresa: DescricaoEmpresa,
      descricaoBeneficio: DescricaoBeneficio,
    };
    if (validaCep) {
      api
        .post("/Empresa/AdicionarVaga", form, {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(function (respose) {
          if (respose.status !== 200) {
            alert("Não foi possivel cadastrar a vaga");
          } else {
            alert("Vaga cadastrada com sucesso");
            history.push("/VagasPublicadas");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <body>
      <AccessBar />
      <Header />
      <AccessMenu />
      <div className="bodyPartCadastrarVaga">
        <div className="meio">
          <div className="Esquerdo">
            <div className="ModalCadastro">
              <h2>Divulgue sua vaga aqui</h2>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                <Input
                  className="InputCadastro"
                  id="TituloVagaCadastro"
                  name="TituloVagaCadastro"
                  label="Título da Vaga"
                  onChange={(e) => SetTituloVaga(e.target.value)}
                  type="text"
                  maxLength={50}
                  minLength={5}
                  required
                />

                <Input
                  className="InputCadastro"
                  id="SalarioCadastro"
                  name="SalarioCadastro"
                  type="number"
                  label="Salário"
                  onChange={(e) => SetSalario(e.target.value)}
                  required
                />

                <div className="select-final">
                  <label htmlFor="selectAreaCadastro">Área</label>
                  <select
                    id="selectAreaCadastro"
                    onChange={(e) => SetArea(e.target.value)}
                    value={Area}
                    required
                  >
                    <option value="0">Selecione uma área de atuação</option>
                    {ListAreas.map((item) => {
                      return (
                        <option value={item.idArea}>{item.nomeArea}</option>
                      );
                    })}
                  </select>
                </div>

                <div className="select-final">
                  <label htmlFor="selectTipoPresencaCadastro">
                    Tipo de presença
                  </label>
                  <select
                    id="selectTipoPresencaCadastro"
                    onChange={(e) => setIdTipoPresenca(e.target.value)}
                    value={IdTipoPresenca}
                    required
                  >
                    <option value="0">Selecione um tipo de presenca</option>
                    {ListTipoPresencas.map((item) => {
                      return (
                        <option value={item.idTipoRegimePresencial}>
                          {item.nomeTipoRegimePresencial}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="select-final">
                  <label htmlFor="selectExperienciaCadastro">Experiência</label>
                  <select
                    id="selectExperienciaCadastro"
                    onChange={(e) => SetExperiencia(e.target.value)}
                    value={Experiencia}
                    required
                  >
                    <option value="0">Selecione um nivel de experiencia</option>
                    <option value="Pleno">Pleno</option>
                    <option value="Sênior">Sênior</option>
                    <option value="Júnior">Júnior</option>
                  </select>
                </div>
                <div className="select-final">
                  <label htmlFor="selectTipoContratoCadastro">
                    Tipo de contrato
                  </label>
                  <select
                    id="selectTipoContratoCadastro"
                    onChange={(e) => SetTipoContrato(e.target.value)}
                    value={TipoDeContrato}
                    required
                  >
                    <option value="0">Selecione um tipo de contrato</option>
                    <option value="CLT">CLT</option>
                    <option value="PJ">PJ</option>
                    <option value="Estagio">Estagio</option>
                  </select>
                </div>
                <div className="Input">
                  <label htmlFor="cepCadastroVaga">CEP:</label>
                  <br />
                  <input
                    maxLength={8}
                    minLength={8}
                    type="text"
                    className="cadastre"
                    id="cepCadastroVaga"
                    onBlur={(e) => {
                      e.preventDefault();
                      buscarCep(e.target.value);
                    }}
                    onChange={(e) => SetCEP(e.target.value)}
                  />
                </div>

                <Input
                  id="rua"
                  className="InputCadastro"
                  name="Logradouro"
                  label="Logradouro"
                  type="text"
                  onChange={(e) => SetLogradouro(e.target.value)}
                  maxLength={150}
                  minLength={5}
                  required
                />

                <Input
                  id="ComplementoCadastroVaga"
                  className="InputCadastro"
                  name="ComplementoCadastroVaga"
                  label="Complemento"
                  type="text"
                  onChange={(e) => SetComplemento(e.target.value)}
                  maxLength={255}
                  minLength={5}
                />

                <div className="Input">
                  <label>Cidade:</label>
                  <br />
                  <input
                    type="text"
                    className="cadastre"
                    id="cidade"
                    required
                    disabled
                    maxLength={255}
                    minLength={5}
                  />
                </div>

                <div className="Input">
                  <label>UF:</label>
                  <br />
                  <input
                    type="text"
                    className="cadastre"
                    id="uf"
                    required
                    disabled
                    maxLength={2}
                    minLength={2}
                  />
                </div>

                <div className="text-area">
                  <label htmlFor="DescricaoVagaCadastro">
                    Descrição da vaga
                  </label>
                  <textarea
                    id="DescricaoVagaCadastro"
                    name="DescricaoVaga"
                    onChange={(e) => SetDescricaoVaga(e.target.value)}
                    required
                    maxLength={750}
                    minLength={5}
                  ></textarea>
                  <br />
                  <label htmlFor="DescricaoEmpresaCadastro">
                    Descrição da empresa
                  </label>
                  <textarea
                    onChange={(e) => SetDescricaoEmpresa(e.target.value)}
                    name="DescricaoEmpresa"
                    required
                    maxLength={750}
                    minLength={5}
                    id="DescricaoEmpresaCadastro"
                  ></textarea>
                  <br />
                  <label htmlFor="DescricaoBeneficioCadastro">
                    Descrição dos benefícios
                  </label>
                  <textarea
                    name="DescricaoBeneficio"
                    onChange={(e) => SetDescricaoBeneficio(e.target.value)}
                    required
                    maxLength={750}
                    minLength={5}
                    id="DescricaoBeneficioCadastro"
                  ></textarea>
                </div>
                <br />
                <div className="btVagaDiv">
                  <button className="btVaga" onClick={salvar}>
                    Cadastrar
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="Direito"></div>
        </div>
      </div>
      <Footer />
    </body>
  );
}
