"use client";

import React, { useState, useEffect } from "react";
import { FaHamburger } from "react-icons/fa";
import { SiCoffeescript } from "react-icons/si";
import { IoMdCloseCircle } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  // Close menu if clicked outside the menu area
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (showMenu && e.target.id === "backdrop") {
        setShowMenu(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [showMenu]);

  // Shrinking header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 bg-gray-900 text-white w-full z-50 transition-all duration-300 ${isShrunk ? "py-4" : "py-12"
          }`}
      >
        <div className="mx-auto flex justify-between w-9/12 items-center h-full border-b-teal-300 border-b-2">
          <div className="logo flex items-center gap-3">
            <Link href="/" aria-label="BUY ME A TEA">
              <SiCoffeescript className="text-6xl items-center justify-center" />
            </Link>
            <h1 className="text-3xl font-bold">BUY ME CHIYA </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li className="hover:bg-yellow-300 p-5 hover:text-black">
                <Link href="/" className="text-3xl">Home</Link>
              </li>
              <li className="hover:bg-yellow-300 p-5  hover:text-black">
                <Link href="/about" className="text-3xl">About</Link>
              </li>
              <li className="hover:bg-yellow-300 p-5 hover:text-black ">
                <Link href="/contact" className="text-3xl">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* Hamburger Button for Mobile */}
          <div className="md:hidden">
            <button onClick={handleButtonToggle}>
              <FaHamburger className="text-6xl" />
            </button>
          </div>
        </div>

        {/* Backdrop for outside click */}
        {showMenu && (
          <div
            id="backdrop"
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />
        )}

        {/* Mobile Menu with Slide-in Animation */}
        <nav
          className={`fixed top-0 right-0 h-full bg-gray-800 p-4 w-[70%] transform transition-transform duration-300 ease-in-out z-50 ${showMenu ? "translate-x-1" : "translate-x-full"
            } md:hidden`}
        >
          {/* Close Button */}
          <div className="flex justify-between items-center">
            <h2 className="text-white text-2xl">Menu</h2>
            <button
              onClick={handleButtonToggle}
              className="text-white text-2xl"
            >
              <IoMdCloseCircle className="text-6xl" />
            </button>
          </div>

          <ul className="mt-8 flex flex-col gap-4 items-center bg-slate-700">
            <li>
              <Link href="/" onClick={() => setShowMenu(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setShowMenu(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setShowMenu(false)}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Buttons for Interactions */}
          <div className="mt-6 flex justify-center gap-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => alert("Log In clicked!")}
            >
              Log In
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => alert("Sign Up clicked!")}
            >
              Sign Up
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
