import "./styles.css";
import Content from "./components/Content";
import AccessibilityContext from "./contexts/AccessibilityContext";
import AccessibilitySwitch from "./components/AccessibilitySwitch";
import { ToastSetter } from "./contexts/ToastSetter";
import React from "react";
console.clear();

export default function App() {
  const [isAccessible, setIsAccessible] = React.useState(false);
  return (
    <div className="App">
      <AccessibilityContext.Provider value={{ isAccessible, setIsAccessible }}>
        <ToastSetter>
          <Content />
          <AccessibilitySwitch />
        </ToastSetter>
      </AccessibilityContext.Provider>
    </div>
  );
}
