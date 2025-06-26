"use client";
import React from "react";
import "../styles/succedModal.css";

interface SuccedModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export default function SuccedModal({
  isOpen,
  onClose,
  title,
  description,
}: SuccedModalProps) {
  if (!isOpen) return null;
  return (
    <div className="success-modal__overlay" onClick={onClose}>
      <div
        className="success-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="success-modal__icon">
          <svg
            className="checkmark"
            viewBox="0 0 52 52"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14 27l7 7 16-16"
            />
          </svg>
        </div>
        <h2 className="success-modal__title">{title}</h2>
        <p className="success-modal__message">{description}</p>
        <button className="success-modal__button" onClick={onClose}>
          Aceptar
        </button>
      </div>
    </div>
  );
}
