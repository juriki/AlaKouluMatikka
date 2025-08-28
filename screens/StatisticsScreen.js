import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function StatisticsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suoritukset</Text>
      <Text style={styles.text}>Sinun Suoritukset 😊</Text>

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
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 32, fontWeight: "bold", marginBottom: 20 },
  text: { fontSize: 18, marginBottom: 30 },
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "600" },
});
