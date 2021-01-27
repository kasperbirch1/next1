const Product = ({ by }) => {
  return (
    <>
      <h1>Velkommen i {by} </h1>
    </>
  );
};

Product.getInitialProps = async (ctx) => {
  return {
    by: ctx.query.by,
  };
};

export default Product;
