import React from "react";
import { FaStar } from "react-icons/fa";
import { EpisodeCard } from "./EpisodeCard";
import EpisodesData from "./EpisodesData";

export const ShowModal = (props) => {
  const episodes = EpisodesData.map((details) => {
    return (
      <EpisodeCard
        key={details.id}
        description={details.description}
        episode={details.episode}
      />
    );
  });

  return (
    <div className="absolute pr-20 pb-16 z-20 bg-stone-900">
      {/* <div className="w-auto pb-7">
        <text
          id=""
          className="text-white text-[34px] leading-none font-bold font-outfit tracking-wide antialiased"
        >
          Trending
          <text className="text-[#FBC94A]"> this week</text>
        </text>
      </div> */}
      <div className="flex columns-2 w-full">
        <div className="mr-5 flex flex-col">
          <button
            onClick={props.close}
            className="rounded-2xl w-[600px] h-[690px] relative overflow-hidden"
          >
            <div className="h-full w-full preview-trending absolute scale-110"></div>
            <div className="bg-gradient-to-t from-black w-full h-full absolute"></div>
            <div className="px-9 pb-9 h-full flex relative justify-end items-start flex-col">
              <h1 className="text-white text-2xl leading-none font-bold font-outfit tracking-wide antialiased">
                Attack on Titan
              </h1>
              <ul className="flex items-end w-full justify-between">
                <li>
                  <p className="text-white text-xs font-normal font-outfit antialiased">
                    Category: Adventure fiction, Dark fantasy, Martial Arts
                  </p>
                </li>
                <li>
                  <p className="flex items-end justify-center content-between space-x-1 text-white text-xs font-normal font-outfit antialiased">
                    <div className="text-[#FBC94A]">
                      <FaStar size={20} />
                    </div>
                    <div>5.0</div>
                  </p>
                </li>
              </ul>
            </div>
          </button>
          <div className="w-[600px] py-4">
            <text
              id=""
              className="text-white text-lg font-light leading-none font-outfit antialiased"
            >
              When man-eating Titans first appeared 100 years ago, humans found
              safety behind massive walls that stopped the giants in their
              tracks. But the safety they have had for so long is threatened
              when a colossal Titan smashes through the barriers, causing a
              flood of the giants into what had been the human…
            </text>
          </div>
        </div>
        <div className="flex flex-col justify-items-end w-full">
          <div className="flex justify-between mb-8">
            <div className="w-24 h-8">
              <button
                onClick={props.close}
                id=""
                className="text-white text-2xl font-medium font-outfit antialiased"
              >
                Episodes
              </button>
            </div>
            <div className="w-24 h-8">
              <button
                onClick={props.close}
                id=""
                className="text-white text-2xl font-medium font-outfit antialiased"
              >
                Season 1
              </button>
            </div>
          </div>

          <div className="flex flex-col">{episodes}</div>
        </div>
      </div>
    </div>
  );
};
