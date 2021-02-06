import asyncComponent from "../../components/asyncComponent";
// import GoogleMaps from "../../components/GoogleMapsPlaces";
import Meta from "../../layout/Meta";

const AsyncFrontPage = asyncComponent(() =>
  import("../../components/GoogleMapsPlaces")
);

const index = () => {
  return (
    <>
      <Meta title="| Bestil Låsesmed" />
      <h1>Bestil en låsesmed</h1>

      <AsyncFrontPage />
    </>
  );
};

export default index;
