import React from "react";
import { Hero } from "../components/Hero";
import { Trending } from "../components/Trending";

export const Home = () => {
  return (
    <div className="min-w-full z-0">
      <Hero />
      <Trending />
    </div>
  );
};
