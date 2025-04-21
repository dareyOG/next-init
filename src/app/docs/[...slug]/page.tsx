async function Docs({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;

  //   console.log(slug);

  let content;
  if (slug.length === 2) {
    content = (
      <p>
        Viewing docs for feature {slug.at(0)} and concept {slug.at(1)}
      </p>
    );
  } else if (slug.length === 1) {
    content = <p> Viewing docs for feature {slug.at(0)}</p>;
  } else content = <p>Docs home page</p>;

  return content;
}

export default Docs;
