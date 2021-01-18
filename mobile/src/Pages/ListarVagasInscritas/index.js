import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import InfoVaga from "../../Components/InfoVaga/index";
import Tag from "../../Components/Tag/index";

import { uriConexaoApi } from "../../services/conexao";

import styles from "./style";

export default function ListarVagasInscritas() {
  const [ListarVagasInscritas, setListarVagasInscritas] = useState([]);

  useEffect(() => {
    listarVagasInscritas();
  }, []);

  const listarVagasInscritas = async () => {
    fetch(`http://${uriConexaoApi}:5000/api/Candidato/ListarVagasInscritas`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + (await AsyncStorage.getItem("token")),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        setListarVagasInscritas(dados);
      })
      .catch((err) => console.error(err));
  };

  const revogarInscricao = async (idInscricao) => {
    fetch(
      `http://${uriConexaoApi}:5000/api/Candidato/RevogarInscricao/` + idInscricao,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: "Bearer " + (await AsyncStorage.getItem("token")),
        },
      }
    )
      .then((response) => response.json())
      .then((dados) => {
        alert(dados);
        listarVagasInscritas();
      })
      .catch((err) => console.error(err));
  };

  return (
    <ScrollView>
      <View style={styles.Fundo}>
        <View style={styles.teste}>
          <ImageBackground
            source={require("../../assets/Images/bannerVisualizarVaga.webp")}
            style={styles.BannerVizualizarVagaEmpresa}
          >
            <Text style={styles.TextoHeader}>Bem-vindo, candidato</Text>
          </ImageBackground>
        </View>
        <View>
          <Text style={styles.TextoTitulo}>Vagas em que você se inscreveu</Text>
        </View>
        <View style={styles.MainVaga}>
          {ListarVagasInscritas.map((item) => {
            return (
              <View style={styles.Vaga} key={item.idVaga}>
                <View style={styles.VagaCompleta}>
                  <Image
                    style={styles.ImagemEmpresa}
                    source={{
                      uri:
                        `http://${uriConexaoApi}:5000/imgPerfil/${item.caminhoImagem}`
                    }}
                  />
                  <View style={styles.MainVaga}>
                    <Text style={styles.TituloVaga}>{item.tituloVaga}</Text>
                    <View style={styles.InfoVagas}>
                      <InfoVaga
                        NomeProp={item.razaoSocial}
                        nomeImage={require("../../assets/Images/building.webp")}
                      ></InfoVaga>
                      <InfoVaga
                        NomeProp={item.localidade}
                        nomeImage={require("../../assets/Images/big-map-placeholder-outlined-symbol-of-interface.webp")}
                      ></InfoVaga>
                      <InfoVaga
                        NomeProp={item.experiencia}
                        nomeImage={require("../../assets/Images/rocket-launch.webp")}
                      ></InfoVaga>
                      <InfoVaga
                        NomeProp={item.tipoContrato}
                        nomeImage={require("../../assets/Images/gears.webp")}
                      ></InfoVaga>
                      <InfoVaga
                        NomeProp={item.salario}
                        nomeImage={require("../../assets/Images/money (1).webp")}
                      ></InfoVaga>
                      <InfoVaga
                        NomeProp={item.tipoPresenca}
                        nomeImage={require("../../assets/Images/global.png")}
                      ></InfoVaga>
                      <InfoVaga
                        NomeProp={item.nomeArea}
                        nomeImage={require("../../assets/Images/web-programming.webp")}
                      ></InfoVaga>
                    </View>
                    <View style={styles.TecnologiasVaga}>
                      {item.tecnologias.map((subItem) => {
                        return <Tag NomeTag={subItem}></Tag>;
                      })}
                    </View>
                    <TouchableOpacity
                      style={styles.btnRevogar}
                      onPress={() => revogarInscricao(item.idInscricao)}
                    >
                      <Text style={styles.texBtIns}>RevogarInscricao</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
