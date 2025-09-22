"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    arrows: false, // Désactive les flèches
  };

  const testimonials = [
   
    {
      testimonial:
        "Machallah,Taychou Couture allie l'authenticité et l elegance.",
      userName: "Mohamed Ag Aboubacrine",
      img: "/Image/mohamed.jpg",
    },
    
    {
      testimonial: "Taychou, tu es la meilleure,Ton entreprise est un modèle de créativité et d originalité..",
      userName: "Marie-Christine Roussel-Dupuy ",
      img: "/Image/Marie.jpg",
    },
    // Ajoutez d'autres témoignages si possible
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Ce que nos clients disent
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Testimonial testimonial={testimonial} key={index} />
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialCarousel;

const Testimonial = ({ testimonial }) => {
  return (
    <div className="text-balance text-[#202735] rounded-lg py-12 min-h-[300px] flex flex-col items-center">
      <div className="w-[70px] h-[70px]">
        {testimonial.img ? (
          <img src={testimonial.img} alt="profile" className="w-full h-full rounded-full" />
        ) : (
          <img
            src="/Image/profile.png"
            alt="profile"
            className="w-full h-full"
          />
        )}
      </div>
      <h2 className="font-bold">{testimonial.userName}</h2>
      <p className="text-center">{testimonial.testimonial}</p>
    </div>
  );
};
