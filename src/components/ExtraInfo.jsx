import React from "react";
import { AiFillStar } from "react-icons/ai";
import { RiStarSFill } from "react-icons/ri";

const Beoordeling = () => {
  const testimonials = [
    {
      id: 1,
      name: "Annelies Jansen",
      rating: 3,
      comment:
        "De service was prima en de auto voldeed aan mijn verwachtingen. Ik zou het zeker aanraden!",
      image:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Pieter van der Berg",
      rating: 4,
      comment:
        "Ik ben erg tevreden met de leaseauto. Goede prijs-kwaliteitverhouding en vriendelijke medewerkers.",
      image:
        "https://images.pexels.com/photos/1754986/pexels-photo-1754986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Linda de Vries",
      rating: 5,
      comment:
        "Geweldige ervaring met het leasen van een jullie elektrische auto's. Het was gemakkelijk en snel geregeld.",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Jan Bakker",
      rating: 4,
      comment:
        "Prima service. Zeker een aanrader voor het leasen van een elektrische autos.",
      image:
        "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="md:w-3/5 mx-auto mt-10 sm:mt-0 px-4">
      <div className="w-full mb-16 mt-[10vh] border-b border-gray-300"></div>
      <h2 className="flex text-3xl sm:text-4xl font-bold text-center justify-center my-8 text-[#464646]">
      <AiFillStar className="text-[#e36414] mr-1" size={35}></AiFillStar>
        Klantenbeoordelingen
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-4 rounded-lg shadow-xl border-2 transform hover:scale-105 transition-transform bg-white"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <h3 className="text-lg font-bold text-[#464646]">
                  {testimonial.name}
                </h3>
              </div>
              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <RiStarSFill key={index} className="w-4 h-4 text-[#e36414]" />
                ))}
              </div>
            </div>
            <p className="text-gray-600">{testimonial.comment}</p>
          </div>
        ))}
      </div>
      <div className="w-full mt-[10vh] border-b border-gray-300"></div>
    </div>
  );
};

export default Beoordeling;
