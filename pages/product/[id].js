const Product = ({ productId }) => {
  return <> This is my product id {productId} </>;
};
Product.getInitialProps = async (ctx) => {
  return {
    productId: ctx.query.id,
  };
};
export default Product;
