import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import ShakeInput from "../components/ShakeInput";
import Task from "../components/Task";
import styles from "./GameScreen.styles";

export default function GameScreen({ route }) {
  const { difficulty } = route.params;

  const [randomNumber1, setRandomNumber1] = useState(0);
  const [randomNumber2, setRandomNumber2] = useState(0);
  const [randomOperator, setRandomOperator] = useState(0);
  const [operator, setOperator] = useState("+");
  const [textValue, setTextValue] = useState("");
  const [error, setError] = useState(false);
  const [oikein, setOikein] = useState(0);
  const [vaarin, setVaarin] = useState(0);

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

    const rOperator =
      availableOperators[Math.floor(Math.random() * availableOperators.length)];

    if (rOperator === 3 || rOperator === 4) {
      maxNumber = 10; // ограничение для умножения и деления
    }
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

    if (randomOperator === 1)
      correct = randomNumber1 + randomNumber2 === answer;
    else if (randomOperator === 2)
      correct = randomNumber1 - randomNumber2 === answer;
    else if (randomOperator === 3)
      correct = randomNumber1 * randomNumber2 === answer;
    else if (randomOperator === 4)
      correct = randomNumber1 / randomNumber2 === answer;

    if (correct) {
      setOikein(oikein + 1);
      setError(false);
      generateRandomNumber();
    } else {
      setVaarin(vaarin + 1);
      setError(true);
    }
    setTextValue("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ImageBackground
        source={require("../assets/bg.png")}
        style={styles.background}
        resizeMode="cover"
        blurRadius={8}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Laske seuraava</Text>
          <View style={styles.taskRow}>
            <Task
              number1={randomNumber1}
              operator={operator}
              number2={randomNumber2}
            />
            <ShakeInput
              value={textValue}
              setValue={setTextValue}
              error={error}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={checkAnswer}>
            <Text style={styles.buttonText}>Tarkista vastaus</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => {
              setError(false);
              setTextValue("");
              generateRandomNumber();
            }}
          >
            <Text style={styles.buttonText}>Uusi tehtävä</Text>
          </TouchableOpacity>

          <Text style={styles.score}>
            👍 Oikein: {oikein} 👎 Väärin: {vaarin}
          </Text>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
