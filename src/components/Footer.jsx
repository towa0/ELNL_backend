import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer class="bg-[#f6f8fb] border-2">
      <div class="mx-auto w-full">
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5">
          <div>
            <h2 class="mb-6 text-md font-bold text-[#e36414]">Ons aanbod</h2>
            <ul class="text-[#464646] font-medium">
              <li class="mb-4">
                <a href="/Elektrische-Autos" class=" hover:underline">
                  Alle merken
                </a>
              </li>
              <li class="mb-4">
                <a href="/Elektrische-Autos?contract=Private+lease" class="hover:underline">
                  Private Lease
                </a>
              </li>
              <li class="mb-4">
                <a href="/Elektrische-Autos?contract=Zakelijk" class="hover:underline">
                  Financial Lease
                </a>
              </li>
              <li class="mb-4">
                <a href="/Elektrische-Autos?contract=Occasion" class="hover:underline">
                  Occasion Lease
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-md font-bold text-[#e36414]">
              Zakelijk leasen
            </h2>
            <ul class="text-[#464646] font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Discord Server
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Twitter
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Facebook
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-md font-bold text-[#e36414]">Over ons</h2>
            <ul class="text-[#464646] font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Locatie
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Licensing
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-md font-bold text-[#e36414]">Private lease</h2>
            <ul class="text-[#464646] font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  iOS
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Android
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Windows
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  MacOS
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-md font-bold text-[#e36414]">Ove ons</h2>
            <ul class="text-[#464646] font-medium">
              <li class="mb-4">
                <a>
                  <span className="font-bold">Locatie:</span>
                  <br></br> Spijkernisse 3205 LA
                </a>
              </li>

              <li class="mb-4">
                <a>
                  <span className="font-bold">Telefoonnummer:</span>
                  <br></br> 0634608126
                </a>
              </li>
              <li class="mb-4">
                <a>
                  <span className="font-bold">E-mail:</span>
                  <br></br> info@elektrische-lease.nl
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="px-4 py-6 bg-[#e36414] md:flex md:items-center md:justify-between">
          <span class="text-sm text-white font-bold sm:text-center">
            © 2023 <a href="">ElektrischeLease™</a>. All Rights Reserved.
          </span>
          <div className="w-[50%] flex mx-auto sm:mx-0 sm:justify-end">
            <p className="text-white flex space-x-2">
              <AiFillFacebook size={40} />
              <AiFillLinkedin size={40} />
              <AiFillInstagram size={40} />
              <RiTwitterXFill size={38} />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
