import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SuggestionProps } from "./types";
import { useList } from "../../Stores/UseList";
import { ItemProps } from "../../Pages/HomeScreen";
import { generateId, normalizeString } from "../../Functions/basics";

export default function Suggestion({ value }: SuggestionProps) {
  const { items, setItems } = useList();

  const [listSuggestions, setListSuggestions] = useState<ItemProps[]>(
    [] as ItemProps[]
  );

  useEffect(() => {
    // if value is empty, return
    if (value === "") return;
    if (value.length >= 3) {
      const array = [...items];
      array.shift();
      const list = array.filter((item) =>
        normalizeString(item.text).includes(normalizeString(value))
      );
      setListSuggestions(list);
    } else {
      setListSuggestions([] as ItemProps[]);
    }
  }, [value]);

  // add item suggestion in list
  const onPress = ({ text, id, checked }: ItemProps) => {
    // remove value of list
    const filter = items.filter(
      (item) => normalizeString(item.text) !== normalizeString(value)
    );

    const newItems = [
      {
        text: "",
        checked: false,
        id: generateId(),
      },
      {
        text,
        checked: false,
        id: id,
      },
      ...filter,
    ];

    const unique = newItems.filter(
      (item, index, self) =>
        index ===
        self.findIndex(
          (t) => normalizeString(t.text) === normalizeString(item.text)
        )
    );

    setListSuggestions([] as ItemProps[]);
    setItems(unique);
  };

  if (listSuggestions.length === 0) return <></>;

  if (value === "") return <></>;

  return (
    <ScrollView horizontal style={styles.container}>
      {listSuggestions.map((item, index) => (
        <TouchableOpacity
          onPress={() => onPress(item)}
          key={index}
          style={styles.button}
        >
          <Text>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 24,
    marginHorizontal: 5,
  },
  container: {
    flexDirection: "row",
  },
});
