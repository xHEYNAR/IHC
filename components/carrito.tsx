"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import "../styles/carrito.css";

type CartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export default function Carrito() {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'HP Victus 15.6" FHD 144Hz – Core i5',
      image: "/image/HP.png",
      price: 479.99,
      quantity: 1,
    },
    {
      id: 2,
      name: "MacBook Pro M2 – 16GB RAM",
      image: "/image/MacBook11.jpeg",
      price: 1599.0,
      quantity: 1,
    },
  ]);

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1 className="cart-title">Tu carrito</h1>

      {items.length === 0 ? (
        <p className="cart-empty">No existen productos en el carrito.</p>
      ) : (
        <>
          <button className="clear-cart-btn" onClick={clearCart}>
            Vaciar carrito
          </button>

          <table className="cart-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="cart-row">
                  <td className="cart-product">
                    <div className="cart-thumb">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                      />
                    </div>
                    <span className="cart-name">{item.name}</span>
                  </td>
                  <td className="cart-qty">
                    <button
                      className="qty-btn"
                      onClick={() => updateQty(item.id, -1)}
                    >
                      –
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => updateQty(item.id, +1)}
                    >
                      +
                    </button>
                  </td>
                  <td className="cart-price">${item.price.toFixed(2)}</td>
                  <td className="cart-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="remove-icon" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <span>Subtotal:</span>
            <span className="summary-value">${subtotal.toFixed(2)}</span>
          </div>

          <Link href="/vistaPagar">
            <button className="checkout-btn">Pagar pedido</button>
          </Link>
        </>
      )}
    </div>
  );
}
