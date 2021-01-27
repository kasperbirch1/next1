import Meta from "../../layout/Meta";

const Product = ({ byNavn }) => {
  return (
    <>
      <Meta title={`| Bestil låsesmed til ${byNavn}`} />
      <h1>{`Bestil en låsesmed til ${byNavn}`}</h1>{" "}
    </>
  );
};
Product.getInitialProps = async (ctx) => {
  return {
    byNavn: ctx.query.by,
  };
};
export default Product;
