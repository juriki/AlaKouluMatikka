import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Valitse taso</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Game", { difficulty: 1 })}>
        <Text style={styles.buttonText}>🧮 1. luokka (1-10, + −)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Game", { difficulty: 2 })}>
        <Text style={styles.buttonText}>🎒 2. luokka (1-20, + − ×)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Game", { difficulty: 3 })}>
        <Text style={styles.buttonText}>📐 3.+ luokka (1-100, kaikki)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fefefe", alignItems: "center", justifyContent: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 30, color: "#333", textAlign: "center" },
  button: { backgroundColor: "#4CAF50", paddingVertical: 12, paddingHorizontal: 16, borderRadius: 10, marginVertical: 10 },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "600", textAlign: "center" },
});
