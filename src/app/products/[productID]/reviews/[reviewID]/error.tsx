'use client';

function ErrorBoundary({ error }: { error: Error }) {
  //   return <div>Error in reviewId</div>;
  console.log(error);

  return <div>{error.message}</div>;
}

export default ErrorBoundary;
