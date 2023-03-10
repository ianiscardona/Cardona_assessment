import React, { useRef, useState } from "react";
import { TrendWeek } from "./TrendingWeek";
import { TrendThrowback } from "./TrendingTB";
import AnimeData from "../data/AnimeData";
import ThrowbackData from "../data/ThrowbackData";

export const Trending = (props) => {
  const [trendingItemValue, setTrendingItemValue] = useState("");
  const [throwbackItemValue, setThrowbackItemValue] = useState("");
  // properties
  const trending = AnimeData.filter((details) => {
    return trendingItemValue === ""
      ? details
      : details.name.toLowerCase().includes(trendingItemValue.toLowerCase());
  }).map((details) => {
    return (
      <TrendWeek
        key={details.id}
        name={details.name}
        rating={details.rating}
        categories={details.categories}
        image={details.image}
      />
    );
  });

  const throwback = ThrowbackData.filter((details) => {
    return throwbackItemValue === ""
      ? details
      : details.name.toLowerCase().includes(throwbackItemValue.toLowerCase());
  }).map((details) => {
    return <TrendThrowback key={details.id} image={details.image} />;
  });

  // create refs for each section
  const trendingRef = useRef(null);
  const throwbackRef = useRef(null);

  // function to scroll to the respective section when clicked
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="z-0 py-16 relative bg-stone-900">
      <div className="mx-20 w-auto pb-7 flex justify-between">
        <button
          className="text-white text-[34px] leading-none font-bold font-outfit tracking-wide antialiased"
          onClick={() => scrollToSection(trendingRef)}
        >
          Trending
          <text className="text-[#FBC94A]"> this week</text>
        </button>
        <div>
          <input
            type="search"
            placeholder="Search..."
            className="rounded-lg px-3 py-1 text-[#106580]"
            onChange={(e) => setTrendingItemValue(e.target.value)}
          />
        </div>
      </div>
      <section
        className="px-20 pb-2 flex space-x-5 mb-10 space-y-3 flex-nowrap overflow-x-auto scrollbar-hide snap-x scroll-pl-20"
        ref={trendingRef}
      >
        <div className="flex space-x-5">{trending}</div>
      </section>
      <div className="mx-20 w-auto pb-7 flex justify-between">
        <text
          className="text-white text-[34px] leading-none font-bold font-outfit tracking-wide antialiased"
          onClick={() => scrollToSection(throwbackRef)}
        >
          Throwback Anime!
        </text>
        <div>
          <input
            type="search"
            placeholder="Search..."
            className="rounded-lg px-3 py-1 text-[#106580]"
            onChange={(e) => setThrowbackItemValue(e.target.value)}
          />
        </div>
      </div>
      <section
        className="px-20 pb-2 flex space-x-5 mb-10 space-y-3 flex-nowrap overflow-x-auto scrollbar-hide snap-x scroll-pl-20"
        ref={throwbackRef}
      >
        <div className="flex space-x-5">{throwback}</div>
      </section>
    </div>
  );
};
