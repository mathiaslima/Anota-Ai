interface DataProps {
  focus: boolean;
}

export interface UseSuggestionProps extends DataProps {
  setFocus: (param: boolean) => void;
}
