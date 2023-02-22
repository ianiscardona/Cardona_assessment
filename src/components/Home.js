import React from "react";
import { Hero } from "./Hero";
import { Trending } from "./Trending";

export const Home = () => {
  return (
    <div className="min-w-full z-0">
      <Hero />
      <Trending />
    </div>
  );
};
