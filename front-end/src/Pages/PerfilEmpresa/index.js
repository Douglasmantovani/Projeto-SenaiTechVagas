import React, { useState, useEffect } from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import AccessBar from "../../Components/AccessBar";
import Input from "../../Components/Input/index";
import AccessMenu from "../../Components/AccessMenu";

import { uri } from "../../services/conexao";

import "./style.css";

export default function PerfilEmpresa() {
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
  const [NovaSenha, SetNovaSenha] = useState("");
  const [SenhaAtual, setSenha] = useState("");
  const [Candidatos, SetCandidato] = useState([]);
  const [CaminhoImagem, setCaminho] = useState("");

  const validaCep = /^[0-9]{8}$/g;
  let verificacaoCep = validaCep.test(CEP);

  const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&\*_-])(?=.{9,15})/g;
  const verificacaoSenha = senhaRegex.test(NovaSenha);

  useEffect(() => {
    listarCandidatos();
    BuscarEmpresaPorId();
  }, []);

  const EditarDadosDaEmpresa = () => {
    const form = {
      nomeReponsavel: NomeResponsavel,
      cnpj: CNPJ,
      nomeFantasia: NomeFantasia,
      razaoSocial: RazaoSocial,
      telefone: Telefone,
      numFuncionario: NumFuncionario,
      numCnae: NumCNAE,
      cep: CEP,
      logradouro: Logradouro,
      complemento: Complemento,
      emailContato: EmailContato,
      Uf: Estado,
      Localidade: Cidade,
    };
    fetch(`${uri}/api/Empresa/AtualizarEmpresa`, {
      method: "PUT",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then(function (respose) {
        if (respose.status !== 200) {
          alert("Não foi possivel editar os dados da empresa");
        } else {
          alert("Editada com sucesso");
        }
      })
      .catch((err) => console.error(err));
  };

  function buscarCep(valor) {
    if (verificacaoCep) {
      const URL = `https://viacep.com.br/ws/${valor}/json/`;
      fetch(URL)
        .then((resposta) => resposta.json())
        .then((data) => {
          document.getElementById("rua").value = data.logradouro;
          document.getElementById("cidade").value = data.localidade;
          document.getElementById("uf").value = data.uf;
          SetLogradouro(data.logradouro);
          SetCidade(data.localidade);
          SetEstado(data.uf);
        })
        .catch((erro) => console.error(erro));
    } else {
      alert("O CEP é inválido");
    }
  }

  const BuscarEmpresaPorId = () => {
    fetch(`${uri}/api/Empresa/BuscarEmpresaPorId`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
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

  const AlterarSenha = () => {
    const form = {
      novaSenha: NovaSenha,
      SenhaAtual: SenhaAtual,
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
            alert("Senha alterada com sucesso com sucesso");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const listarCandidatos = () => {
    fetch(`${uri}/api/Empresa/ListarCandidatosEstagiando`, {
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

  function ApareceEditarDadosEmpresa() {
    let idEditarPelicula = document.getElementById("peliculaPerfilEmpresa");
    let idModalVaga = document.getElementById("modalPerfilEmpresa");
    if (idEditarPelicula.classList == "peliculaPerfilEmpresa none") {
      idEditarPelicula.classList.remove("none");
      idModalVaga.classList.remove("none");
    }
  }

  function btn_fecharEditarDadosEmpresa() {
    let idModalVaga = document.getElementById("modalPerfilEmpresa");
    let idEditarPelicula = document.getElementById("peliculaPerfilEmpresa");
    if (idEditarPelicula.classList != "peliculaPerfilEmpresa none") {
      idEditarPelicula.classList.add("none");
      idModalVaga.classList.add("none");
    }
  }

  function ApareceAlterarSenhaEmpresa() {
    let idEditarPelicula = document.getElementById(
      "peliculaAlterarSenhaEmpresa"
    );
    let idModalVaga = document.getElementById("modalAlterarSenhaEmpresa");
    if (idEditarPelicula.classList == "peliculaAlterarSenhaEmpresa none")
      idEditarPelicula.classList.remove("none");
    idModalVaga.classList.remove("none");
  }

  function btn_fecharAlterarSenhaEmpresa() {
    let idModalVaga = document.getElementById("modalAlterarSenhaEmpresa");
    let idEditarPelicula = document.getElementById(
      "peliculaAlterarSenhaEmpresa"
    );
    if (idEditarPelicula.classList != "AlterarSenhaEmpresa none") {
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
    .then(response => response.json())
    .then(data => {
        setCaminho(data);
    })
    .catch(err => console.log(err))
}

  return (
    <div className="bodyPartVizualizarPerfil">
      <AccessBar />
      <AccessMenu />
      <Header />
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
                src={"http://localhost:5000/imgPerfil/" + CaminhoImagem}
                alt="perfil"
              />
            </label>
            <h3>{RazaoSocial}</h3>
            <p>Empresa</p>
          </div>
          <div className="BotoesPerfilEmpresa">
            <button className="btPerfil" onClick={ApareceEditarDadosEmpresa}>
              <h3>Alterar dados</h3>
            </button>
            <button className="btPerfil" onClick={ApareceAlterarSenhaEmpresa}>
              <h3>Alterar senha</h3>
            </button>
          </div>
        </div>
        <div className="DireitoPerfil">
          <h2 className="Desrcicao-Perfil">Candidatos contratados</h2>
          {Candidatos.map((item) => {
            return (
              <div className="BoxPerfilCandidato">
                <div className="flexBoxPerfilCandidato">
                  <img
                    src={`${uri}/imgPerfil/${item.idUsuarioNavigation.caminhoImagem}`}
                    alt="Imagem dos estagiarios"
                  />
                  <h3>{"Nome do estágiario:" + item.nomeCompleto}</h3>
                </div>
                <h3>{"CPF:" + item.cpf}</h3>
                <h3>{"Telefone:" + item.telefone}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <div
        id="peliculaPerfilEmpresa"
        className="peliculaPerfilEmpresa none"
        onClick={btn_fecharEditarDadosEmpresa}
      ></div>
      <div id="modalPerfilEmpresa" className="modalPerfilEmpresa none">
        <h2>Editar seus dados pessoais</h2>
        <form>
          <Input
            className="InputCadastro"
            value={NomeResponsavel}
            name="NomeResponsavelEditEmpresa"
            label="Nome do responsável"
            onChange={(e) => SetNomeResponsavel(e.target.value)}
            maxLength={65}
            minLength={5}
            required
            id="NomeResponsavelEditEmpresa"
          />

          <Input
            className="InputCadastro"
            value={RazaoSocial}
            name="RazaoSocialEditEmpresa"
            label="Razão social"
            onChange={(e) => SetRazaoSocial(e.target.value)}
            maxLength={50}
            minLength={5}
            required
            id="RazaoSocialEditEmpresa"
          />
          <Input
            className="InputCadastro"
            value={NomeFantasia}
            name="NomeFantasiaEditEmpresa"
            label="Nome fantasia"
            onChange={(e) => SetNomeFantasia(e.target.value)}
            maxLength={50}
            minLength={5}
            required
            id="NomeFantasiaEditEmpresa"
          />
          <Input
            className="InputCadastro"
            value={CNPJ}
            name="CNPJEditEmpresa"
            label="CNPJ"
            onChange={(e) => SetCNPJ(e.target.value)}
            maxLength={14}
            minLength={14}
            required
            id="CNPJEditEmpresa"
          />

          <Input
            className="InputCadastro"
            value={EmailContato}
            name="EmailContatoEditEmpresa"
            label="Email para contato"
            onChange={(e) => SetEmailContato(e.target.value)}
            maxLength={254}
            minLength={5}
            required
            id="EmailContatoEditEmpresa"
          />

          <Input
            className="InputCadastro"
            value={Telefone}
            name="TelefoneEditEmpresa"
            label="Telefone"
            onChange={(e) => SetTelefone(e.target.value)}
            maxLength={11}
            minLength={10}
            required
            id="TelefoneEditEmpresa"
          />

          <Input
            className="InputCadastro"
            value={NumFuncionario}
            name="NumFuncionariosEditEmpresa"
            label="Número de fúncionarios"
            onChange={(e) => SetNumFuncionario(e.target.value)}
            required
            id="NumFuncionariosEditEmpresa"
          />

          <Input
            className="InputCadastro"
            value={NumCNAE}
            name="NumCNAEEditEmpresa"
            label="Número do CNAE"
            onChange={(e) => SetNumCNAE(e.target.value)}
            maxLength={7}
            minLength={7}
            required
            id="NumCNAEEditEmpresa"
          />

          <Input
            className="InputCadastro"
            value={CEP}
            name="CepEditEmpresa"
            label="CEP"
            onChange={(e) => SetCEP(e.target.value)}
            maxLength={8}
            minLength={8}
            required
            onBlur={(e) => buscarCep(e.target.value)}
            id="CepEditEmpresa"
          />

          <Input
            id="rua"
            className="InputCadastro"
            value={Logradouro}
            name="Logradouro"
            label="Logradouro"
            onChange={(e) => SetLogradouro(e.target.value)}
            required
          />

          <Input
            className="InputCadastro"
            value={Complemento}
            name="ComplementoEditEmpresa"
            label="Complemento"
            onChange={(e) => SetComplemento(e.target.value)}
            id="ComplementoEditEmpresa"
          />

          <div className="Input">
            <label>Cidade:</label>
            <br />
            <input
              type="text"
              className="InputCadastro"
              id="cidade"
              value={Cidade}
              required
              disabled
            />
          </div>

          <div className="Input">
            <label>UF:</label>
            <br />
            <input
              type="text"
              className="InputCadastro"
              id="uf"
              value={Estado}
              required
              disabled
            />
          </div>

          <div className="btEditarEstagioDiv">
            <button className="btVaga" onClick={EditarDadosDaEmpresa}>
              <h3>Editar</h3>
            </button>
          </div>
        </form>
      </div>

      <div
        id="peliculaAlterarSenhaEmpresa"
        className="peliculaAlterarSenhaEmpresa none"
        onClick={btn_fecharAlterarSenhaEmpresa}
      ></div>
      <div
        id="modalAlterarSenhaEmpresa"
        className="modalAlterarSenhaEmpresa none"
      >
        <h2>Alterar senha</h2>
        <form>
          <Input
            id="SenhaatualEditEmpresa"
            className="InputCadastro"
            name="SenhaatualEditEmpresa"
            label="Senha atual"
            onChange={(e) => setSenha(e.target.value)}
            maxLength={15}
            minLength={9}
            type="password"
            required
          />

          <Input
            id="NovaSenhaEmpresa"
            className="InputCadastro"
            name="NovaSenhaEmpresa"
            label="Nova senha"
            onChange={(e) => SetNovaSenha(e.target.value)}
            maxLength={15}
            minLength={9}
            type="password"
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
