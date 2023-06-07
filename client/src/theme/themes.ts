import { createTheme } from "@mui/material/styles";
import { lightThemeColors } from "./utils/themeColors";

const {
  primaryOrange,
  primaryWhite,
  secondaryOrange,
  secondaryGray,
  darkThemeDarkBrown,
  lightOrange
} = lightThemeColors

const componentThemes = {
  //Add component themes here
}


export const lightTheme = createTheme({
  components: componentThemes,
  palette: {
    primary: {
      main: primaryOrange, // '#d26b38',
    },
    secondary: {
      main: primaryWhite, // '#f5f5f5',
    },
    text: {
      primary: secondaryOrange, // '#cd7244',
      secondary: secondaryGray // '#7f7f7f',
    },
    background: {
      default: primaryWhite, // '#c5bab5',
      paper: lightOrange // '#362f2d',
    },
  },
  typography: {
    fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    // Optionally, you can customize the font family for monospace elements like code blocks
    // fontFamily: '"Source Code Pro", source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
  },
});