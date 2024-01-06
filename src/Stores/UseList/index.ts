import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UseListProps } from "./types";

export const useList = create<UseListProps>()(
  persist(
    (set) => ({
      items: [
        {
          id: "1",
          text: "Leite",
          checked: false,
        },
      ],
      clean: () => set({ items: [] }),
      setItems: (param) => set({ items: param }),
    }),
    {
      name: "list-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
