"use client";
import React from "react";
import "/styles/succedModal.css";

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
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
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
