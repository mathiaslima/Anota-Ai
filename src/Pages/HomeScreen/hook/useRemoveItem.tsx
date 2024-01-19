import { RemoveItemHook } from '../../../Models/RemoveItemHook';
import { useList } from '../../../Stores/UseList';
import { useState, useCallback } from 'react';

export const useRemoveItem = (): RemoveItemHook => {
  const [itemToRemoveId, setItemToRemoveId] = useState<string | null>(null);
  const [isRemoveModalVisible, setRemoveModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { items, setItems } = useList();

  const showRemoveModal = useCallback((id: string) => {
    setItemToRemoveId(id);
    setRemoveModalVisible(true);
  }, []);

  const hideRemoveModal = useCallback(() => {
    setRemoveModalVisible(false);
  }, []);

  const onConfirmRemove = useCallback(() => {
    setLoading(true);
    const newItems = items.filter((item) => item.id !== itemToRemoveId);
    setItems(newItems);
    setLoading(false);
    hideRemoveModal();
  }, [itemToRemoveId, hideRemoveModal]);

  return { 
    onConfirmRemove, 
    loading, 
    showRemoveModal, 
    hideRemoveModal, 
    itemToRemoveId, 
    isRemoveModalVisible 
  };
};