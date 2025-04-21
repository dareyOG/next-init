async function ProductReview({
  params
}: {
  params: Promise<{ productID: string; reviewID: string }>;
}) {
  const { reviewID, productID } = await params;

  return (
    <h1>
      Review {reviewID} for product {productID}
    </h1>
  );
}

export default ProductReview;
