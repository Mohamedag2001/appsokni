"use client"
import React from 'react';

function Services() {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Nos Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m-3 3v1a4 4 0 014 4h4m-4 0a1 1 0 01-1-1h-2m-1 1h2m-3 3h2a1 1 0 001-1v-1a1 1 0 00-1-1h-2m-1 1h2" />
            </svg>
            <h3 className="ml-2 text-xl font-bold">Tenues Parfaites</h3>
          </div>
          <p>Trouvez le look parfait qui correspond à votre personnalité et vous fait sentir confiante chaque jour.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Voir maintenant
          </button>
        </div>
        {/* Autres cartes similaires pour les sacs et les talons */}
      </div>
    </section>
  );
}

export default Services;