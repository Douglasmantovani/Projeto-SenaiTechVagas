import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import AccessBar from "../../Components/AccessBar";
import AccessMenu from "../../Components/AccessMenu";
import Input from "../../Components/Input/index";

import imgDelete from "../../assets/delete.webp";
import imgBan from "../../assets/no-stopping (2).png";

import { uri } from "../../services/conexao";

import "./style.css";

export default function PerfilAdm() {
    const [Vagas, setVagas] = useState([]);
    const [Empresas, SetEmpresa] = useState([]);
    const [Candidatos, SetCandidato] = useState([]);
    const [NovaSenha, SetNovaSenha] = useState("");
    const [Email, SetEmail] = useState([]);
    let [Opcao, SetOpcao] = useState("");
    const [CaminhoImagem, setCaminho] = useState("");

    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&\*_-])(?=.{9,15})/g;
    const verificacaoSenha = senhaRegex.test(NovaSenha);

    useEffect(() => {
        BuscarImagem();
    }, []);

    let history = useHistory();

  const BuscarImagem = () => {
    fetch(`${uri}/api/Administrador/ImagemPerfilAdm`, {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        setCaminho(dados);
      })
      .catch((err) => console.error(err));
  };

    const Banir = (id) => {
        fetch(`${uri}/api/Administrador/Banir/${id}`, {
            method: "PUT",
            headers: {
                authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((response) => response.json())
            .then((dados) => {
                alert(dados);
                listarEmpresa();
                listarCandidatos();
                listarVagas();
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

    const listarEmpresa = () => {
        fetch(`${uri}/api/Administrador/ListarEmpresas`, {
            method: "GET",
            headers: {
                authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((response) => response.json())
            .then((dados) => {
                SetEmpresa(dados);
            })
            .catch((err) => console.error(err));
    };

    const listarVagas = () => {
        fetch(`${uri}/api/Usuario/ListarTodasAsVagas`, {
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

    const listarCandidatos = () => {
        fetch(`${uri}/api/Administrador/ListarCandidatos`, {
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

    function Listar() {
        if (Opcao === "Candidatos" && Candidatos.length <= 0) {
            listarCandidatos();
            Opcao = "";
        } else if (Opcao === "Empresas" && Empresas.length <= 0) {
            listarEmpresa();
            Opcao = "";
        } else if (Opcao === "Vagas" && Vagas.length <= 0) {
            listarVagas();
            Opcao = "";
        }
    }

    const AlterarSenha = () => {
        const form = {
            email: Email,
            senha: NovaSenha,
        };
        if (verificacaoSenha !== true) {
            alert("A(s) senha(s) não confere(m) com o padrão solicitado");
        } else {
            fetch(`${uri}/api/Administrador/AlterarSenhaDeQualquerUsuario`, {
                method: "PUT",
                body: JSON.stringify(form),
                headers: {
                    "content-type": "application/json",
                    authorization: "Bearer " + localStorage.getItem("token"),
                },
            })
                .then((response) => response.json())
                .then((dados) => {
                    alert(dados);
                })
                .catch((err) => console.error(err));
        }
    };

    function ApareceAlterarSenha() {
        let idEditarPelicula = document.getElementById(
            "peliculaAlterarSenhaUsuario"
        );
        let idModalVaga = document.getElementById("modalAlterarSenhaUsuario");
        if (idEditarPelicula.classList == "peliculaAlterarSenhaUsuario none")
            idEditarPelicula.classList.remove("none");
        idModalVaga.classList.remove("none");
    }

    function btn_fecharAlterarSenha() {
        let idModalVaga = document.getElementById("modalAlterarSenhaUsuario");
        let idEditarPelicula = document.getElementById(
            "peliculaAlterarSenhaUsuario"
        );
        if (idEditarPelicula.classList != "AlterarSenhaUsuario none") {
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
                    <input
                        type="file"
                        id="inputImage"
                        className="none"
                        onChange={(event) => {
                            AtualizarImagem(event);
                        }}
                    />
                    <div className="imgPefilTexto">
                        <label htmlFor="inputImage">
                            <img
                                className="imgperfil"
                                src={`${uri}/imgPerfil/${CaminhoImagem}`}
                                alt="Imagem de perfil"
                                title="Editar"
                                id="filterPerfil"
                            />
                        </label>
                        <h3>Bem-vindo Administrador!</h3>
                        <p>Administrador</p>
                    </div>
                    <div className="BotoesPerfil">
                        <button className="btPerfil" onClick={ApareceAlterarSenha}>
                            Alterar senha
            </button>
                    </div>
                </div>
                <div className="DireitoPerfil">
                    <br />
                    <div className="RowPerfilAdm">
                        <select
                            className="selectPerfil"
                            onChange={(e) => SetOpcao(e.target.value)}
                            onClick={Listar}
                            value={Opcao}
                        >
                            <option>Filtre sua busca por...</option>
                            <option value="Candidatos">Candidatos</option>
                            <option value="Empresas">Empresa</option>
                            <option value="Vagas">Vagas</option>
                        </select>
                    </div>
                    {View()}
                </div>
            </div>
            <div
                id="peliculaAlterarSenhaUsuario"
                className="peliculaAlterarSenhaUsuario none"
                onClick={btn_fecharAlterarSenha}
            ></div>
            <div
                id="modalAlterarSenhaUsuario"
                className="modalAlterarSenhaUsuario none"
            >
                <h2>Alterar senha de qualquer usuario</h2>
                <form>
                    <Input
                        id="EmailTrocar"
                        className="InputCadastro"
                        name="EmailTrocar"
                        label="Email"
                        onChange={(e) => SetEmail(e.target.value)}
                        maxLength={254}
                        minLength={5}
                        required
                    />
                    <Input
                        id="NovaSenhaTrocar"
                        className="InputCadastro"
                        name="NovaSenhaTrocar"
                        label="Nova senha"
                        onChange={(e) => SetNovaSenha(e.target.value)}
                        maxLength={15}
                        minLength={9}
                        required
                        type="password"
                    />
                    <button className="btVaga" onClick={AlterarSenha}>
                        Alterar senha
          </button>
                </form>
            </div>
            <Footer />
        </div>
    );

    function View() {
        if (Opcao === "Candidatos") {
            return (
                <div>
                    {Candidatos.map((item) => {
                        return (
                            <div key={item.idCandidato} className="BoxPerfil">
                                <div className="flexBoxPerfil">
                                    <img
                                        className="imgUsuario"
                                        src={`${uri}/imgPerfil/${item.idUsuarioNavigation.caminhoImagem}`}
                                        alt="Imagem de perfil do usuario"
                                    />
                                    <div className="ColumnNomeEmail">
                                        <h2>{item.nomeCompleto}</h2>
                                        <p>{item.idUsuarioNavigation.email}</p>
                                    </div>
                                </div>
                                <div className="ColumnPerfilBanir">
                                    <img
                                        className="Delete"
                                        src={imgBan}
                                        onClick={() => Banir(item.idUsuario)}
                                        alt="Botão que bloqueia o acesso do usuario do site"
                                        title="Banir"
                                    />
                                    <button
                                        className="btVerPerfil"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            localStorage.setItem(
                                                "CandidatoSelecionado",
                                                item.idUsuario
                                            );
                                            history.push("PerfilCandidatoAdm");
                                        }}
                                    >
                                        <h4>Ver perfil</h4>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        } else if (Opcao === "Empresas") {
            return (
                <div>
                    {Empresas.map((item) => {
                        return (
                            <div key={item.idEmpresa} className="BoxPerfil">
                                <div className="flexBoxPerfil">
                                    <img
                                        className="imgUsuario"
                                        src={`${uri}/imgPerfil/${item.idUsuarioNavigation.caminhoImagem}`}
                                        alt="Iamgem de perfil do usuario"
                                    />
                                    <div className="ColumnNomeEmail">
                                        <h2>{item.razaoSocial}</h2>
                                        <p>{item.emailContato}</p>
                                    </div>
                                </div>
                                <div className="ColumnPerfilBanir">
                                    <img
                                        className="Delete"
                                        onClick={() => Banir(item.idUsuario)}
                                        src={imgBan}
                                        alt="Botão que bloqueia o acesso do usuario do site"
                                        title="Banir"
                                    />
                                    <button
                                        className="btVerPerfil"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            localStorage.setItem(
                                                "IdEmpresaSelecionada",
                                                item.idUsuario
                                            );
                                            history.push("/PerfilEmpresaAdm");
                                        }}
                                    >
                                        <h4>Ver perfil</h4>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        } else if (Opcao === "Vagas") {
            return (
                <div>
                    {Vagas.map((item) => {
                        return (
                            <div key={item.idEmpresa} className="BoxPerfil">
                                <div className="flexBoxPerfil">
                                    <img
                                        className="imgUsuario"
                                        src={`${uri}/imgPerfil/${item.idEmpresaNavigation.idUsuarioNavigation.caminhoImagem}`}
                                        alt="Imagem de perfil do usuario"
                                    />
                                    <div className="ColumnNomeEmail">
                                        <h2>{item.tituloVaga}</h2>
                                        <p>{item.idAreaNavigation.nomeArea}</p>
                                    </div>
                                </div>
                                <div className="ColumnPerfilBanir">
                                    <img
                                        className="Delete"
                                        src={imgDelete}
                                        onClick={() => DeletarVaga(item.idVaga)}
                                        alt="Botão que bloqueia o acesso do usuario do site"
                                        title="Deletar Vaga"
                                    />
                                    <button
                                        className="btVerPerfil"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            localStorage.setItem("idVagaSelecionadaAdm", item.idVaga);
                                            history.push("/VizualizarVagaAdmin");
                                        }}
                                    >
                                        <h4>Ver vaga</h4>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        }
    }
}
