"use client"

export default function Apropos() {
  return (
    <section
      id="Apropos"
      className="flex flex-col items-center justify-center p-8 bg-white mt-20 shadow-2xl"
    >
      {/* Titre de la section */}
      <h2 className="text-5xl font-bold md:text-5xl sm:text-2xl text-center mb-8">
        À propos
      </h2>

      {/* Flex container pour espacer les divs */}
      <div className="flex flex-col lg:flex-row w-full items-center justify-between ms-5">
        {/* Image Section */}
        <div className="lg:w-1/3 p-4 flex justify-center items-center border w-full">
          <img
            src="/Image/AproposImg.jpeg"
            alt="Debbyrite Collection"
            className="h-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-4xl border-4 border-[#e1c340] shadow-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 p-6 flex flex-col justify-center items-center lg:items-start">
          <div className="flex justify-center items-center mb-4 h-[100px] w-[100px]">
            <img
              alt="Votre entreprise"
              src="/Image/Taylor Tailor.png"
              className="h-full w-full object-cover rounded-full"
            />
          </div>

          <p className="text-gray-700 mb-4">
            <strong>À propos de Taychou Couture</strong>
            <br />
            Bienvenue chez Taychou Couture, votre destination incontournable
            pour la couture traditionnelle et moderne, enracinée dans la riche
            culture d&apos;Agadez et du monde kel timajight (Touaregs). Nous
            sommes fiers de marier habilement les techniques de couture
            ancestrales avec des influences contemporaines pour offrir des
            créations uniques et élégantes. Notre entreprise est dédiée à
            l&apos;art de la couture, en préservant les savoir-faire
            traditionnels tout en intégrant des designs modernes. Chaque pièce
            est méticuleusement confectionnée pour refléter l&apos;héritage culturel
            kel timajight tout en répondant aux besoins de la mode actuelle.
          </p>
          <p className="text-gray-700 mb-8">
            Explorez notre collection et découvrez comment Taychou Couture allie
            l&apos;authenticité et l&apos;innovation pour vous offrir des
            vêtements qui racontent une histoire et incarnent le style et
            l&apos;élégance.
          </p>
        </div>
      </div>
    </section>
  );
}
