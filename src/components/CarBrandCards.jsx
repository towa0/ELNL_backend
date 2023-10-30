import React from "react";
import { Link } from "react-router-dom";
import KiaLogo from "../assets/KiaLogo.png";
import VolvoLogo from "../assets/VolvoLogo.png";
import VolkswagenLogo from "../assets/VolkswagenLogo.png";
import SkodaLogo from "../assets/SkodaLogo.png";
import AudiLogo from "../assets/AudiLogo.png";
import MercedesLogo from "../assets/MercedesLogo.png";

const CarCard = ({ imgSrc, altText, brand }) => (
  <div className="bg-white border rounded-xl w-40 h-40 p-4 sm:w-45 sm:h-45 flex flex-col items-center justify-center hover:shadow-xl">
    <img src={imgSrc} alt={altText} className="w-auto h-[10vh] mb-2" />
    <p className="text-center text-[#e36414] text-lg font-extrabold">{brand}</p>
  </div>
);

const CarCards = () => {
  return (
    <div className="w-full sm:w-4/5 lg:w-3/5 mx-auto mt-[210vh] sm:mt-0 sm:h-[50vh] flex flex-col items-center justify-center">
      <div className="w-full sm:w-full border-b border-gray-300 ]"></div>
      <h2 className="w-full text-[#464646] text-4xl sm:text-5xl mt-4 sm:mt-[10vh] mb-6 sm:mb-[5vh] text-center font-bold">
        Top merken
      </h2>

      <div className="flex flex-wrap justify-evenly gap-4 sm:gap-8">
        <Link to="/Elektrische-Autos?brand=Kia">
          <CarCard imgSrc={KiaLogo} altText="Kia" brand="Kia" />
        </Link>
        <Link to="/Elektrische-Autos?brand=Volvo">
          <CarCard imgSrc={VolvoLogo} altText="Volvo" brand="Volvo" />
        </Link>
        <Link to="/Elektrische-Autos?brand=Volkswagen">
          <CarCard
            imgSrc={VolkswagenLogo}
            altText="Volkswagen"
            brand="Volkswagen"
          />
        </Link>
        <Link to="/Elektrische-Autos?brand=Skoda">
          <CarCard imgSrc={SkodaLogo} altText="Skoda" brand="Skoda" />
        </Link>
        <Link to="/Elektrische-Autos?brand=Audi">
          <CarCard imgSrc={AudiLogo} altText="Audi" brand="Audi" />
        </Link>
        <Link to="/Elektrische-Autos?brand=Mercedes">
          <CarCard imgSrc={MercedesLogo} altText="Mercedes" brand="Mercedes" />
        </Link>
      </div>
      <div className="w-full sm:w-full border-b border-gray-300 mt-6 sm:my-[15vh]"></div>
    </div>
  );
};

export default CarCards;
