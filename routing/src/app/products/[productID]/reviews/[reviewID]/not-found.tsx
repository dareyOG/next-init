'use client';

import { usePathname } from 'next/navigation';

function NotFound() {
  const pathName = usePathname();

  const productID = pathName.split('/').at(2)?.toUpperCase();
  const reviewID = pathName.split('/').at(-1)?.toUpperCase();

  return (
    <div>
      <p>
        Review on {reviewID} Not Found for {productID}
      </p>
    </div>
  );
}

export default NotFound;
