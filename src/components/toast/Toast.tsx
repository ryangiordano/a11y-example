import React from "react";
import ToastSetterContext from "../../contexts/ToastSetter";

export default function Toast({
  toastDetail,
  toastId
}: {
  toastDetail: string;
  toastId: number;
}) {
  console.log("??");
  const { removeToast } = React.useContext(ToastSetterContext);
  React.useEffect(() => {
    setTimeout(() => {
      removeToast(toastId);
    }, 4000);
  }, []);
  return (
    <div
      className="toast show slide-right"
      style={{ position: "absolute" }}
      // role="alert"
      // aria-live="assertive"
    >
      <div className="toast-body">{toastDetail}</div>
    </div>
  );
}
