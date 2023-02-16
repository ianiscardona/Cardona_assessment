import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="md:container md:px-20 flex relative justify-between pt-14 bg-black">
      <h3 className="font-bold text-2xl">
        <Link to="/" className="anime-binge">
          AnimeBinge
        </Link>
      </h3>
      <nav className="flex overflow-hidden justify-end">
        <ul className="flex items-center md:space-x-20">
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
