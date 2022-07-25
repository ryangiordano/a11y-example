import React from "react";
import DownvoteButton from "./DownvoteButton";
import UpvoteButton from "./UpvoteButton";

export default function ActionBar() {
  const [upvoted, setUpvoted] = React.useState(false);
  const [downvoted, setDownvoted] = React.useState(false);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <UpvoteButton
        upvoted={upvoted}
        onClick={() => {
          setUpvoted(!upvoted);
          setDownvoted(false);
        }}
      />
      <DownvoteButton
        downvoted={downvoted}
        onClick={() => {
          setUpvoted(false);
          setDownvoted(!downvoted);
        }}
      />
    </div>
  );
}
