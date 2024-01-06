import "styled-components";
import theme from "./theme";

export type Ttheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Ttheme {}
}
