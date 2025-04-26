'use client';

import { useRouter } from 'next/navigation';

function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log('placing your order');
    router.push('/');
  };
  return (
    <>
      <h1>Order product</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
}

export default OrderProduct;
