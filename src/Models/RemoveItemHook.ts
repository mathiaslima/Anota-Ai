export interface RemoveItemHook {
  loading: boolean;
  itemToRemoveId: string | null;
  isRemoveModalVisible: boolean;
  showRemoveModal: (id: string) => void;
  hideRemoveModal: () => void;
  onConfirmRemove: () => void;
}