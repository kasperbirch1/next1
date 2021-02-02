import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0070f3",
    },
    secondary: {
      main: "#00FF00",
    },
  },
  typography: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    h1: {
      fontSize: "3rem",
      marginBottom: "1.5rem",
    },
    subtitle1: {
      marginBottom: ".75rem",
    },
    body1: {
      marginBottom: "1rem",
    },
  },
});
