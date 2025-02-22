"use client";

import { useState } from "react";

interface Computador {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
}

const computadores: Computador[] = [
  { id: 1, nombre: "MacBook Pro", precio: 4547684 , imagen: "https://www.manzanasusadas.com/resources/archivosbd/productos_galeria/vender-mac-macbook-pro-apple-segunda-mano-643020230528190826-15.JPG" },
  { id: 2, nombre: "Dell XPS 15", precio: 2470000, imagen: "data:image/jpeg;base64,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" },
  { id: 3, nombre: "Asus ROG Strix", precio: 4650000, imagen: "https://dlcdnwebimgs.asus.com/gain/7646C48D-0B32-4088-BAF9-0697D99873FA" },
  { id: 4, nombre: "HP Spectre x360", precio: 7200000, imagen: "https://www.castordata.com.co/web/image/product.image/888/image_1024/Portatil%20HP%20Spectre%20x360%2014-ef2000la%20Intel%20Core%20i7-1355U%2016GB%20RAM%20SSD%201TB%20W11%20Home?unique=7a76901" },
];

export default function Home() {
  const [carrito, setCarrito] = useState<{ computador: Computador; cantidad: number }[]>([]);
  const [botonAnimado, setBotonAnimado] = useState<number | null>(null);

  const agregarAlCarrito = (computador: Computador) => {
    setCarrito((prev) => {
      const itemExistente = prev.find((item) => item.computador.id === computador.id);
      if (itemExistente) {
        return prev.map((item) =>
          item.computador.id === computador.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prev, { computador, cantidad: 1 }];
    });

    // Activar la animación solo para el botón oprimido
    setBotonAnimado(computador.id);
    setTimeout(() => setBotonAnimado(null), 1000); // Desactivar la animación después de 1000ms
  };

  const quitarDelCarrito = (computador: Computador) => {
    setCarrito((prev) => {
      return prev
        .map((item) =>
          item.computador.id === computador.id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter((item) => item.cantidad > 0);
    });
  };

  const calcularTotal = () =>
    carrito.reduce((total, item) => total + item.computador.precio * item.cantidad, 0);

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-6 drop-shadow-lg">
        💻 Tienda de Computadores Inteligente 🖥️
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {computadores.map((computador) => (
          <div key={computador.id} className="bg-white p-4 shadow-lg rounded-lg text-center border-4 border-blue-300">
            {computador.imagen ? (
              <img
                src={computador.imagen}
                alt={computador.nombre}
                className="w-32 h-32 mx-auto mb-2 transition-transform transform hover:scale-110 hover:shadow-2xl hover:shadow-black hover:brightness-75"
              />
            ) : (
              <div className="w-32 h-32 mx-auto mb-2 flex items-center justify-center bg-gray-200 rounded-lg">
                <span className="text-gray-500">No disponible</span>
              </div>
            )}
            <h2 className="text-2xl font-semibold text-blue-700">{computador.nombre}</h2>
            <p className="text-gray-700 text-lg">💰 ${computador.precio}</p>
            <button
              className={`mt-3 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all duration-1000 ease-in-out ${
                botonAnimado === computador.id
                  ? "translate-x-[200%] scale-75 rotate-45 opacity-0"
                  : "translate-x-0 scale-100 rotate-0 opacity-100"
              }`}
              onClick={() => agregarAlCarrito(computador)}
            >
              🛒 Agregar
            </button>
          </div>
        ))}
      </div>

      {/* Carrito de compras */}
      <div className="mt-8 bg-white p-6 shadow-lg rounded-lg w-full max-w-lg border-4 border-yellow-400">
        <h2 className="text-2xl font-bold text-yellow-700 text-center">🛍️ Carrito de Compras</h2>
        {carrito.length === 0 ? (
          <p className="text-gray-600 text-center mt-2">El carrito está vacío.</p>
        ) : (
          <ul className="mt-4 space-y-2">
            {carrito.map((item) => (
              <li key={item.computador.id} className="flex justify-between border-b py-2 text-lg items-center">
                <span>{item.computador.nombre} x {item.cantidad}</span>
                <div className="flex gap-2">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-all transform hover:scale-105 active:scale-95"
                    onClick={() => quitarDelCarrito(item.computador)}
                  >
                    ➖
                  </button>
                  <span className="text-blue-600 font-bold">💰 ${item.computador.precio * item.cantidad}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
        <h3 className="text-xl font-bold mt-4 text-center text-red-600">Total: 💰 ${calcularTotal()}</h3>
      </div>
    </div>
  );
}