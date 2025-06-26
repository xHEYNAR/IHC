// components/vistaPagar.tsx
"use client";
import Toast from "./Toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { CreditCard, Banknote, QrCode } from "lucide-react";
import SuccedModal from "./succedModal"; // ajusta la ruta si hace falta

import "../styles/vistaPagar.css";

export default function VistaPagar() {
  const router = useRouter();
  const [method, setMethod] = useState<"card" | "deposit" | "qr">("card");
  const [checking, setChecking] = useState(false);
  const [paid, setPaid] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [processingCard, setProcessingCard] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardHolder: "",
    firstName: "",
    lastName: "",
    locality: "",
    postalCode: "",
    addressLine1: "",
  });
  const [locality, setLocality] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [phone, setPhone] = useState("");
  const [globalError, setGlobalError] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 8);
    setPhone(digits);
  };

  const handlePostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 20);
    setPostalCode(digitsOnly);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 3); // máx. 3 cifras
    setCvv(digits);
  };

  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 4); // máx. 4 dígitos
    if (digits.length === 0) return "";

    // 1 dígito escrito
    if (digits.length === 1) {
      const d0 = parseInt(digits[0], 10);
      // Si el dígito es 2-9, lo convertimos a 0X/ (02/, 03/, … 09/)
      if (d0 > 1) return `0${d0}/`;
      return digits;
    }

    // 2 dígitos → agregamos “/”
    if (digits.length === 2) return `${digits}/`;

    // 3-4 dígitos → “MM/AA”
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    // Si el usuario borró el `/`, no lo forzamos a reinsertarlo
    if (input.length === 2 && expiry.length === 3 && !input.includes("/")) {
      setExpiry(input);
      return;
    }

    const digits = input.replace(/\D/g, "").slice(0, 4);

    if (digits.length === 0) {
      setExpiry("");
      return;
    }

    // 1 dígito
    if (digits.length === 1) {
      const d = parseInt(digits[0], 10);
      if (d > 1) {
        setExpiry(`0${d}/`);
      } else {
        setExpiry(digits);
      }
      return;
    }

    // 2 dígitos: validar mes y agregar "/"
    if (digits.length === 2) {
      let mm = parseInt(digits, 10);
      if (mm === 0) mm = 1;
      if (mm > 12) mm = 12;
      setExpiry(mm.toString().padStart(2, "0") + "/");
      return;
    }

    // 3 o más dígitos → MM/AA
    const mm = parseInt(digits.slice(0, 2), 10);
    const mmCorrected = Math.min(Math.max(mm, 1), 12)
      .toString()
      .padStart(2, "0");
    const yy = digits.slice(2, 4);
    setExpiry(`${mmCorrected}/${yy}`);
  };

  const formatCardNumber = (value: string) => {
    // Eliminar todo lo que no sea dígito
    const digits = value.replace(/\D/g, "");
    // Agrupar en bloques de 4
    const groups = digits.match(/.{1,4}/g);
    return groups ? groups.join(" ") : "";
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const formatted = formatCardNumber(raw);
    setCardNumber(formatted);
  };

  const handleCardPayment = (e: React.FormEvent) => {
    e.preventDefault();

    // const onlyLetters = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/;

    const newErrors = {
      cardNumber: "",
      expiry: "",
      cvv: "",
      cardHolder: "",
      firstName: "",
      lastName: "",
      locality: "", // ⬅️ necesario para resetear correctamente
      postalCode: "",
      addressLine1: "",
    };

    // 1️⃣ —— Campos vacíos
    if (!cardNumber.trim()) newErrors.cardNumber = "Debe llenar este campo.";
    if (!expiry.trim()) newErrors.expiry = "Debe llenar este campo.";
    if (!cvv.trim()) newErrors.cvv = "Debe llenar este campo.";
    if (!cardHolder.trim()) newErrors.cardHolder = "Debe llenar este campo.";
    if (!firstName.trim()) newErrors.firstName = "Debe llenar este campo.";
    if (!lastName.trim()) newErrors.lastName = "Debe llenar este campo.";
    if (!locality.trim()) newErrors.locality = "Debe llenar este campo.";
    if (!postalCode.trim()) newErrors.postalCode = "Debe llenar este campo.";
    if (!addressLine1.trim())
      newErrors.addressLine1 = "Debe llenar este campo.";
    // if (!addressLine2.trim()) newErrors.locality = "";
    // if (!phone.trim()) newErrors.locality = "";

    // 2️⃣ —— Letras solo donde corresponde
    const onlyLetters = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/;
    if (cardHolder && !onlyLetters.test(cardHolder.trim()))
      newErrors.cardHolder = "Solo se permiten letras y espacios.";
    if (firstName && !onlyLetters.test(firstName.trim()))
      newErrors.firstName = "Solo se permiten letras y espacios.";
    if (lastName && !onlyLetters.test(lastName.trim()))
      newErrors.lastName = "Solo se permiten letras y espacios.";
    if (locality && !onlyLetters.test(locality.trim()))
      newErrors.locality = "Solo se permiten letras y espacios.";

    // 3️⃣ —— Formato tarjeta / fecha / CVV
    if (cardNumber && cardNumber.replace(/\s/g, "").length !== 16)
      newErrors.cardNumber = "El número de tarjeta está incompleto.";

    if (expiry && (expiry.length !== 5 || !/^\d{2}\/\d{2}$/.test(expiry)))
      newErrors.expiry = "La fecha de vencimiento está incompleta.";

    if (cvv && cvv.length !== 3)
      newErrors.cvv = "El código de seguridad está incompleto.";

    // 4️⃣ —— ¿Hay errores?
    const hasErrors = Object.values(newErrors).some((msg) => msg !== "");
    if (hasErrors) {
      setErrors(newErrors);
      setToastMessage("Por favor, corrige los campos obligatorios");
      setToastVisible(true);
      return;
    }

    // si no hay errores, continuar con el pago
    setErrors({
      cardNumber: "",
      expiry: "",
      cvv: "",
      cardHolder: "",
      firstName: "",
      lastName: "",
      locality: "",
      postalCode: "",
      addressLine1: "",
    });
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

  const handleCloseModal = () => {
    setModalOpen(false);
    router.push("/"); // ③ redirige al home
  };
  const clearFieldError = (field: keyof typeof errors) => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
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
                Número de tarjeta <span className="required-asterisk">*</span>
                <input
                  className={errors.cardNumber ? "input-error" : ""}
                  type="text"
                  placeholder="1234 1234 1234 1234"
                  value={cardNumber}
                  onChange={(e) => {
                    handleCardNumberChange(e);
                    clearFieldError("cardNumber");
                  }}
                  maxLength={16 + 3} // 16 dígitos + 3 espacios
                  inputMode="numeric"
                  autoComplete="cc-number"
                />
                {errors.cardNumber && (
                  <span className="vp-error-msg">{errors.cardNumber}</span>
                )}
              </label>
              <div className="vp-form-row">
                <label>
                  Fecha de caducidad{" "}
                  <span className="required-asterisk">*</span>
                  <input
                    className={errors.expiry ? "input-error" : ""}
                    type="text"
                    placeholder="MM/AA"
                    value={expiry}
                    onChange={(e) => {
                      handleExpiryChange(e);
                      clearFieldError("expiry");
                    }}
                    maxLength={5} // 2 dígitos + “/” + 2 dígitos
                    inputMode="numeric"
                    autoComplete="cc-exp"
                  />
                  {errors.expiry && (
                    <span className="vp-error-msg">{errors.expiry}</span>
                  )}
                </label>
                <label>
                  CVV <span className="required-asterisk">*</span>
                  <input
                    className={errors.cvv ? "input-error" : ""}
                    type="text"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => {
                      handleCvvChange(e);
                      clearFieldError("cvv");
                    }}
                    maxLength={3}
                    inputMode="numeric"
                    autoComplete="cc-csc"
                  />
                  {errors.cvv && (
                    <span className="vp-error-msg">{errors.cvv}</span>
                  )}
                </label>
              </div>
              <label>
                Titular de la tarjeta{" "}
                <span className="required-asterisk">*</span>
                <input
                  className={errors.cardHolder ? "input-error" : ""}
                  type="text"
                  placeholder="Juan Pérez"
                  value={cardHolder}
                  onChange={(e) => {
                    setCardHolder(e.target.value);
                    clearFieldError("cardHolder");
                  }}
                />
                {errors.cardHolder && (
                  <span className="vp-error-msg">{errors.cardHolder}</span>
                )}
              </label>
              {/* <label>
                Correo electrónico
                <input type="email" placeholder="correo@ejemplo.com" />
              </label> */}

              {/* --- Información de facturación --- */}
              <h3 className="vp-subtitle">Información de facturación</h3>
              <div className="vp-form-row">
                <label>
                  Nombre <span className="required-asterisk">*</span>
                  <input
                    className={errors.firstName ? "input-error" : ""}
                    type="text"
                    placeholder="Juan"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      clearFieldError("firstName");
                    }}
                  />
                  {errors.firstName && (
                    <span className="vp-error-msg">{errors.firstName}</span>
                  )}
                </label>
                <label>
                  Apellidos <span className="required-asterisk">*</span>
                  <input
                    className={errors.lastName ? "input-error" : ""}
                    type="text"
                    placeholder="Pérez Gómez"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                      clearFieldError("lastName");
                    }}
                  />
                  {errors.lastName && (
                    <span className="vp-error-msg">{errors.lastName}</span>
                  )}
                </label>
              </div>
              <div className="vp-form-row">
                <label>
                  Localidad <span className="required-asterisk">*</span>
                  <input
                    className={errors.locality ? "input-error" : ""}
                    type="text"
                    placeholder="Cochabamba"
                    value={locality}
                    onChange={(e) => {
                      setLocality(e.target.value);
                      clearFieldError("locality");
                    }}
                  />
                  {errors.locality && (
                    <span className="vp-error-msg">{errors.locality}</span>
                  )}
                </label>

                <label>
                  Código postal<span className="required-asterisk">*</span>
                  <input
                    type="text"
                    placeholder="0000"
                    value={postalCode}
                    onChange={(e) => {
                      handlePostalCodeChange(e);
                      clearFieldError("postalCode");
                    }}
                    inputMode="numeric"
                    maxLength={20}
                  />
                  {errors.postalCode && (
                    <span className="vp-error-msg">{errors.postalCode}</span>
                  )}
                </label>
              </div>
              <label>
                Dirección de facturación{" "}
                <span className="required-asterisk">*</span>
                <input
                  type="text"
                  placeholder="Av. Villazón 1234"
                  value={addressLine1}
                  onChange={(e) => {
                    setAddressLine1(e.target.value.slice(0, 120));
                    clearFieldError("addressLine1");
                  }}
                  maxLength={120}
                  className={errors.addressLine1 ? "input-error" : ""}
                />
                {errors.addressLine1 && (
                  <span className="vp-error-msg">{errors.addressLine1}</span>
                )}
              </label>
              <label>
                Dirección (línea 2)
                <input
                  type="text"
                  placeholder="Depto. 5B, Edif. Central"
                  value={addressLine2}
                  onChange={(e) =>
                    setAddressLine2(e.target.value.slice(0, 120))
                  }
                  maxLength={120}
                />
              </label>
              <div className="vp-form-row">
                {/* <label>
                  País / Región
                  <select>
                    <option>Bolivia</option>
                    <option>Argentina</option>
                    <option>Chile</option>
                  </select>
                </label> */}
                <label>
                  Teléfono
                  <input
                    type="tel"
                    placeholder="72295337"
                    value={phone}
                    onChange={handlePhoneChange}
                    inputMode="numeric"
                    maxLength={8}
                  />
                </label>
              </div>
              <div className="vp-checkbox">
                <input type="checkbox" id="save-info" />
                <label htmlFor="save-info">
                  Guardar mi información de pago para facilitar el proceso la
                  próxima vez
                </label>
              </div>

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
              {globalError && (
                <span className="vp-error-msg">{globalError}</span>
              )}
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
        onClose={handleCloseModal}
        title="¡Pago exitoso!"
        description="Se verificó el pago correctamente."
      />
      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </>
  );
}
