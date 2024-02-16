import { teal, red } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = extendTheme({
  trelloCustom: {
    appBarHeight: "68px",
    boardBarHeight: "78px",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
      },
    },
    dark: {
      palette: {
        primary: red,
      },
    },
  },
  // ...other properties
});

export default theme;
