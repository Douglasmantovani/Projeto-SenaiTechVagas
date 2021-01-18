import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  LogBox
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./style";

import { uriConexaoApi } from "../../services/conexao";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  let [Token, setToken] = useState("");
  const [MensagemErro, SetMensagem] = useState("");

  function parseJwt() {
    if (Token.length > 10) {
      var base64Url = Token.split(".")[1];
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      return JSON.parse(window.atob(base64));
    }
  }

  function login() {
    const loginForm = {
      Email: email,
      senha: senha,
    };
    fetch(`http://${uriConexaoApi}:5000/api/Login`, {
      method: "POST",
      body: JSON.stringify(loginForm),
      headers: {
        "content-type": "application/json",
      },
    }).then((response) => response.json())
      .then((dados) => {
        if (dados.token !== undefined) {
          AsyncStorage.setItem("token", dados.token);
          Token = dados.token;
          if (parseJwt().Role === "2") {
            navigation.navigate("ListarVagasInscritas");
          } else if (parseJwt().Role === "3") {
            navigation.navigate("ListarVagaEmpresa");
          }
        } else {
          SetMensagem("Suas credencias não são válidas");
        }
      })
      .catch((err) => {
        console.log(err);
        SetMensagem("Suas credencias não são válidas");
      });
  }

  return (
    <ScrollView>
      <View style={styles.login}>
        <View style={styles.sessaoLogar}>
          <View style={styles.divisionLogar}>
            <View style={styles.divisionLogarTitle}>
              <Text style={styles.divisionLogarTitleText}>login</Text>
              <Text style={styles.subTitulo}>
                Bem-vindo ao SENAI | TechVagas
              </Text>
            </View>

            <View style={styles.formlogar}>
              <View style={styles.divisionCampo}>
                <Text style={styles.divisionCampoText}>Usuário ou E-mail:</Text>
                <TextInput
                  placeholder={"exemplo@exemplo.com"}
                  style={styles.inputUser}
                  onChangeText={(e) => setEmail(e)}
                />
              </View>

              <View
                style={styles.divisionCampo}
                style={styles.divisionPassword}
              >
                <Text style={styles.divisionCampoText}>Senha:</Text>
                <TextInput
                  placeholder={"********"}
                  style={styles.inputPassword}
                  secureTextEntry={true}
                  onChangeText={(e) => setSenha(e)}
                />
              </View>
              <View style={styles.lbErro} nativeID={"lbErro"}>
                <Text style={styles.lbErroText}>{MensagemErro}</Text>
              </View>
              <Text style={styles.recuperarPassword}>Recuperar senha</Text>
            </View>

            <View style={styles.divisionBtn}>
              <TouchableOpacity style={styles.btnLogar} onPress={() => login()}>
                <Text style={styles.textLogin}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
