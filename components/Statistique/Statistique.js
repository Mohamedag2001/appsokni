"use client"
import React from "react";

function Banner() {
  return (
    <section className="relative bg-gray-800 text-white py-10 bg-cover bg-fixed bg-[url('/Image/Stat.jpg')]">
      {/* Overlay noir */}
      <div className="absolute inset-0 bg-black opacity-55"></div>

      <div className="container mx-auto text-center relative z-10">
        <img
          src="/Image/Taylor Tailor.png"
          alt="Votre Logo"
          className="w-24 h-24 mx-auto mb-4 rounded-full"
        />
        <h2 className="text-4xl font-bold mb-2 text-[#e1c340]">
          9 Ans d&apos;Expérience
        </h2>
        <h3 className="text-2xl font-semibold mb-8 text-[#e1c340]">
          Avec une Qualité Totale
        </h3>
      </div>
    </section>
  );
}

export default Banner;
