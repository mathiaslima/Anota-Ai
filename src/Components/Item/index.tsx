// component of item list with checkbox and text

import React, { useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../Styles/theme";
import { CheckBox } from "../CheckBox";
import { FontAwesome } from "@expo/vector-icons";
import { Input } from "./styled";
import Suggestion from "../Suggestion";

interface ItemProps {
  text: string;
  checked: boolean;
  onPress: () => void;
  onChange: (_text: any) => void;
  addItem: () => void;
  removeItem: () => void;
  id: string;
}

export function Item({
  text,
  checked,
  onPress,
  onChange,
  addItem,
  removeItem,
  id,
}: ItemProps) {
  const [focus, setFocus] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CheckBox checked={checked} onPress={onPress} />
        <Input
          key={id}
          id={id}
          checked={checked}
          autoComplete="gender"
          placeholder="Digite..."
          placeholderTextColor={colors.grayLightest80}
          value={text}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChangeText={(e) => onChange(e)}
          onSubmitEditing={() => {
            addItem();
          }}
          onKeyPress={(e) => {
            if (e.nativeEvent.key === "Backspace" && text === "") {
              removeItem();
            }
          }}
        />

        <TouchableOpacity onPress={removeItem} style={styles.button}>
          <FontAwesome name="close" size={24} color={colors.grayLightest80} />
        </TouchableOpacity>
      </View>
      {focus && <Suggestion value={text} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 5,
    position: "relative",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  textButton: {
    color: colors.grayLightest,
    fontSize: 18,
  },
});
