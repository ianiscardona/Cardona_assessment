import React from "react";
import { Hero } from "../components/Hero";
import { TrendingWeekSeriesModal } from "../components/TrendingWeekSeriesModal";

export const TrendingWeekSeries = () => {
  return (
    <div className="min-w-full z-0">
      <Hero />
      <TrendingWeekSeriesModal />
    </div>
  );
};
