import React from "react";
import { Container } from "./styles";

export function PageView({ children }: React.PropsWithChildren<{}>) {
  return <Container>{children}</Container>;
}
