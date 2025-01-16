"use client";
import React from "react";

const Gallery = () => {
  const images = [
    "/Image/Apropos.jpeg",
    "/Image/Galerie.png.jpeg",
    "/Image/Galerie2.png.jpeg",
    "/Image/Galerie3.png.jpeg",
    "/Image/Galerie4.png.jpeg",
    "/Image/galerie5.jpg",
    "/Image/galerie6.jpg",
    "/Image/galerie7.jpg",
    "/Image/galerie8.jpg",
    "/Image/galerie9.jpg",
    "/Image/galerie10.jpg",
    "/Image/galerie11.jpg",
    "/Image/galerie12.jpg",
    "/Image/galerie13.jpg",
    "/Image/galerie14.jpg",
    "/Image/galerie15.jpg",
    "/Image/galerie16.jpg",

  ];

  return (
    <section id="Galerie" className="min-h-screen container mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-8 mt-20">Notre Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 shadow-2xl p-4 rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg transition-transform transform hover:scale-105"
            style={{ aspectRatio: "1/1" }} // Définit un carré parfait pour chaque image
          >
            <img
              src={image}
              alt={`Collection Item ${index + 1}`}
              className="w-full h-full object-cover" // Ajuste l'image pour couvrir tout l'espace du conteneur
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
