import { comments } from '../data';

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  const comment = comments.find(comment => comment.id === +id);

  return Response.json(comment);
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const body = await request.json();
  //   console.log(body);
  const { text } = body;
  // find comment
  const comment = comments.find(comment => comment?.id === +id)!;

  //   update comment text
  comment.text = text;

  return Response.json(comment);
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const index = comments.findIndex(comment => comment.id === +id);
  const deletedComment = comments.at(index);

  comments.splice(index, 1);

  return Response.json(deletedComment);
}
