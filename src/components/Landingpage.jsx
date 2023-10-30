import React from "react";
import elnlbg from "../assets/demoBg.png";
import { BiChevronRight } from "react-icons/bi";
import { BsFillCarFrontFill, BsFillLightningFill } from "react-icons/bs";
import { FaChargingStation } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbPigMoney } from "react-icons/tb";

const Homepage = () => {
  return (
    <div className="relative h-full sm:h-[80vh] overflow-hidden">
      <div
        className="bg-cover bg-top h-full w-full absolute top-0 left-0 opacity-40 sm:opacity-80"
        style={{
          backgroundImage: `url(${elnlbg})`,
          zIndex: -1,
        }}
      />
      <div className="bg-transparent sm:bg-[#f6f8fb] z-2 sm:w-[70vh] sm:h-[65vh] rounded-xl shadow-lg p-6 mt-[10vh] sm:ml-[10vh] opacity-90 mx-auto">
        <div className="text-left opacity-100">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#464646]">
            Dé specialist in{" "}
            <span className="text-[#e36414]"><br></br>Elektrische leaseauto's </span>
          </h1>
          <p className="text-md mt-2 sm:mt-4 ">
            Met meer dan <span className="text-[#e36414] font-bold">1200</span>{" "}
            verschillende opties!
          </p>
        </div>
        <div className="mt-[4vh] ">
          <Link to="/Elektrische-Autos" className="block mb-4">
            <div className="flex mb-4 bg-white border shadow-md px-4 py-2 rounded-xl hover:border-[#e36414] opacity-100">
              <BsFillLightningFill size={50} className="text-[#e36414] mr-4" />
              <div className="flex items-center justify-between w-full">
                <div>
                  <div className="text-xl sm:text-3xl font-semibold">
                    Alles Elektrisch
                  </div>
                  <p className="text-[#e36414] text-xs sm:text-base font-bold">
                    alle elektrische lease auto's
                  </p>
                </div>
                <BiChevronRight size={40} className="text-[#e36414] ml-5" />
              </div>
            </div>
          </Link>
          <Link to="/Elektrische-Autos?contract=Private+lease">
            <div className="flex mb-4 bg-white border shadow-md px-4 py-2 rounded-xl hover:border-[#e36414] opacity-100">
              <BsFillCarFrontFill size={50} className="text-[#e36414] mr-4" />
              <div className="flex items-center justify-between w-full">
                <div>
                  <div className="text-xl sm:text-3xl font-semibold">
                    Alles Elektrisch
                  </div>
                  <p className="text-[#e36414] text-xs sm:text-base font-bold">
                    alle elektrische lease auto's
                  </p>
                </div>
                <BiChevronRight size={40} className="text-[#e36414] ml-5" />
              </div>
            </div>
          </Link>
          <Link to="/Elektrische-Autos?contract=Zakelijk">
            <div className="flex mb-4 bg-white border shadow-md px-4 py-2 rounded-xl hover:border-[#e36414] opacity-100">
              <FaChargingStation size={50} className="text-[#e36414] mr-4" />
              <div className="flex items-center justify-between w-full">
                <div>
                  <div className="text-xl sm:text-3xl font-semibold">
                    Alles Elektrisch
                  </div>
                  <p className="text-[#e36414] text-xs sm:text-base font-bold">
                    alle elektrische lease auto's
                  </p>
                </div>
                <BiChevronRight size={40} className="text-[#e36414] ml-5" />
              </div>
            </div>
          </Link>
          <Link to="/Elektrische-Autos?contract=Occasion">
            <div className="flex mb-4 bg-white border shadow-md px-4 py-2 rounded-xl hover:border-[#e36414] opacity-100">
              <TbPigMoney size={50} className="text-[#e36414] mr-4" />
              <div className="flex items-center justify-between w-full">
                <div>
                  <div className="text-xl sm:text-3xl font-semibold">
                    Alles Elektrisch
                  </div>
                  <p className="text-[#e36414] text-xs sm:text-base font-bold">
                    alle elektrische lease auto's
                  </p>
                </div>
                <BiChevronRight size={40} className="text-[#e36414] ml-5" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
