import React from "react";
import { View, Text, StatusBar } from "react-native";

import styles from "./style";

export default function Splash({ navigation }) {
  setTimeout(() => navigation.navigate("Login"), 3000);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4f6d7a" barStyle="light-content" />
      <Text style={styles.texto}>SENAI | TechVagas</Text>
    </View>
  );
}
