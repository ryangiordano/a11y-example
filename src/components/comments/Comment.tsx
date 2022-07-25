import ActionBar from "../action-bar/ActionBar";
import { CommentData } from "./Comments";

export default function Comment({ comment }: { comment: CommentData }) {
  return (
    <div className="card bg-secondary my-1">
      <div className="card-body">
        <p className="card-text">{comment.details}</p>
        <ActionBar />
      </div>
    </div>
  );
}
