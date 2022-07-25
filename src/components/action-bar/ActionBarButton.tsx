import React from "react";
import AccessibilityContext from "../../contexts/AccessibilityContext";

export default function ActionBarButton({
  onClick,
  children
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  const { isAccessible } = React.useContext(AccessibilityContext);
  return isAccessible ? (
    <button style={{ height: "35px" }} type="button" onClick={onClick}>
      {children}
    </button>
  ) : (
    <div style={{ height: "35px" }} onClick={onClick}>
      {children}
    </div>
  );
}
