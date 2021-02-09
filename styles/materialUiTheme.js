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
      fontSize: "2.5rem",
      marginBottom: ".5rem",
      fontWeight: "500",
    },
    h2: {
      fontSize: "2rem",
      marginBottom: ".75rem",
    },
    subtitle1: {
      marginBottom: ".75rem",
    },
    body1: {
      marginBottom: "1rem",
    },
  },
});
