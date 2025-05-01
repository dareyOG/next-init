import Link from 'next/link';

function InnerF2() {
  return (
    <>
      <h1>Inner F2 page</h1>
      <div>
        <Link href={'/f5'}>F5</Link>
      </div>
    </>
  );
}

export default InnerF2;
