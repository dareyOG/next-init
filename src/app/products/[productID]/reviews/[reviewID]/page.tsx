import { notFound } from 'next/navigation';

async function ProductReview({
  params
}: {
  params: Promise<{ productID: string; reviewID: string }>;
}) {
  const { reviewID, productID } = await params;

  if (reviewID.toLowerCase() === 'apc') notFound();
  return (
    <h1>
      Review {reviewID} for product {productID}
    </h1>
  );
}

export default ProductReview;
