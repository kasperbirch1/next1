import Layout from "../layout/Layout";
import "../styles/globals.css";
import "../styles/swiper.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
