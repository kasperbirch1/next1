const Product = ({ productId }) => {
  return (
    <>
      <h1>{`bestil låsesmed til ${productId}`}</h1>{" "}
    </>
  );
};
Product.getInitialProps = async (ctx) => {
  return {
    productId: ctx.query.id,
  };
};
export default Product;
