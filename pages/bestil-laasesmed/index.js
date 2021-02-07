import Meta from "../../layout/Meta";
import dynamic from "next/dynamic";

const DynamicGoogleMaps = dynamic(() =>
  import("../../components/GoogleMapsPlaces")
);

const index = () => {
  return (
    <>
      <Meta title="| Bestil Låsesmed" />
      <h1>Bestil en låsesmed</h1>
      <DynamicGoogleMaps />
    </>
  );
};

export default index;
