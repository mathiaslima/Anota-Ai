import { Dimensions } from "react-native";

// recomended colors palleta dark
export const colors = {
  primary: "#1E1E1E",
  secondary: "#2E2E2E",
  tertiary: "#3E3E3E",
  quaternary: "#4E4E4E",
  quinary: "#5E5E5E",

  white: "#FFFFFF",
  black: "#000000",
  gray: "#7D7D7D",
  grayLight: "#BDBDBD",
  grayLighter: "#E0E0E0",
  grayLightest: "#F2F2F2",
  grayLightest80: "#F2F2F280",
};

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const baseWidth = 360;
const baseHeight = 800;

const scaleWidth = SCREEN_WIDTH / baseWidth;
const scaleHeight = SCREEN_HEIGHT / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);

export const scaledSize = (size: number) => Math.ceil(size * scale);

export const fonts = {
  xSmallFontSize: scaledSize(8),
  smallFontSize: scaledSize(10),
  mediumSmallFontSize: scaledSize(12),
  mediumFontSize: scaledSize(13),
  mediumLargeFontSize: scaledSize(14),
  largeFontSize: scaledSize(16),
  xLargeFontSize: scaledSize(20),
};

const theme = {
  colors,
  fonts,
  padding: {
    small: scaledSize(8),
    medium: scaledSize(16),
    large: scaledSize(24),
    xlarge: scaledSize(32),
  },
};

export default theme;
