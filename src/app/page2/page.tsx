'use client'
import Navbar from "@/app/components/navBar";
import Button from "@/app/components/button"; 
import { useState } from "react"; // Importar useState

export default function Home() {
  const [color, setColor] = useState<"blue" | "green" | "red" | "yellow" | "gray">("gray"); // Estado para el color del rectángulo

  // Función para cambiar el color del rectángulo
  const changeColor = (newColor: "blue" | "green" | "red" | "yellow" | "gray") => {
    setColor(newColor);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Navbar */}
      <Navbar />

      <main className="flex items-center justify-center min-h-[calc(100vh-73px)]">
        {/* Grid container */}
        <div className="grid grid-cols-1 gap-4" style={{ gridTemplateRows: '1fr 1fr' }}>
          {/* Rectangle  */}
          <div
            className={`w-[80vw] h-[30vh] ${color === "blue" ? "bg-blue-500" :
              color === "green" ? "bg-green-500" :
              color === "red" ? "bg-red-500" :
              color === "yellow" ? "bg-yellow-500" :
              "bg-gray-500"
            } transition-all duration-300`}
          ></div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => changeColor("blue")}
              className="w-full h-[12vh] bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Blue
            </button>
            <button
              onClick={() => changeColor("green")}
              className="w-full h-[12vh] bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Green
            </button>
            <button
              onClick={() => changeColor("red")}
              className="w-full h-[12vh] bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Red
            </button>
            <button
              onClick={() => changeColor("yellow")}
              className="w-full h-[12vh] bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
            >
              Yellow
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
