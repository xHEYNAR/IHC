"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import "/styles/vistaComprar.css";
import { useState } from "react";

export default function VistaComprar() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFading, setIsFading] = useState(false); // ← NUEVO

  // Mock product data (replace with props or fetch)
  const product = {
    title: "HP Victus Laptop de 15.6 pulgadas",
    highlight: [
      "Intel Core i5-12450H",
      "8 GB RAM",
      "512 GB SSD",
      "NVIDIA GeForce RTX 2050",
      "Windows 11 Home",
    ],
    price: 479.99,
    originalPrice: 1699.0,
    rating: 4.4,
    reviews: 122,
    images: [
      "/image/AZUZ_2022.png",
      "/image/MacBook11.jpeg",
      "/image/notebook-xps-15-9530-t-black-gallery-1 (1).avif",
    ],
    details: {
      Marca: "HP",
      Modelo: "15-fa1029nr",
      "Tamaño de pantalla": "15.6 pulgadas FHD 144 Hz",
      Color: "Negro",
      "Tamaño de disco duro": "512 GB SSD",
      "Modelo de CPU": "Core i5",
      "Tamaño de la memoria": "8 GB",
    },
  };
  const handleThumbClick = (index: number) => {
    // iniciamos fade-out
    setIsFading(true);

    setTimeout(() => {
      setSelectedImage(index); // cambiamos la imagen
      setIsFading(false); // y volvemos a opacidad 1
    }, 300); // 300ms debe encajar con la duración del transition
  };

  return (
    <div className="vista-comprar">
      <div className="vc-container">
        <div className="vc-images">
          {/* ---- imagen principal: añado la clase fade cuando isFading=true */}
          <div className={`vc-main-image ${isFading ? "fade-out" : ""}`}>
            <Image
              src={product.images[selectedImage]}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* ---- miniaturas: llamo a handleThumbClick */}
          <div className="vc-thumbnails">
            {product.images.map((src, i) => (
              <div
                key={i}
                className={`vc-thumb ${selectedImage === i ? "active" : ""}`}
                onClick={() => handleThumbClick(i)}
              >
                <Image
                  src={src}
                  alt={`${product.title} ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="vc-info">
          <h1 className="vc-title">{product.title}</h1>
          <div className="vc-badges">
            <Badge variant="default">{product.rating} ★</Badge>
            <span className="vc-reviews">{product.reviews} reseñas</span>
          </div>

          <div className="vc-pricing">
            <span className="vc-price">${product.price.toFixed(2)}</span>
            <span className="vc-original">
              ${product.originalPrice.toFixed(2)}
            </span>
          </div>

          <ul className="vc-highlights">
            {product.highlight.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          <div className="vc-buttons">
            <Button className="vc-btn">Agregar al carrito</Button>
            <Link href="/vistaPagar" passHref>
              <Button className="vc-btn-buy-now">Comprar ahora</Button>
            </Link>
          </div>

          <table className="vc-details">
            <tbody>
              {Object.entries(product.details).map(([key, val]) => (
                <tr key={key}>
                  <th>{key}</th>
                  <td>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
