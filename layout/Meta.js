import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/swiper/css/swiper.min.css"
      ></link>
      <link rel="icon" href="/favicon.ico" />
      <title>{`PB Låsesmed ${title}`}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "",
  keywords: "Låsesmed Låseservice",
  description: "BILLIG LÅSESMED | Låseservice døgnvagt",
};

export default Meta;
