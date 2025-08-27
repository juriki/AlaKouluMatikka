import React, { useRef } from "react";
import { TextInput, StyleSheet, Animated } from "react-native";

export default function ShakeInput({ value, setValue, error }) {
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  const triggerShake = () => {
    shakeAnimation.setValue(0);
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 6,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -6,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  if (error) triggerShake();

  const inputStyle = error ? styles.inputError : styles.input;

  return (
    <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
      <TextInput
        style={inputStyle}
        keyboardType="numeric"
        value={value}
        onChangeText={setValue}
        maxLength={3}
        autoFocus
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
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
});
