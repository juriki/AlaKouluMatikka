import React from "react";
import Тestscreen from "./testscreen";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

export default function StartScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/bg.png")} // путь к картинке
      style={styles.background}
      resizeMode="cover"
      blurRadius={5}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Valitse taso</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Game", { difficulty: 1 })}
        >
          <Text style={styles.buttonText}>🧮 1. luokka (1-10, + −)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Game", { difficulty: 2 })}
        >
          <Text style={styles.buttonText}>🎒 2. luokka (1-20, + − ×)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Game", { difficulty: 3 })}
        >
          <Text style={styles.buttonText}>📐 3.+ luokka (1-100, kaikki)</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.3)", // слегка затемняет фон
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
