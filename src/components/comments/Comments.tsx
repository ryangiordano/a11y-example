import React from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

export type CommentData = {
  details: string;
};
export default function Comments() {
  const [comments, setComments] = React.useState<CommentData[]>([]);

  return (
    <div>
      <CommentForm
        onAddComment={(comment) => setComments([...comments, comment])}
      />
      {comments.map((comment) => {
        return <Comment comment={comment} />;
      })}
    </div>
  );
}
