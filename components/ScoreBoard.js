import React from "react";
import { Text, StyleSheet } from "react-native";

export default function ScoreBoard({ oikein, vaarin }) {
  return <Text style={styles.score}>👍 Oikein: {oikein}    👎 Väärin: {vaarin}</Text>;
}

const styles = StyleSheet.create({
  score: {
    fontSize: 20,
    marginTop: 20,
    color: "#555",
  },
});
