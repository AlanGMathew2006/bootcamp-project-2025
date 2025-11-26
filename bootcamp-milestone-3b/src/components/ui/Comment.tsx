type IComment = {
  user: string;
  comment: string;
  time: Date;
};

type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: Date | string) {
  const date = time instanceof Date ? time : new Date(time);
  return date.toLocaleString();
}

function Comment({ comment }: CommentProps) {
  return (
    <div>
      <h4>{comment.user}</h4>
      <p>{comment.comment}</p>
      <span>{parseCommentTime(comment.time)}</span>
    </div>
  );
}

export default Comment;
