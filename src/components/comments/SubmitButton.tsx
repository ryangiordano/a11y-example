import React from "react";
import AccessibilityContext from "../../contexts/AccessibilityContext";

export default function SubmitButton({ onClick }: { onClick: () => void }) {
  const { isAccessible } = React.useContext(AccessibilityContext);

  return isAccessible ? (
    <button type="button" className="btn btn-success" onClick={onClick}>
      Submit
    </button>
  ) : (
    <div className="btn btn-success" onClick={onClick}>
      Submit
    </div>
  );
}
