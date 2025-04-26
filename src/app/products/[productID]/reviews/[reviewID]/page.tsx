import { notFound, redirect } from 'next/navigation';

async function ProductReview({
  params
}: {
  params: Promise<{ productID: string; reviewID: string }>;
}) {
  const { reviewID, productID } = await params;

  if (reviewID.toLowerCase() === 'apc') notFound();
  // if (reviewID.toLowerCase() === 'apc') redirect('/');
  return (
    <h1>
      Review {reviewID} for product {productID}
    </h1>
  );
}

export default ProductReview;
