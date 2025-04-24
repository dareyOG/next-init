import Link from 'next/link';

async function NewsArticle({
  params,
  searchParams
}: {
  params: Promise<{ articleID: string }>;
  searchParams: Promise<{ lang?: 'en' | 'es' | 'fr' }>;
}) {
  const { articleID } = await params;
  const { lang = 'en' } = await searchParams;

  return (
    <div>
      <h1>News Article {articleID}</h1>
      <p>Reading in {lang}</p>

      <div>
        <Link href={`/articles/${articleID}?lang=en`}>English</Link>
        <Link href={`/articles/${articleID}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleID}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}

export default NewsArticle;
