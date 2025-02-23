'use client'
import Navbar from "@/app/components/navBar";
import Button from "@/app/components/button";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState("");

  const handleIncrement = (e: React.FormEvent) => {
    e.preventDefault();
    setCounter(counter + 1);
    setError(""); // Resetea error en increment
  };

  const handleDecrement = (e: React.FormEvent) => {
    e.preventDefault();
    if (counter > 0) {
      setCounter(counter - 1);
      setError(""); // Resetea error si decrement es valido
    } else {
      setError("Input invalido"); // Error si decrement pasa de 0
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
    <main className="flex flex-col min-h-[calc(100vh-73px)] items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800">{counter}</h1>
      {error && <p className="text-red-500 text-lg mt-2">{error}</p>} {/* Msg Error */}
      <form> 
        <button
          type="submit" 
          onClick={handleIncrement}
          className="mt-4 bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors"
        >
          Increase
        </button>
        <button
          type="submit" 
          onClick={handleDecrement}
          className="mt-4 bg-red-600 text-white rounded-md px-4 py-2 hover:bg-red-700 transition-colors"
        >
          Decrease
        </button>
      </form>
    </main>
    </div>
  );
}


