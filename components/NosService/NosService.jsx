"use client";
import React from "react";
import "../NosService/NosService.css";

const data = [
  {
    title: "Prêt-à-porter traditionnel",
    description:
      "Une collection de robes traditionnelles touaregs prêts à l'emploi, alliant tradition et confort pour un usage quotidien ou des occasions spéciales.",
    img: "/Image/galerie11.jpg",
  },
  {
    title: "Retouches et personnalisation",
    description:
    "Adaptation et réparation de vêtements, avec possibilité de les personnaliser avec des motifs traditionnels.",
    img: "/Image/Galerie9.jpg",
  },
  {
    title: "Confection, stylisme et modélisme",
    description:
    "Création de vêtements uniques en alliant savoir-faire traditionnel kel timahight et techniques modernes.",
    img: "/Image/galerie12.jpg",
  },
];

function Services() {
  return (
    <section
      id="NosService"
      className="flex flex-col items-center justify-center p-8 bg-white mb-20"
    >
      <h2 className="text-5xl font-bold text-center mb-20 mt-20 md:text-5xl sm:text-2xl pb-2">
        Nos Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container">
        {data.map((s, i) => (
          <SingleService key={i} title={s.title} description={s.description} image={s.img} />
        ))}
        {/* <div className="bg-white shadow-2xl rounded-lg p-6 h-64 flex flex-col justify-between">
          <div className="flex items-center mb-4 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m-3 3v1a4 4 0 014 4h4m-4 0a1 1 0 01-1-1h-2m-1 1h2m-3 3h2a1 1 0 001-1v-1a1 1 0 00-1-1h-2m-1 1h2"
              />
            </svg>
            <h3 className="text-xl font-bold">Tenues Parfaites</h3>
          </div>
          <p>
            Trouvez le look parfait qui correspond à votre personnalité et vous
            fait sentir confiante chaque jour.
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-lg p-6 h-64 flex flex-col justify-between">
          <div className="flex items-center mb-4 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m-3 3v1a4 4 0 014 4h4m-4 0a1 1 0 01-1-1h-2m-1 1h2m-3 3h2a1 1 0 001-1v-1a1 1 0 00-1-1h-2m-1 1h2"
              />
            </svg>
            <h3 className="ml-2 text-xl font-bold">Tenues Parfaites</h3>
          </div>
          <p>
            Trouvez le look parfait qui correspond à votre personnalité et vous
            fait sentir confiante chaque jour.
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-lg p-6 h-64 flex flex-col justify-between">
          <div className="flex items-center mb-4 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m-3 3v1a4 4 0 014 4h4m-4 0a1 1 0 01-1-1h-2m-1 1h2m-3 3h2a1 1 0 001-1v-1a1 1 0 00-1-1h-2m-1 1h2"
              />
            </svg>
            <h3 className="ml-2 text-xl font-bold">Tenues Parfaites</h3>
          </div>
          <p>
            Trouvez le look parfait qui correspond à votre personnalité et vous
            fait sentir confiante chaque jour.
          </p>
        </div> */}
      </div>
    </section>
  );
}

export default Services;

const SingleService = ({ title, description, image = "" }) => {
  return (
    <div className="bg-white shadow-2xl rounded-lg min-h-64 flex flex-col justify-around">
      <div className="h-64">
        <img
          src={image}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m-3 3v1a4 4 0 014 4h4m-4 0a1 1 0 01-1-1h-2m-1 1h2m-3 3h2a1 1 0 001-1v-1a1 1 0 00-1-1h-2m-1 1h2"
            />
          </svg>
          <h3 className="ml-2 text-xl font-bold">{title}</h3>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};
