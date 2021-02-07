import Meta from "../../layout/Meta";
import Head from "next/head";
import dynamic from "next/dynamic";

const DynamicGoogleMaps = dynamic(() =>
  import("../../components/GoogleMapsPlaces")
);

const index = () => {
  return (
    <>
      <Meta title="| Bestil Låsesmed" />
      <Head>
        <script
          defer
          type="text/javascript"
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCg1FoFelKpnmBn_sx2GUZtA-SI6HCPMiU&libraries=places"
        ></script>
      </Head>
      <h1>Bestil en låsesmed</h1>
      <DynamicGoogleMaps />
    </>
  );
};

export default index;
