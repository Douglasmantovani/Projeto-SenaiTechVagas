import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import InfoVaga from "../../Components/InfoVaga/index";
import Tag from "../../Components/Tag/index";

import styles from "./style";

import { uriConexaoApi } from "../../services/conexao";

export default function VagaCompleta({ navigation }) {
  const [Experiencia, setExperiencia] = useState("");
  const [IdVaga, setIdVaga] = useState(0);
  const [TipoContrato, setTipoContrato] = useState("");
  const [Salario, setSalario] = useState("");
  const [DescricaoBeneficio, setDescricaoBeneficio] = useState("");
  const [DescricaoEmpresa, setDescricaoEmpresa] = useState("");
  const [DescricaoVaga, setDescricaoVaga] = useState("");
  const [Tecnologias, setTecnologias] = useState([]);
  const [Cidade, setCidade] = useState("");
  const [TituloVaga, setTituloVaga] = useState("");
  const [Area, setArea] = useState("");
  const [RazaoSocial, setRazaoSocial] = useState("");
  const [tipoPresenca, setTipoPresenca] = useState("");
  const [Logradouro, setLogradouro] = useState("");
  const [Complemento, setComplemento] = useState("");
  const [CaminhoImagem, setCaminho] = useState("");

  useEffect(() => {
    listar();
  }, []);

  const listar = async () => {
    fetch(
      `http://${uriConexaoApi}:5000/api/Usuario/BuscarPorId/` +
        (await AsyncStorage.getItem("VagaSelecionadaCandidato")),
      {
        method: "GET",
        headers: {
          authorization: "Bearer " + (await AsyncStorage.getItem("token")),
          "content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((dados) => {
        setIdVaga(dados.idVaga);
        setArea(dados.nomeArea);
        setTipoPresenca(dados.tipoPresenca);
        setRazaoSocial(dados.razaoSocial);
        setTituloVaga(dados.tituloVaga);
        setLogradouro(dados.logradouro);
        setTipoContrato(dados.tipoContrato);
        setSalario(dados.salario);
        setTecnologias(dados.tecnologias);
        setComplemento(dados.complemento);
        setCidade(dados.localidade);
        setExperiencia(dados.experiencia);
        setDescricaoBeneficio(dados.descricaoBeneficio);
        setDescricaoEmpresa(dados.descricaoEmpresa);
        setDescricaoVaga(dados.descricaoVaga);
        setCaminho(dados.caminhoImagem);
      })
      .catch((err) => console.error(err));
  };

  const SeCandidatar = async () => {
    const form = {
      idVaga: IdVaga,
    };
    fetch(`http://${uriConexaoApi}:5000/api/Candidato/AdicionarInscricao`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        authorization: "Bearer " + (await AsyncStorage.getItem("token")),
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        Alert.alert(dados);
        navigation.navigate("Inscricoes");
      })
      .catch((err) => console.error(err));
  };

  return (
    <ScrollView>
      <View>
        <View>
          <ImageBackground
            source={require("../../assets/Images/bannerVisualizarVaga.webp")}
            style={styles.BannerVizualizarVagaEmpresa}
          >
            <View style={styles.TextoHeader}>
              <Text style={styles.Title}>{TituloVaga}</Text>
              {Tecnologias.map((item) => {
                return <Tag NomeTag={item} />;
              })}
            </View>
          </ImageBackground>
        </View>
        <View style={styles.Vaga}>
          <View style={styles.VagaCompleta}>
            <Image
              style={styles.ImagemEmpresa}
              source={{
                uri: `http://${uriConexaoApi}:5000/imgPerfil/${CaminhoImagem}`
              }}
            />
            <View style={styles.MainVaga}>
              <View style={styles.InfoVagas}>
                <InfoVaga
                  NomeProp={RazaoSocial}
                  nomeImage={require("../../assets/Images/building.webp")}
                ></InfoVaga>
                <InfoVaga
                  NomeProp={Cidade}
                  nomeImage={require("../../assets/Images/big-map-placeholder-outlined-symbol-of-interface.webp")}
                ></InfoVaga>
                <InfoVaga
                  NomeProp={Experiencia}
                  nomeImage={require("../../assets/Images/rocket-launch.webp")}
                ></InfoVaga>
                <InfoVaga
                  NomeProp={TipoContrato}
                  nomeImage={require("../../assets/Images/gears.webp")}
                ></InfoVaga>
                <InfoVaga
                  NomeProp={Salario}
                  nomeImage={require("../../assets/Images/money (1).webp")}
                ></InfoVaga>
                <InfoVaga
                  NomeProp={tipoPresenca}
                  nomeImage={require("../../assets/Images/global.png")}
                ></InfoVaga>
                <InfoVaga
                  NomeProp={Area}
                  nomeImage={require("../../assets/Images/web-programming.webp")}
                ></InfoVaga>
              </View>
            </View>
          </View>
        </View>
        <View styles={styles.Descricoes}>
          <View style={styles.BoxDescricaoEmpresa}>
            <Text style={styles.TituloDescricao}>Descrição empresa</Text>
            <Text style={styles.Descricao}>{DescricaoEmpresa}</Text>
          </View>

          <View style={styles.BoxRequisitosVaga}>
            <Text style={styles.TituloDescricao}>Requisitos da vaga</Text>
            <Text style={styles.Descricao}>{DescricaoVaga}</Text>
          </View>

          <View style={styles.BoxDescricaoBeneficio}>
            <Text style={styles.TituloDescricao}>Descrição dos beneficios</Text>
            <Text style={styles.Descricao}>{DescricaoBeneficio}</Text>
          </View>
        </View>
        <View style={styles.Encolher}>
          <View styles={styles.btSeCandidatar}>
            <TouchableOpacity
              style={styles.btCandidatar}
              onPress={() => SeCandidatar()}
            >
              <Text style={styles.textBtn}>Se candidatar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
