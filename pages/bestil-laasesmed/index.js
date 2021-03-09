import Meta from "../../components/layout/Meta";
import dynamic from "next/dynamic";

const DynamicGoogleMaps = dynamic(
  () => import("../../components/GoogleMapsPlaces"),
  { ssr: false }
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
