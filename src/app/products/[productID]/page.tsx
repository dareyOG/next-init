async function ProductItem({ params }: { params: Promise<{ productID: string }> }) {
  const productID = (await params).productID;

  return <h1>product {productID}</h1>;
}

export default ProductItem;
