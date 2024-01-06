// compoonent checkbox
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "../../Styles/theme";

interface CheckBoxProps {
  checked: boolean;
  onPress: () => void;
}

export function CheckBox({ checked, onPress }: CheckBoxProps) {
  return (
    <View style={styles.container}>
      {checked && (
        <MaterialIcons
          name="check-box"
          size={30}
          color={colors.grayLightest80}
          onPress={onPress}
        />
      )}
      {!checked && (
        <MaterialIcons
          name="check-box-outline-blank"
          size={30}
          color={colors.grayLightest}
          onPress={onPress}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
