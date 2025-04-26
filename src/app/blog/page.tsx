import { Metadata } from 'next';

export const metadata: Metadata = {
  // title: 'Blog'
  title: {
    absolute: 'my blog'
  }
};

async function Blog() {
  await new Promise(resolve => {
    return setTimeout(resolve, 2000);
  });

  return <h1>my blog</h1>;
}

export default Blog;
