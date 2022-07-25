import ActionBarButton from "./ActionBarButton";
const svg = (filled: boolean) => (
  <>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4 3 15h6v5h6v-5h6z"
        strokeWidth="1.5"
        stroke={`${filled ? "#34b4eb" : "#949799"}`}
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  </>
);
export default function UpvoteButton({
  onClick,
  upvoted
}: {
  onClick: () => void;
  upvoted: boolean;
}) {
  return <ActionBarButton onClick={onClick}>{svg(upvoted)}</ActionBarButton>;
}
