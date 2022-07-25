import React from "react";
import ToastSetterContext from "../../contexts/ToastSetter";
import { CommentData } from "./Comments";
import SubmitButton from "./SubmitButton";

export default function CommentForm({
  onAddComment
}: {
  onAddComment: (commentData: CommentData) => void;
}) {
  const { setToast } = React.useContext(ToastSetterContext);
  const [commentDetails, setCommentDetails] = React.useState("");
  const handleSubmit = () => {
    if (commentDetails.length < 3) {
      console.log("????");
      return setToast("Form is not valid");
    }
    onAddComment({ details: commentDetails });
    setCommentDetails("");
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="form-group" style={{ display: "flex" }}>
        <input
          type="text"
          id="comment-add"
          className="form-control"
          value={commentDetails}
          onChange={(e) => setCommentDetails(e.target.value)}
          style={{ marginRight: "15px" }}
        />{" "}
        <SubmitButton onClick={handleSubmit} />
      </div>
    </form>
  );
}
