import { notFound, redirect } from 'next/navigation';

async function ProductReview({
  params
}: {
  params: Promise<{ productID: string; reviewID: string }>;
}) {
  const { reviewID, productID } = await params;

  if (reviewID.toUpperCase() === 'LP') notFound();
  if (reviewID.toUpperCase() === 'PDP') redirect('/');
  if (reviewID.toUpperCase() === 'APC') throw new Error('Error loading review');

  return (
    <h1>
      Review {reviewID} for product {productID}
    </h1>
  );
}

export default ProductReview;
