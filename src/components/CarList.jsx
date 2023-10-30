import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../index.css";
import { FcCheckmark } from "react-icons/fc";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { AiOutlineCheckCircle} from "react-icons/ai";

const brands = [
  "Mg",
  "Skoda",
  "Ford",
  "Fiat",
  "Audi",
  "Toyota",
  "Mercedes",
  "Mini",
  "Peugeot",
  "Nissan",
  "Hyundai",
  "Mercedes-Benz",
  "Subaru",
  "Opel",
  "Mazda",
  "Tesla",
  "Volvo",
  "Dacia",
  "Kia",
  "Citroen",
  "Jeep",
  "Cupra",
  "Honda",
  "Bmw",
  "Volkswagen",
  "Renault",
];

brands.sort();

function CarList() {
  const location = useLocation();
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [sortOrder, setSortOrder] = useState("laag-hoog");
  const [page, setPage] = useState(1);
  const [perPage] = useState(15);
  const [popupCar, setPopupCar] = useState(null);
  const queryParams = new URLSearchParams(location.search);
  const selectedBrands = queryParams.getAll("brand");
  const selectedFilter = queryParams.get("filter") || "Alle";
  const selectedPage = parseInt(queryParams.get("page")) || 1;
  const selectedSortOrder = queryParams.get("sortOrder") || "laag-hoog";
  const [selectedContract, setSelectedContract] = useState("Alle");
  const history = useNavigate();
  const [isBrandFilterOpen, setIsBrandFilterOpen] = useState(false);

  useEffect(() => {
      fetch("https://elnlbackend-production.up.railway.app/api/cars")
    //fetch("http://localhost:3001/api/cars")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((car) => ({
          ...car,
          Price: car.Price.replace(",", "."),
        }));
        setCars(formattedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    let filtered = cars;
    if (selectedFilter && selectedFilter !== "Alle") {
      filtered = filtered.filter(
        (car) => car.Partner.toLowerCase() === selectedFilter.toLowerCase()
      );
    }

    if (selectedContract && selectedContract !== "Alle") {
      filtered = filtered.filter(
        (car) => car.LeaseType.toLowerCase() === selectedContract.toLowerCase()
      );
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((car) => selectedBrands.includes(car.Brand));
    }

    if (sortOrder === "hoog-laag") {
      filtered = filtered.sort((a, b) => {
        return parseFloat(b.Price) - parseFloat(a.Price);
      });
    } else {
      filtered = filtered.sort((a, b) => {
        return parseFloat(a.Price) - parseFloat(b.Price);
      });
    }

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    setFilteredCars(filtered.slice(startIndex, endIndex));
  }, [
    selectedFilter,
    sortOrder,
    cars,
    page,
    perPage,
    selectedContract,
    selectedBrands,
  ]);

  useEffect(() => {
    if (selectedPage !== page) {
      setPage(selectedPage);
    }

    if (selectedSortOrder !== sortOrder) {
      setSortOrder(selectedSortOrder);
    }
  }, [selectedPage, selectedSortOrder]);

  const handleFilterChange = (selectedValue) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("filter", selectedValue);
    queryParams.delete("page");
    window.location.search = queryParams.toString();
  };

  const handleBrandFilterChange = (selectedBrands) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.delete("brand");
    selectedBrands.forEach((brand) => {
      queryParams.append("brand", brand);
    });
    queryParams.delete("page");
    history({ search: queryParams.toString() });
  };

  const toggleBrandFilter = () => {
    setIsBrandFilterOpen(!isBrandFilterOpen);
  };

  const handleBrandCheckboxChange = (event) => {
    const brand = event.target.value;
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      : [...selectedBrands, brand];
    handleBrandFilterChange(updatedBrands);
  };

  const handleContractChange = (selectedValue) => {
    setSelectedContract(selectedValue);
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("contract", selectedValue);
    queryParams.delete("page");
    history({ search: queryParams.toString() });
  };

  const handleSortChange = () => {
    const newSortOrder = sortOrder === "laag-hoog" ? "hoog-laag" : "laag-hoog";
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("sortOrder", newSortOrder);
    queryParams.delete("page");
    history({ search: queryParams.toString() });
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      const prevPage = page - 1;
      const queryParams = new URLSearchParams(location.search);
      queryParams.set("page", prevPage.toString());
      history({ search: queryParams.toString() });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    const nextPage = page + 1;
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("page", nextPage.toString());
    history({ search: queryParams.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenPopup = (car) => {
    setPopupCar(car);
  };

  const handleClosePopup = () => {
    setPopupCar(null);
  };

  useEffect(() => {
    if (popupCar) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [popupCar]);

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl sm:text-5xl font-bold mb-8 mt-[12vh] ms:mt-[8vh] text-[#464646]">
        Vind jouw ideale{" "}
        <span className="text-[#e36414]">Elektrische Leaseauto</span> vandaag!
      </h1>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
        <select
          value={selectedFilter || "e"}
          onChange={(e) => handleFilterChange(e.target.value)}
          className="border p-2 w-full sm:w-1/5 rounded-md"
        >
          <option value="Alle">Alle Partners</option>
          <option value="Athlon">Athlon</option>
          <option value="JustLease">JustLease</option>
          <option value="Leasem">Leasem</option>
        </select>
        <select
          value={selectedContract || "e"}
          onChange={(e) => handleContractChange(e.target.value)}
          className="border p-2 w-full sm:w-1/5 rounded-md"
        >
          <option value="Alle">Alle Contracten</option>
          <option value="Zakelijk">Zakelijk</option>
          <option value="Occasion">Occasion</option>
          <option value="Private lease">Private Lease</option>
        </select>
        <button
          onClick={handleSortChange}
          className="text-[#e36414] font-bold bg-white border-2 border-[#e36414] py-2 px-4 rounded-xl hover:bg-[#fff1e7]  transition-colors duration-300"
        >
          Sorteer: {sortOrder === "laag-hoog" ? "Laag-Hoog" : "Hoog-Laag"}
        </button>
      </div>

      <div className="mb-4 bg-white shadow-lg border-2">
        <button
          onClick={toggleBrandFilter}
          className="w-full p-4 flex justify-between items-center"
        >
          <span className="font-bold">Filter op Merk:</span>
          <span className="text-2xl text-[#e36414]">
            {isBrandFilterOpen ? <GoTriangleUp /> : <GoTriangleDown />}
          </span>
        </button>
        {isBrandFilterOpen && (
          <div className="grid grid-cols-1 sm:grid-cols-5 p-4">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  value={brand}
                  checked={selectedBrands.includes(brand)}
                  onChange={handleBrandCheckboxChange}
                />
                <span className="ml-2">{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-8 text-[#464646] sm:ml-8">
        {filteredCars.map((car) => (
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

            <a onClick={() => handleOpenPopup(car)}>
              <img
                src={car.ImageUrls}
                alt={car.Name}
                className="w-[40vh] h-auto mx-auto cursor-pointer"
              />
            </a>
            <div className="w-full h-[3vh] mt-[4vh] sm:mt-[4vh]">
              <p className="flex font-bold justify-between">
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

      {popupCar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleClosePopup}
        >
          <div
            className="bg-white p-8 rounded-lg w-full h-screen sm:h-auto sm:w-2/3 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClosePopup}
              className="self-end text-[#e36414] text-2xl cursor-pointer font-bold"
            >
              X
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold">
              {popupCar.CarNameFull}
            </h2>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e36414]">
              €{popupCar.Price}p/m
            </h2>
            <div className="flex flex-col sm:items-start">
              <img
                src={popupCar.ImageUrls}
                alt={popupCar.Name}
                className="w-full sm:w-[50vh] h-auto mr-4 mt-2"
              />
              <div className="w-full bg-[#f6f8fb] border-2 p-2 rounded-lg mt-2 sm:mt-0">
                <div className="flex flex-wrap">
                  {popupCar.Data.split(",")
                    .slice(0, 8)
                    .map((item, index) => (
                      <p
                        key={index}
                        className="flex w-1/2 sm:w-1/4 text-xs sm:text-sm"
                      >
                        <span className="text-[#e36414] font-bold mr-2">
                          <FcCheckmark />
                        </span>
                        {item.trim()}
                      </p>
                    ))}
                </div>
              </div>
            </div>
            <div className="mt-[4vh] sm:mt-4 flex justify-end">
              <button
                onClick={() => window.open(popupCar.CarUrl, "_blank")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold bg-[#e36414] border-2 border-[#e36414] py-2 w-full sm:w-[20vh] px-11 rounded-xl hover:bg-[#ffa666] transition-colors duration-300 mr-auto"
              >
                Reserveer nu
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="mt-4 flex justify-center">
        <button
          onClick={handlePreviousPage}
          className="border-2 border-[#e36414] text-[#e36414] px-4 py-2 rounded-lg w-auto sm:w-[10vh] font-bold cursor-pointer hover:bg-[#fff1e7]  transition-colors duration-300"
          disabled={page === 1}
        >
          Vorige
        </button>
        <button
          onClick={handleNextPage}
          className="border-2 border-[#e36414] text-[#e36414] ml-4 px-4 py-2 rounded-lg w-auto sm:w-[10vh] font-bold cursor-pointer hover:bg-[#fff1e7]  transition-colors duration-300"
          disabled={filteredCars.length < perPage}
        >
          Volgende
        </button>
      </div>
    </div>
  );
}

export default CarList;
