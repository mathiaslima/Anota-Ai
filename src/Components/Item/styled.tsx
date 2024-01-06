import { styled } from "styled-components/native";
import { colors } from "../../Styles/theme";

interface inputProps {
  checked: boolean;
}

export const Input = styled.TextInput<inputProps>`
  flex: 1;
  padding: 10px;
  font-size: 20px;
  color: ${({ checked }) =>
    checked ? colors.grayLightest80 : colors.grayLightest};
`;
