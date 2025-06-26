"use client";
import { useEffect } from "react";
import "../styles/undoToast.css";

interface UndoToastProps {
  visible: boolean;
  productName: string;
  onUndo: () => void;
  onTimeout: () => void;
  duration?: number; // ms
}

export default function UndoToast({
  visible,
  productName,
  onUndo,
  onTimeout,
  duration = 10000,
}: UndoToastProps) {
  // dispara timeout cuando aparece el toast
  useEffect(() => {
    if (!visible) return;
    const id = setTimeout(onTimeout, duration);
    return () => clearTimeout(id);
  }, [visible, duration, onTimeout]);

  // CSS maneja la animación de la barra
  if (!visible) return null;

  return (
    <div className="undo-toast">
      <button className="undo-toast__close" onClick={onTimeout}>
        ✕
      </button>
      <div className="undo-toast__content">
        <span>
          <strong>{productName}</strong> eliminado.
        </span>
        <button className="undo-btn" onClick={onUndo}>
          Deshacer
        </button>
      </div>
      <div
        className="undo-toast__bar"
        style={{ animationDuration: `${duration}ms` }}
      />
    </div>
  );
}
