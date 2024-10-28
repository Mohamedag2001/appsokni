"use client";

export default function CollectionSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-8 bg-white">
      {/* Image Section */}
      <div className="lg:w-1/2 p-4">
        <img
          src="/Image/debbyrite-collection.jpg"
          alt="Debbyrite Collection"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 p-6">
        <h2 className="text-3xl font-bold text-red-600 mb-4">
         Agadez_Sokni
        </h2>
        <p className="text-gray-700 mb-4">
          Where style meets quality. We specialize in offering a curated
          selection of outfits, shoes, and heels that cater to your unique
          fashion sense. Our mission is to provide you with high-quality,
          trendy pieces that make you feel confident and stylish. From everyday
          wear to special occasions, our collections are designed to suit every
          aspect of your life.
        </p>
        <p className="text-gray-700 mb-8">
          At Debbyrite Collection, we believe in delivering exceptional value
          and a seamless shopping experience. Join us in celebrating fashion
          and find your next favorite look today.
        </p>
        <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition">
          Learn more
        </button>
      </div>
    </section>
  );
}
