import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function StatisticsScreen({ navigation, route }) {
  // Получаем данные из навигации (если пришли)
  const { oikein = 0, vaarin = 0, totalTime = 0 } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suoritukset</Text>
      <Text style={styles.text}>Sinun Suoritukset 😊</Text>

      <View style={styles.statsBox}>
        <Text style={styles.statsText}>👍 Oikein: {oikein}</Text>
        <Text style={styles.statsText}>👎 Väärin: {vaarin}</Text>
        <Text style={styles.statsText}>
          ⏱️ Kokonaisaika: {totalTime.toFixed(2)} sek
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Päävalikko</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 32, fontWeight: "bold", marginBottom: 20 },
  text: { fontSize: 18, marginBottom: 30 },
  statsBox: {
    width: "80%",
    padding: 20,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    marginBottom: 30,
    alignItems: "center",
  },
  statsText: { fontSize: 20, marginVertical: 5 },
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "600" },
});
