// components/Toast.tsx
"use client";

import { useEffect } from "react";
import "../styles/toast.css";

export default function Toast({
  message,
  visible,
  onClose,
}: {
  message: string;
  visible: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3500); // se cierra automáticamente a los 3.5 segundos
      return () => clearTimeout(timer);
    }
  }, [visible]);

  return <div className={`toast ${visible ? "show" : ""}`}>{message}</div>;
}
