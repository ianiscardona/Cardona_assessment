import React from "react";
import { Hero } from "./Hero";
import { Suggestions } from "./Suggestions";

export const Home = () => {
  return (
    <div className="min-w-full">
      <Hero />
      <Suggestions />
    </div>
  );
};
