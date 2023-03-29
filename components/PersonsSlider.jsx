import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import React, {useState} from "react";

const PersonsSlider = () => {
  const [guests, setGuests] = useState(2);
  return (
    <View>
      <Text>{guests}</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={2}
        maximumValue={25}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        step={1}
        value={guests}
        onValueChange={setGuests}
        label={guests}

      />
      <Text>Guests</Text>
    </View>
  );
};

export default PersonsSlider;
