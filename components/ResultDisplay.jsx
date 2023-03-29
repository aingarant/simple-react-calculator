import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

const ResultDisplay = () => {
  const resultAmount = 123.22;
  return (
    <View>
      <Text style={styles.result}>${resultAmount} / person</Text>
    </View>
  );
};

export default ResultDisplay;

const styles = StyleSheet.create({
  result: {
    backgroundColor: "red",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
  },
});
