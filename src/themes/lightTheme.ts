import { createTheme } from "@mui/material/styles";
import commonThemeProperties from "./commonProperties";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#d9e1e1",
      paper: "#ffffff",
    },
    text: {
      primary: "#16151c",
      secondary: "#a2a1a8",
    },
    primary: {
      main: "#7152f3",
    },
    secondary: {
      main: "#a3d139",
    },
  },
  ...commonThemeProperties,
});
