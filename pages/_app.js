import Layout from "../layout/Layout";
import "../styles/globals.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../styles/materialUiTheme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
