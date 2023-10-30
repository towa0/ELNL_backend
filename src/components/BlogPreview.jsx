import React from "react";
import BGnews from "../assets/zorg-vrouw-baby-featured.png";
import { Link } from "react-router-dom";

const BlogHomepage = () => {
  return (
    <div className="h-screen md:w-4/5 mx-auto mt-[5vh] flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl text-center font-bold sm:mt-[10vh] justify-center text-[#464646] max-w-xs md:max-w-full">
        Lees alle artikelen
      </h2>

      <div className="flex flex-wrap justify-center   w-full mt-8">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 h-[70vh] sm:h-[60vh] bg-white shadow-xl rounded-lg border-2 mr-2 ml-2 mb-[5vh]">
          <div
            className="bg-cover bg-center h-[25vh]"
            style={{ backgroundImage: `url(${BGnews})` }}
          ></div>
          <div className="p-2">
            <p className="text-[#464646] font-bold">Veilig reizen</p>
            <p className="text-[#e36414] font-bold text-xl">
              Hoe rijd je veilig in een bestelbus?
            </p>
            <p className="mt-2 text-lg">
              Het aantal bestelauto's neemt de afgelopen tijd toe, er rijden er
              in Nederland alleen al 1,1 miljoe..
            </p>
            <div className="w-full border-b border-gray-300 my-4"></div>
            <p className="text-[#e36414] text-sm">
              23 oktober - 2 min leestijd
            </p>
            <button className="mt-[5vh] text-[#e36414] font-bold bg-white border-2 border-[#e36414] py-2 w-full sm:w-[14vh] px-4 sm:px-2 rounded-xl hover:bg-[#fff1e7]  transition-colors duration-300">
              Lees verder
            </button>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 h-[70vh] sm:h-[60vh] bg-white shadow-xl rounded-lg border-2 mr-2 ml-2 mb-[5vh]">
          <div
            className="bg-cover bg-center h-[25vh]"
            style={{ backgroundImage: `url(${BGnews})` }}
          ></div>
          <div className="p-2">
            <p className="text-[#464646] font-bold">Veilig reizen</p>
            <p className="text-[#e36414] font-bold text-xl">
              Hoe rijd je veilig in een bestelbus?
            </p>
            <p className="mt-2 text-lg">
              Het aantal bestelauto's neemt de afgelopen tijd toe, er rijden er
              in Nederland alleen al 1,1 miljoe..
            </p>
            <div className="w-full border-b border-gray-300 my-4"></div>
            <p className="text-[#e36414] text-sm">
              23 oktober - 2 min leestijd
            </p>
            <button className="mt-[5vh] text-[#e36414] font-bold bg-white border-2 border-[#e36414] py-2 w-full sm:w-[14vh] px-4 sm:px-2 rounded-xl hover:bg-[#fff1e7]  transition-colors duration-300">
              Lees verder
            </button>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 h-[70vh] sm:h-[60vh] bg-white shadow-xl rounded-lg border-2 mr-2 ml-2 mb-[5vh]">
          <div
            className="bg-cover bg-center h-[25vh]"
            style={{ backgroundImage: `url(${BGnews})` }}
          ></div>
          <div className="p-2">
            <p className="text-[#464646] font-bold">Veilig reizen</p>
            <p className="text-[#e36414] font-bold text-xl">
              Hoe rijd je veilig in een bestelbus?
            </p>
            <p className="mt-2 text-lg">
              Het aantal bestelauto's neemt de afgelopen tijd toe, er rijden er
              in Nederland alleen al 1,1 miljoe..
            </p>
            <div className="w-full border-b border-gray-300 my-4"></div>
            <p className="text-[#e36414] text-sm">
              23 oktober - 2 min leestijd
            </p>
            <button className="mt-[5vh] text-[#e36414] font-bold bg-white border-2 border-[#e36414] py-2 w-full sm:w-[14vh] px-4 sm:px-2 rounded-xl hover:bg-[#fff1e7]  transition-colors duration-300">
              Lees verder
            </button>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 h-[70vh] sm:h-[60vh] bg-white shadow-xl rounded-lg border-2 mr-2 ml-2 mb-[5vh]">
          <div
            className="bg-cover bg-center h-[25vh]"
            style={{ backgroundImage: `url(${BGnews})` }}
          ></div>
          <div className="p-2">
            <p className="text-[#464646] font-bold">Veilig reizen</p>
            <p className="text-[#e36414] font-bold text-xl">
              Hoe rijd je veilig in een bestelbus?
            </p>
            <p className="mt-2 text-lg">
              Het aantal bestelauto's neemt de afgelopen tijd toe, er rijden er
              in Nederland alleen al 1,1 miljoe..
            </p>
            <div className="w-full border-b border-gray-300 my-4"></div>
            <p className="text-[#e36414] text-sm">
              23 oktober - 2 min leestijd
            </p>
            <button className="mt-[5vh] text-[#e36414] font-bold bg-white border-2 border-[#e36414] py-2 w-full sm:w-[14vh] px-4 sm:px-2 rounded-xl hover:bg-[#fff1e7]  transition-colors duration-300">
              Lees verder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHomepage;
