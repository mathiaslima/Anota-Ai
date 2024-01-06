// component list of items

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../Styles/theme";
import { Item } from "../Item";
import { ItemProps } from "../../Pages/HomeScreen";

interface ListProps {
  items: ItemProps[];
  onPress: (index: number) => void;
  onChange: (text: string, index: number) => void;
  addItem: () => void;
  removeItem: (id: string, list: ItemProps[]) => void;
}

export function List({
  items,
  onPress,
  onChange,
  addItem,
  removeItem,
}: ListProps) {
  // if not have items checked, return true
  const notHaveChecked = items.filter((item) => item.checked).length === 0;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={addItem} style={styles.button}>
        <Text style={styles.textButton}>Adicionar item</Text>
      </TouchableOpacity>
      {items.map(({ text, checked, id }, index) => {
        if (!checked)
          return (
            <Item
              key={index}
              text={text}
              checked={checked}
              onChange={(text) => onChange(text, index)}
              onPress={() => onPress(index)}
              addItem={addItem}
              id={id}
              removeItem={() => removeItem(id, items)}
            />
          );
      })}

      {!notHaveChecked && <Text style={styles.text}>Marcados</Text>}

      {items.map(({ text, checked, id }, index) => {
        if (checked)
          return (
            <Item
              key={index}
              text={text}
              checked={checked}
              onChange={(text) => onChange(text, index)}
              onPress={() => onPress(index)}
              addItem={addItem}
              id={id}
              removeItem={() => removeItem(id, items)}
            />
          );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  textButton: {
    color: colors.grayLightest,
    fontSize: 18,
  },
  text: {
    color: colors.grayLightest80,
    fontSize: 18,
    marginTop: 20,
  },
});
