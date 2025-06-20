// components/vistaPagar.tsx
"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { CreditCard, Banknote, QrCode } from "lucide-react";
import SuccedModal from "./succedModal"; // ajusta la ruta si hace falta

import "/styles/vistaPagar.css";

export default function VistaPagar() {
  const [method, setMethod] = useState<"card" | "deposit" | "qr">("card");
  const [checking, setChecking] = useState(false);
  const [paid, setPaid] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [processingCard, setProcessingCard] = useState(false);

  const handleCardPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessingCard(true);
    setModalOpen(false);
    setTimeout(() => {
      setProcessingCard(false);
      setModalOpen(true);
    }, 2000);
  };

  const handleVerify = () => {
    setChecking(true);
    setPaid(false);
    setModalOpen(false);

    setTimeout(() => {
      setChecking(false);
      setPaid(true);
      setModalOpen(true); // ← abrimos el modal al finalizar
    }, 5000);
  };

  return (
    <>
      <section className="vp-section">
        <h2 className="vp-title">Selecciona método de pago</h2>

        <div className="vp-methods">
          <button
            className={`vp-method-btn ${method === "card" ? "active" : ""}`}
            onClick={() => setMethod("card")}
          >
            <CreditCard className="vp-icon" /> Tarjeta
          </button>
          <button
            className={`vp-method-btn ${method === "deposit" ? "active" : ""}`}
            onClick={() => setMethod("deposit")}
          >
            <Banknote className="vp-icon" /> Depósito bancario
          </button>

          <button
            className={`vp-method-btn ${method === "qr" ? "active" : ""}`}
            onClick={() => setMethod("qr")}
          >
            <QrCode className="vp-icon" /> Código QR
          </button>
        </div>

        <div className="vp-content">
          {method === "card" && (
            <form className="vp-form" onSubmit={handleCardPayment}>
              {/* --- Datos de la tarjeta --- */}
              <label>
                Número de tarjeta
                <input type="text" placeholder="•••• •••• •••• ••••" />
              </label>
              <div className="vp-form-row">
                <label>
                  Fecha de caducidad
                  <input type="text" placeholder="MM/AA" />
                </label>
                <label>
                  CVV
                  <input type="text" placeholder="123" />
                </label>
              </div>
              <label>
                Titular de la tarjeta
                <input type="text" placeholder="Juan Pérez" />
              </label>
              <label>
                Correo electrónico
                <input type="email" placeholder="correo@ejemplo.com" />
              </label>

              {/* --- Información de facturación --- */}
              <h3 className="vp-subtitle">Información de facturación</h3>
              <div className="vp-form-row">
                <label>
                  Nombre
                  <input type="text" placeholder="Juan" />
                </label>
                <label>
                  Apellidos
                  <input type="text" placeholder="Pérez Gómez" />
                </label>
              </div>
              <div className="vp-form-row">
                <label>
                  Localidad
                  <input type="text" placeholder="Cochabamba" />
                </label>
                <label>
                  Código postal
                  <input type="text" placeholder="0000" />
                </label>
              </div>
              <label>
                Dirección de facturación
                <input type="text" placeholder="Av. Villazón 1234" />
              </label>
              <label>
                Dirección (línea 2)
                <input type="text" placeholder="Depto. 5B, Edif. Central" />
              </label>
              <div className="vp-form-row">
                <label>
                  País / Región
                  <select>
                    <option>Bolivia</option>
                    <option>Argentina</option>
                    <option>Chile</option>
                    {/* ...otras opciones */}
                  </select>
                </label>
                <label>
                  Teléfono
                  <input type="tel" placeholder="72295337" />
                </label>
              </div>
              <label className="vp-checkbox">
                <input type="checkbox" /> Guardar mi información de pago para
                facilitar el proceso la próxima vez
              </label>

              <p className="vp-note">
                Podrás revisar tu pedido antes de que se procese.
              </p>

              <button
                type="submit"
                className="vp-pay-btn"
                disabled={processingCard}
              >
                {processingCard ? (
                  <Loader2 className="vp-spinner" />
                ) : (
                  "Pagar ahora"
                )}
              </button>
            </form>
          )}

          {method === "deposit" && (
            <div className="vp-deposit">
              <p>
                <strong>Banco:</strong> Banco TecnoLink S.A.
              </p>
              <p>
                <strong>Tipo de cuenta:</strong> Corriente
              </p>
              <p>
                <strong>Moneda:</strong> USD
              </p>
              <p>
                <strong>Cuenta:</strong> 1234-5678-9012
              </p>
              <p>
                <strong>SWIFT:</strong> TLNKBO21
              </p>
              <p>
                <strong>Referencia:</strong> Orden #12345
              </p>
              <p>
                Tras realizar el depósito, envía el comprobante a{" "}
                <a href="mailto:pagos@tecnolink.com">pagos@tecnolink.com</a>
              </p>

              {/* ——— Botón de verificación y mensaje ——— */}
              <button
                className="vp-verify-btn"
                onClick={handleVerify}
                disabled={checking}
              >
                {checking ? "Verificando..." : "Verificar estado de pago"}
              </button>
              {/* {paid && (
                <p className="vp-paid-msg">¡Pago realizado con éxito! 🎉</p>
              )} */}
            </div>
          )}

          {method === "qr" && (
            <div className="vp-qr">
              <img
                src="/image/qr.jpg"
                alt="Código QR de pago"
                className="vp-qr-img"
              />
              <p>
                Escanea este código con tu app bancaria para abonar{" "}
                <strong>Bs 479.99</strong>.
              </p>
              <p>Validez: 30 minutos.</p>

              {/* ——— Botón de verificación y mensaje ——— */}
              <button
                className="vp-verify-btn"
                onClick={handleVerify}
                disabled={checking}
              >
                {checking ? "Verificando..." : "Verificar estado de pago"}
              </button>
              {/* {paid && (
                <p className="vp-paid-msg">¡Pago realizado con éxito! 🎉</p>
              )} */}
            </div>
          )}
        </div>
      </section>
      <SuccedModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="¡Pago exitoso!"
        description="Se verificó el pago correctamente."
      />
    </>
  );
}
