import React, { useState, useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

function DemoCards() {
  const [cars, setCars] = useState([]);

  const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  useEffect(() => {
    fetch("https://elnlbackend-production.up.railway.app/api/cars")
    //fetch("http://localhost:3001/api/cars")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((car) => ({
          ...car,
          Price: car.Price.replace(",", "."),
        }));

        const groupedCars = formattedData.reduce((groups, car) => {
          const partner = car.Partner;
          if (!groups[partner]) {
            groups[partner] = [];
          }
          groups[partner].push(car);
          return groups;
        }, {});

        const selectedCars = [];

        const partners = ["Leasem", "JustLease", "Athlon"];

        for (const partner of partners) {
          const partnerCars = groupedCars[partner];
          if (partnerCars) {
            const shuffledCars = shuffleArray(partnerCars);
            const uniqueCars = shuffledCars
              .filter((car, index, array) => {
                return array.findIndex((c) => c.Name === car.Name) === index;
              })
              .slice(0, 3);

            selectedCars.push(...uniqueCars);
          }
        }

        setCars(selectedCars);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto p-4 sm:mt-[10vh]">
      <div className="flex flex-col items-center justify-center mb-4 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#464646] sm:mb-[2vh]">
          De populairste <span className="text-[#e36414]">leaseauto's</span>
        </h1>
        <p className="text-sm sm:text-md">
          Kies uit het grootste <span className="font-bold">Private Lease</span>{" "}
          aanbod van Nederland
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 text-[#464646]">
        {cars.map((car) => (
          <li
            key={car._id.$oid}
            className="border-2 px-4 py-2 rounded-lg bg-white hover:shadow-lg h-auto sm:w-[45vh] "
          >
            <p className="text-[#464646] font-bold text-sm flex justify-between">
              {car.LeaseType}
              <p>
                <img
                  src={car.PartnerLogo}
                  alt={car.Name}
                  className="w-auto h-6"
                />
              </p>
            </p>
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">{car.Name}</h2>
            </div>
            <h3 className="text-4xl font-bold text-[#e36414]">
              €{car.Price}
              <span className="text-sm">p/m</span>
            </h3>

            <a>
              <img
                src={car.ImageUrls}
                alt={car.Name}
                className="w-[40vh] h-auto mx-auto cursor-pointer"
              />
            </a>
            <div className="w-full h-[3vh] mt-[4vh] sm:mt-[4vh] al">
              <p className="flex font-bold justify-around">
                <p className="flex text-sm sm:text-md">
                  <AiOutlineCheckCircle className="text-[#e36414]" size={20} />{" "}
                  All-risk
                </p>
                <p className="flex text-sm sm:text-md">
                  <AiOutlineCheckCircle className="text-[#e36414]" size={20} />{" "}
                  Wegenbelasting
                </p>
                <p className="flex text-sm sm:text-md">
                  <AiOutlineCheckCircle className="text-[#e36414]" size={20} />{" "}
                  Onderhoud
                </p>
              </p>
            </div>
            <div className="flex justify-between mt-5 sm:mt-0">
              <p className="w-full h-[6vh] sm:h-[5vh] flex flex-col justify-end">
                <button
                  onClick={() => window.open(car.CarUrl, "_blank")}
                  className="text-[#e36414] font-bold bg-white border-2 border-[#e36414] sm:py-2 w-full h-[6vh] px-4 rounded-xl hover:bg-[#fff1e7] transition-colors duration-300"
                >
                  Reserveer nu
                </button>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DemoCards;
