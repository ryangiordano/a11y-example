import React from "react";
import AccessibilityContext from "../contexts/AccessibilityContext";

function AccessibilitySwitch() {
  const { isAccessible, setIsAccessible } = React.useContext(
    AccessibilityContext
  );

  return (
    <fieldset>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          checked={isAccessible}
          onChange={(e) => setIsAccessible(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {isAccessible ? "A11y On" : "A11y Off"}
        </label>
      </div>
    </fieldset>
  );
}

export default AccessibilitySwitch;
