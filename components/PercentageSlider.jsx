import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import React, { useState } from "react";

const PercentageSlider = () => {
  const [tipPercentage, setTipPercentage] = useState(0.15);
  return (
    <View>
      <Text>{Math.ceil(tipPercentage*100)}</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={.01}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        step={.01}
        value={tipPercentage}
        onValueChange={setTipPercentage}
        label={tipPercentage}
      />
      <Text>Tip</Text>
    </View>
  );
};

export default PercentageSlider;
