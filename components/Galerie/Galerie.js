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

<<<<<<< HEAD
  // Lien WhatsApp de base (à personnaliser avec votre numéro WhatsApp)
  const whatsappLink = "https://wa.me/33612345678?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20cette%20oeuvre.";
=======
  // Lien WhatsApp de base
  const whatsappLink = "https://wa.me/22790096530?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20cette%20oeuvre.";
>>>>>>> 0ac806379d3b96801dc1e031579a1e0dbb0df6f9

  return (
    <section id="Galerie" className="min-h-screen container mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 mt-20">Notre Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg transition-transform transform hover:scale-105 shadow-lg"
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
<<<<<<< HEAD
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm shadow hover:bg-green-600 transition"
=======
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded-full text-base font-semibold shadow-lg hover:bg-green-700 transition duration-300"
>>>>>>> 0ac806379d3b96801dc1e031579a1e0dbb0df6f9
            >
              Acheter
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
