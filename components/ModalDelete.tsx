import { ReactNode, useEffect } from "react";
import "../styles/ModalDelete.css";

interface ModalDeleteProps {
  /** Texto a mostrar en el cuerpo del modal */
  message: string;
  /** Controla la visibilidad del modal */
  open: boolean;
  /** Callback al pulsar «Sí» */
  onConfirm: () => void;
  /** Callback al pulsar «No» o cerrar */
  onCancel: () => void;
  /** Contenido opcional del título; por defecto «Eliminar» */
  title?: ReactNode;
}

export default function ModalDelete({
  message,
  open,
  onConfirm,
  onCancel,
  title = "Eliminar",
}: ModalDeleteProps) {
  // Bloquea el scroll del body cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  if (!open) return null;

  return (
    <div className="md-overlay" onClick={onCancel}>
      <div className="md-dialog" onClick={(e) => e.stopPropagation()}>
        <h2 className="md-title">{title}</h2>
        <p className="md-message">{message}</p>
        <div className="md-actions">
          <button className="md-btn md-btn-confirm" onClick={onConfirm}>
            Sí
          </button>
          <button className="md-btn md-btn-cancel" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
