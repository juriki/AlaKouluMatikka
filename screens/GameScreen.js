import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from "react-native";

export default function GameScreen({ route, navigation }) {
  const { difficulty } = route.params;

  const [randomNumber1, setRandomNumber1] = useState(0);
  const [randomNumber2, setRandomNumber2] = useState(0);
  const [randomOperator, setRandomOperator] = useState(0);
  const [operator, setOperator] = useState("+");
  const [textValue, setTextValue] = useState("");
  const [error, setError] = useState(false);
  const [oikein, setOikein] = useState(0);
  const [vaarin, setVaarin] = useState(0);

  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const triggerShake = () => {
    shakeAnimation.setValue(0);
    Animated.sequence([
      Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 6, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: -6, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
  };

  // Генерация примера при загрузке и при смене сложности
  useEffect(() => {
    generateRandomNumber();
  }, [difficulty]);

  const generateRandomNumber = () => {
    let availableOperators = [1];
    let maxNumber = 10;

    if (difficulty === 1) {
      availableOperators = [1, 2];
      maxNumber = 10;
    } else if (difficulty === 2) {
      availableOperators = [1, 2, 3];
      maxNumber = 20;
    } else if (difficulty === 3) {
      availableOperators = [1, 2, 3, 4];
      maxNumber = 50;
    }

    const rOperator = availableOperators[Math.floor(Math.random() * availableOperators.length)];
    let number1 = Math.floor(Math.random() * maxNumber) + 1;
    let number2 = Math.floor(Math.random() * maxNumber) + 1;

    if (rOperator === 2) {
      setOperator("-");
      if (number1 < number2) [number1, number2] = [number2, number1];
    } else if (rOperator === 3) {
      setOperator("x");
    } else if (rOperator === 4) {
      setOperator(":");
      if (number2 === 0) number2 = 1;
      number1 = number1 * number2;
    } else {
      setOperator("+");
    }

    setRandomNumber1(number1);
    setRandomNumber2(number2);
    setRandomOperator(rOperator);
    setTextValue("");
    setError(false);
  };

  const checkAnswer = () => {
    const answer = parseInt(textValue);
    let correct = false;

    if (randomOperator === 1) correct = randomNumber1 + randomNumber2 === answer;
    else if (randomOperator === 2) correct = randomNumber1 - randomNumber2 === answer;
    else if (randomOperator === 3) correct = randomNumber1 * randomNumber2 === answer;
    else if (randomOperator === 4) correct = randomNumber1 / randomNumber2 === answer;

    if (correct) {
      setOikein(oikein + 1);
      setError(false);
      generateRandomNumber();
    } else {
      setVaarin(vaarin + 1);
      setError(true);
      triggerShake();
    }
    setTextValue("");
  };

  const inputStyle = error ? styles.inputError : styles.input;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Laske seuraava</Text>
      <View style={styles.taskRow}>
        <Text style={styles.number}>{randomNumber1}</Text>
        <Text style={styles.operator}>{operator}</Text>
        <Text style={styles.number}>{randomNumber2}</Text>
        <Text style={styles.operator}>=</Text>
        <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
          <TextInput
            style={inputStyle}
            keyboardType="numeric"
            value={textValue}
            onChangeText={setTextValue}
            maxLength={3}
            autoFocus
          />
        </Animated.View>
      </View>

      <TouchableOpacity style={styles.button} onPress={checkAnswer}>
        <Text style={styles.buttonText}>Tarkista vastaus</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => {
          generateRandomNumber();
          setError(false);
          setTextValue("");
        }}
      >
        <Text style={styles.buttonText}>Uusi tehtävä</Text>
      </TouchableOpacity>


      <Text style={styles.score}>👍 Oikein: {oikein}    👎 Väärin: {vaarin}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
    textAlign: "center",
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  number: {
    fontSize: 30,
    marginHorizontal: 5,
    color: "#333",
  },
  operator: {
    fontSize: 30,
    marginHorizontal: 5,
    color: "#888",
  },
  input: {
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 8,
    width: 70,
    padding: 8,
    fontSize: 24,
    textAlign: "center",
    backgroundColor: "#90EE90",
  },
  inputError: {
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 8,
    width: 70,
    padding: 8,
    fontSize: 24,
    textAlign: "center",
    backgroundColor: "lightcoral",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonSecondary: {
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonBack: {
    backgroundColor: "#888",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  score: {
    fontSize: 20,
    marginTop: 20,
    color: "#555",
  },
});
