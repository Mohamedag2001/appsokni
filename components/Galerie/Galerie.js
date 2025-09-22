"use client";
import React from "react";

const Gallery = () => {
  const images = [
    "/Image/galerie9.jpg",
    "/Image/galerie10.jpg",
    "/Image/galerie11.jpg",
    "/Image/galerie12.jpg",
    "/Image/Galerie13.jpg",
    "/Image/galerie14.jpg",
    "/Image/galerie15.jpg",
    "/Image/galerie16.jpg",
    "/Image/galerie17.jpg",
    "/Image/Apropos.jpeg",
    "/Image/Galerie.png.jpeg",
  ];

  const whatsappLink =
    "https://wa.me/22790096530?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20cette%20oeuvre.";

  return (
    <section id="Galerie" className="min-h-screen container mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 mt-20">Notre Collection</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl transition-transform transform hover:scale-105 shadow-lg"
            style={{ aspectRatio: "1/1" }}
          >
            <img
              src={image}
              alt={`Collection Item ${index + 1}`}
              className="w-full h-full object-cover"
            />

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2
                         bg-gradient-to-r from-green-400 via-emerald-500 to-indigo-600
                         text-white px-6 py-3 rounded-full text-sm sm:text-base font-semibold
                         shadow-2xl backdrop-blur-md border border-white/20
                         flex items-center gap-3
                         hover:scale-105 hover:shadow-3xl transition-transform duration-300
                         overflow-hidden"
            >
              <span className="relative z-10 text-lg">🛒</span>
              <span className="relative z-10">Acheter</span>

              {/* halo décoratif (pointer-events-none pour ne pas bloquer le clic) */}
              <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
