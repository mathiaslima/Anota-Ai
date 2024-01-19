import React, { useCallback, useEffect, useState } from "react";
import { KeyboardAvoidingView, Text } from "react-native";
import { PageView } from "../../Components/PageView";
import { List } from "../../Components/List";
import { generateId, normalizeString } from "../../Functions/basics";
import { useList } from "../../Stores/UseList";
import { useRemoveItem } from "./hook/useRemoveItem";
import { ConfirmationModal } from "../../Components/ConfirmationModal";

export interface ItemProps {
  text: string;
  checked: boolean;
  id: string;
}

export function HomeScreen() {
  const { items, setItems } = useList();
  const [loading, setLoading] = useState(false);

  const { 
    onConfirmRemove, 
    showRemoveModal, 
    hideRemoveModal, 
    isRemoveModalVisible 
  } = useRemoveItem();

  const addItem = useCallback(() => {
    setLoading(true);

    if (items[0]?.text === "") {
      setLoading(false);
      return;
    }
    const newItems = [
      {
        text: "",
        checked: false,
        id: generateId(),
      },
      ...items,
    ];

    // remove duplicate
    const unique = newItems.filter(
      (item, index, self) =>
        index ===
        self.findIndex(
          (t) => normalizeString(t.text) === normalizeString(item.text)
        )
    );

    setItems(unique);
    setLoading(false);
  }, [items, loading]);

  const onChange = useCallback(
    (text: string, index: number) => {
      const newItems = [...items];
      newItems[index].text = text;
      // not add if text exist in list
      setItems(newItems);
    },
    [items]
  );

  const onRemove = useCallback(
    (id: string, list: ItemProps[]) => {
      setLoading(true);
      const newItems = list.filter((item) => item.id !== id);
      setItems(newItems);
      setLoading(false);
    },
    [items, loading]
  );

  const onPress = useCallback(
    (index: number) => {
      const newItems = [...items];
      if (newItems[index].text === "") return;
      newItems[index].checked = !newItems[index].checked;
      setItems(newItems);
    },
    [items]
  );

  return (
    <>
      <PageView>
        {loading && <Text>Carregando...</Text>}
        {!loading && (
          <List
            items={items}
            onChange={onChange}
            addItem={addItem}
            removeItem={showRemoveModal}
            onPress={onPress}
          />
        )}
      </PageView>
      <ConfirmationModal
        isVisible={isRemoveModalVisible}
        onCancel={hideRemoveModal}
        onConfirm={onConfirmRemove}
      />
    </>
  );
}
