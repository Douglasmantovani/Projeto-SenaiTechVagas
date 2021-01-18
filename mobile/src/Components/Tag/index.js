import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Tag(props) {
  return (
    <View style={styles.Tag}>
      <Text style={styles.h5}>{props.NomeTag}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Tag: {
    backgroundColor: "#F3F3F3",
    margin: 10,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  h5: {
    fontSize: 13,
  },
});
