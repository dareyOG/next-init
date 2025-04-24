import { Metadata } from 'next';

export const metadata: Metadata = {
  // title: 'Blog'
  title: {
    absolute: 'my blog'
  }
};

function Blog() {
  return <h1>my blog</h1>;
}

export default Blog;
