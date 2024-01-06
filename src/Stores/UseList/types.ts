import { ItemProps } from "../../Pages/HomeScreen";


interface DataProps {
  items: ItemProps[];
}

export interface UseListProps extends DataProps {
  clean: () => void;
  setItems: (param: ItemProps[]) => void;
}
