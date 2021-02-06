import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{`PB Låsesmed ${title}`}</title>
      <script
        defer
        type="text/javascript"
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCg1FoFelKpnmBn_sx2GUZtA-SI6HCPMiU&libraries=places"
      ></script>
    </Head>
  );
};

Meta.defaultProps = {
  title: "",
  keywords: "Låsesmed Låseservice",
  description: "BILLIG LÅSESMED | Låseservice døgnvagt",
};

export default Meta;
