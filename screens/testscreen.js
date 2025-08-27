import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const Testscreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Привет, мир!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Testscreen;
