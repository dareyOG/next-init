import { comments } from '../data';

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  const comment = comments.find(comment => comment.id === +id);

  return Response.json(comment);
}
