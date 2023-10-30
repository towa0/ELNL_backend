import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const AllLinks = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionId) => {
    if (activeSection === sectionId) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionId);
    }
  };

  const sections = [
    {
      id: "accordion-collapse-heading-1",
      title: "Elektrische Private Lease",
      content: (
        <div>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 1
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 2
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 3
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 4
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 5
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 6
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 7
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 8
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 9
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 10
            </Link>
          </p>
        </div>
      ),
    },
    {
      id: "accordion-collapse-heading-2",
      title: "Elektrische Lease merken",
      content: (
        <div>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 1
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 2
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 3
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 4
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 5
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 6
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 7
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 8
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 9
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 10
            </Link>
          </p>
        </div>
      ),
    },
    {
      id: "accordion-collapse-heading-3",
      title: "Elektrische Private Lease",
      content: (
        <div>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 1
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 2
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 3
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 4
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 5
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 6
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 7
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 8
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 9
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 10
            </Link>
          </p>
        </div>
      ),
    },
    {
      id: "accordion-collapse-heading-4",
      title: "Elektrische Private Lease",
      content: (
        <div>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 1
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 2
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 3
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 4
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 5
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 6
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 7
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 8
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 9
            </Link>
          </p>
          <p>
            <Link to="/demo" className={`hover:underline cursor-pointer`}>
              link 10
            </Link>
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full px-4 md:px-8 xl:px-0 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl h-auto mx-auto mt-4 mb-[34vh] sm:mb-10">
      <h1 className="text-3xl md:text-4xl text-center font-bold mt-10 mb-6 text-[#464646]">
        Informatie pagina's
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:h-[30vh]">
        {sections.map((section) => (
          <div key={section.id}>
            <h2>
              <button
                className="flex mt-4 bg-white p-4 rounded-lg shadow-md mx-auto border w-full"
                type="button"
                onClick={() => toggleSection(section.id)}
              >
                {activeSection === section.id ? (
                  <BsDash className="my-auto mr-1 text-[#e36414]" size={20} />
                ) : (
                  <BsPlus className="my-auto mr-1 text-[#e36414]" size={20} />
                )}{" "}
                <span className="text-[#464646] font-bold">
                  {section.title}
                </span>
              </button>
            </h2>
            <div
              id={section.id}
              className={`overflow-y-auto max-h-[400px] ${
                activeSection === section.id
                  ? "bg-white border p-4 rounded-lg shadow-md text-[#464646] mx-auto"
                  : "hidden"
              }`}
            >
              <div className="space-y-2 w-[15vh] sm:w-[20vh]">
                {section.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllLinks;
