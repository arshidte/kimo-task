"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full absolute top-6 left-0 right-0 z-10">
        <div className="rounded-12 bg-white justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-6">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <Image
                  src="/images/Aloha.svg"
                  alt="logo"
                  width="94"
                  height="100"
                ></Image>
              </Link>

              {/* Mobile hamburger */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="/images/close.svg"
                      width={40}
                      height={40}
                      alt="close-btn"
                    />
                  ) : (
                    <Image
                      src="/images/menu.svg"
                      width={40}
                      height={40}
                      alt="hamburger"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "p-12 md:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-auto items-center md:flex">
              <div className="flex">
                <li className="text-black py-2 md:px-6 text-center border-b-2 md:border-b-0">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="text-black py-2 md:px-6 text-center border-b-2 md:border-b-0">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Surfing
                  </Link>
                </li>
                <li className="text-black py-2 md:px-6 text-center border-b-2 md:border-b-0">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Hula
                  </Link>
                </li>
                <li className="text-black py-2 md:px-6 text-center border-b-2 md:border-b-0">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Vulcano
                  </Link>
                </li>
              </div>
              <button className="">Book a trip</button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
