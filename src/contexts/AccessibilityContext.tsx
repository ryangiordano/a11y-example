import React from "react";

const AccessibilityContext = React.createContext({
  isAccessible: false,
  setIsAccessible: (isAccessible: boolean) => {}
});

export default AccessibilityContext;
