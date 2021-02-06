import asyncComponent from "../../components/asyncComponent";
// import GoogleMaps from "../../components/GoogleMapsPlaces";
import Meta from "../../layout/Meta";
import Head from "next/head";

const AsyncGoogleMaps = asyncComponent(() =>
  import("../../components/GoogleMapsPlaces")
);

const index = () => {
  return (
    <>
      <Meta title="| Bestil Låsesmed" />
      <Head>
        <script
          type="text/javascript"
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCg1FoFelKpnmBn_sx2GUZtA-SI6HCPMiU&libraries=places"
        ></script>
      </Head>
      <h1>Bestil en låsesmed</h1>
      <AsyncGoogleMaps />
    </>
  );
};

export default index;
