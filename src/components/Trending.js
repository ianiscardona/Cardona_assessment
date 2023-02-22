import React from "react";
import { TrendingNow } from "./TrendingNow";
import { Throwback } from "./Throwback";
import AnimeData from "./AnimeData";
import ThrowbackData from "./ThrowbackData";

export const Trending = (props) => {
  // properties
  const trending = AnimeData.map((details) => {
    return (
      <TrendingNow
        key={details.id}
        name={details.name}
        rating={details.rating}
        categories={details.categories}
        image={details.image}
      />
    );
  });

  const throwback = ThrowbackData.map((details) => {
    return <Throwback key={details.id} image={details.image} />;
  });

  return (
    <div className="z-0 py-16 relative bg-stone-900">
      <div className="mx-20 w-auto pb-7">
        <button className="text-white text-[34px] leading-none font-bold font-outfit tracking-wide antialiased">
          Trending
          <text className="text-[#FBC94A]"> this week</text>
        </button>
      </div>
      <section className="px-20 pb-2 flex space-x-5 mb-10 space-y-3 flex-nowrap overflow-x-auto scrollbar-hide snap-x scroll-pl-20">
        <div className="flex space-x-5">{trending}</div>
      </section>
      <div className="mx-20 w-auto pb-7">
        <text className="text-white text-[34px] leading-none font-bold font-outfit tracking-wide antialiased">
          Throwback Anime!
        </text>
      </div>
      <section className="px-20 pb-2 flex space-x-5 mb-10 space-y-3 flex-nowrap overflow-x-auto scrollbar-hide snap-x scroll-pl-20">
        {/* <section className="mx-20 flex flex-wrap space-y-3"> */}
        <div className="flex space-x-5">{throwback}</div>
      </section>
    </div>
  );
};
