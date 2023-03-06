import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="flex-wrap justify-between items-end z-10 h-24 w-full px-20 absolute md:flex md:mt-0">
      <h1 className="flex h-10 justify-between font-bold text-2xl mt-14 items-center cursor-pointer md:mt-0">
        <Link to="/" className="font-outfit text-white antialiased">
          AnimeBinge
        </Link>
        <span className="text-white flex h-6 font-bold text-2xl md:hidden">
          <button onClick={toggleNav}>
            <FaBars />
          </button>
        </span>
      </h1>

      <nav
        className={`justify-end md:flex z-[-1] md:z-auto opacity-0 md:opacity-100 transition-all ease-in-out -top-96 ${
          showNav ? "top-24 md:top-0 opacity-100" : ""
        }`}
      >
        <ul className="items-center md:flex md:space-x-3 xl:space-x-7 lg:space-x-14 md:my-0 ">
          <li className="my-5 md:my-0">
            <Link
              to="/"
              className="nav-link font-normal text-base tracking-tighter antialiased underline-offset-8 hover:underline"
            >
              Home
            </Link>
          </li>
          <li className="my-5 md:my-0">
            <Link
              to="/discovery"
              className="nav-link font-normal text-base tracking-tighter antialiased underline-offset-8 hover:underline"
            >
              Discover
            </Link>
          </li>
          <li className="my-5 md:my-0">
            <Link
              to="/about"
              className="nav-link font-normal text-base tracking-tighter antialiased underline-offset-8 hover:underline"
            >
              About Us
            </Link>
          </li>
          <li className="my-5 md:my-0">
            <button
              className="nav-link font-normal text-base tracking-tighter antialiased rounded-md w-28 h-11 border-solid border-white border border-sm hover:bg-white hover:text-black"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </li>
          <li className="my-5 md:my-0">
            <button
              className="nav-link font-normal text-base tracking-tighter antialiased rounded-md w-28 h-11 border-solid border-sm button-blue hover:bg-white hover:text-black"
              onClick={() => navigate("/login")}
            >
              Log In
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
