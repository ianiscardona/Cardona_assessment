import React from "react";

export const EpisodeCard = (props) => {
  return (
    <div className="mb-6 flex space-x-3">
      <div className="">
        <button className="w-[300px] h-[168px] rounded-3xl relative overflow-hidden hover:shadow-[0_4px_10px_-3px_rgba(196,196,196,0.4)] snap-start">
          <div className="h-full w-full preview-trending absolute"></div>
          <div className="bg-gradient-to-t from-black w-full h-full absolute"></div>
          <div className="px-7 pb-5 h-full flex relative justify-end items-start flex-col"></div>
        </button>
      </div>
      <ul className="flex flex-col w-full justify-center">
        <li>
          <h3 className="text-white text-xl font-normal font-outfit antialiased">
            Episode {props.episode}
          </h3>
        </li>
        <li>
          <p className="text-white text-xl font-light font-outfit antialiased">
            {props.description}
          </p>
        </li>
      </ul>
    </div>
  );
};
