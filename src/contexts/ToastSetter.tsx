import React from "react";
import Toast from "../components/toast/Toast";
const ToastSetterContext = React.createContext({
  toasts: [],
  setToast: (text: string) => {},
  removeToast: (toastId: number) => {}
});

export function ToastSetter({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<
    {
      toastText: string;
      toastId: number;
    }[]
  >([]);
  console.log(toasts);
  return (
    <ToastSetterContext.Provider
      value={{
        removeToast: (toastId: number) => {
          console.log(toastId);
          const newToasts = toasts.filter((toast) => toast.toastId !== toastId);
          setToasts(newToasts);
        },
        toasts,
        setToast: (text: string) => {
          toasts.push({ toastText: text, toastId: Math.random() });
          setToasts([...toasts]);
        }
      }}
    >
      <>
        {toasts.map((t) => (
          <Toast
            toastDetail={t.toastText}
            key={t.toastId}
            toastId={t.toastId}
          ></Toast>
        ))}
        {children}
      </>
    </ToastSetterContext.Provider>
  );
}

export default ToastSetterContext;
