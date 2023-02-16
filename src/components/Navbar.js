import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-end content-end h-24 max-w-full mx-auto px-20 bg-black">
      <h1 className="font-bold text-2xl">
        <Link to="/" className="anime-binge">
          AnimeBinge
        </Link>
      </h1>
      <nav className="flex justify-end">
        <ul className="flex items-center md:space-x-14">
          <li>
            <Link to="/" className="nav-link font-thin">
              Home
            </Link>
          </li>
          <li>
            <Link to="/discovery" className="nav-link font-thin">
              Discover
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link font-thin">
              About Us
            </Link>
          </li>
          <li>
            <button
              className="nav-link font-thin rounded-md w-28 h-10 border-solid border-white border border-sm hover:bg-white hover:text-black"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </li>
          <li>
            <button
              className="nav-link font-thin rounded-md w-24 h-10 border-solid border-sm button-blue hover:bg-white hover:text-black"
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
