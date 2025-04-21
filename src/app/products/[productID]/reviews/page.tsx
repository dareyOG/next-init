import Link from 'next/link';

function Reviews() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li>
          <Link href="reviews/toyota">Toyota</Link>
        </li>
        <li>
          <Link href="reviews/google">Google</Link>
        </li>
        <li>
          <Link href="reviews/coca-cola">Coca-cola</Link>
        </li>
      </ul>
    </div>
  );
}

export default Reviews;
