import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  select: {
    width: 250,
    height: 25,
    marginTop: 10,
  },
  teste: {
    backgroundColor: "#DFDFDF",
  },
  imagemCandidato: {
    height: 60,
    width: 60,
    marginTop: 9,
  },
  TextoTitulo: {
    color: "black",
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
  },
  BannerVizualizarVagaEmpresa: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: 300,
    padding: "5%",
  },
  TextoHeader: {
    color: "#fff",
    fontSize: 25,
  },
  Vaga: {
    backgroundColor: "#FAFAFA",
    marginBottom: "20%",
    flexDirection: "column",
    marginBottom: 20,
  },
  VagaCompleta: {
    flexDirection: "row",
    borderRadius: 4,
    padding: "3%",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  MainVaga: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    padding: 15,
  },
  InfoVagas: {
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  TecnologiasVaga: {
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  ImagemEmpresa: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  TituloVaga: {
    fontSize: 17,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",
  },
  nomeCandidato: {
    borderBottomColor: "black",
    borderWidth: 1,
  },
});
