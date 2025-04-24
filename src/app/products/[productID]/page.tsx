import { Metadata } from 'next';

type Props = {
  params: Promise<{ productID: string }>;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { productID } = await params;

  return {
    title: `Product ${productID}`,
    description: `All about ${productID}`
  };
};

async function ProductItem({ params }: Props) {
  const productID = (await params).productID;

  return <h1>product {productID}</h1>;
}

export default ProductItem;
