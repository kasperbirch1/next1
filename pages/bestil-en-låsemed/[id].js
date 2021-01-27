const Product = ({ byNavn }) => {
  return (
    <>
      <h1>{`Velkommen til ${byNavn}`}</h1>
    </>
  );
};

Product.getInitialProps = async (ctx) => {
  return {
    byNavn: ctx.query.by,
  };
};

export default Product;
