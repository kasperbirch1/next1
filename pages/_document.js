import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="da">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            defer
            type="text/javascript"
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCg1FoFelKpnmBn_sx2GUZtA-SI6HCPMiU&libraries=places"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
