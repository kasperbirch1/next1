const Product = ({ productId }) => {
  return (
    <>
      <h1>{`This is my product id ${productId}`}</h1>{" "}
    </>
  );
};
Product.getInitialProps = async (ctx) => {
  return {
    productId: ctx.query.id,
  };
};
export default Product;
