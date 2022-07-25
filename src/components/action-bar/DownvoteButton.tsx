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
        d="m12 20 9-11h-6V4H9v5H3z"
        stroke={`${filled ? "#34b4eb" : "#949799"}`}
        fill="none"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  </>
);
export default function DownvoteButton({
  onClick,
  downvoted
}: {
  onClick: () => void;
  downvoted: boolean;
}) {
  return <ActionBarButton onClick={onClick}>{svg(downvoted)}</ActionBarButton>;
}
