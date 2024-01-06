import { create } from "zustand";
import { UseSuggestionProps } from "./types";

export const UseSuggestion = create<UseSuggestionProps>()((set) => ({
  focus: false,
  setFocus: (param) => set({ focus: param }),
}));
