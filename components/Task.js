import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Task({ number1, operator, number2 }) {
  return (
    <View style={styles.taskRow}>
      <Text style={styles.number}>{number1}</Text>
      <Text style={styles.operator}>{operator}</Text>
      <Text style={styles.number}>{number2}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  number: {
    fontSize: 40,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  operator: {
    fontSize: 40,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});
