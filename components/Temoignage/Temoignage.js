"use client";
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      quote: 'I always receive compliments whenever I wear their designs. Highly recommend for anyone looking to elevate their wardrobe.',
    },
    {
      quote: 'Their customer service is outstanding. I couldn’t be happier with my purchase!',
    },
    {
      quote: 'The quality is top-notch. I always return to buy more.',
    },
    // Ajoutez d'autres témoignages si possible
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Ce que nos clients disent</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="text-balance text-[#202735] rounded-lg py-12 min-h-[300px]">
            <p className="text-center">{testimonial.quote}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialCarousel;
