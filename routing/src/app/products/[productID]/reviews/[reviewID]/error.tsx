'use client';

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  //   return <div>Error in reviewId</div>;
  console.log(error);

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div>
      <p>{error.message}</p>
      <button onClick={reload}>Try again</button>
    </div>
  );
}

export default ErrorBoundary;
