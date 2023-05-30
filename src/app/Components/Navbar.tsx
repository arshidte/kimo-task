"use client";
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100">
      <div className="">
        <nav className="bg-white absolute md:rounded-12 w-full z-10 md:mt-6">
          <div className="flex items-center justify-between py-4 px-4">
            <div className="flex items-center">
              <Image src="/images/Aloha.svg" alt="Logo" width={100} height={100} />
              {/* <span className="ml-2 font-bold text-lg">Navbar</span> */}
            </div>
            <div className="hidden md:flex">
              <ul className="flex space-x-4">
                <li className="nav-item">Home</li>
                <li className="nav-item">Surfing</li>
                <li className="nav-item">Hula</li>
                <li className="nav-item">Vulcano</li>
              </ul>
              <button className="ml-4 btn bg-green text-white">Book a trip</button>
            </div>
            <div className="md:hidden z-30">
              <button
                className="btn"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        {isOpen && (
          <div className="fixed right-0 bg-white w-72 h-screen transform translate-x-0 transition-transform duration-300 md:hidden z-20">
            <ul className="flex flex-col space-y-4 px-4 py-2">
              <li className="nav-item">Item 1</li>
              <li className="nav-item">Item 2</li>
              <li className="nav-item">Item 3</li>
              <li className="nav-item">Item 4</li>
            </ul>
            <button className="mt-4 mx-4 btn">Button</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
