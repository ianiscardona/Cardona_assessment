import React, { useState } from "react";
import { motion } from "framer-motion";

export const EpisodeCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageSrc, setImageSrc] = useState(props.imageUrl);

  const handleMouseEnter = async () => {
    setIsHovered(true);
    const response = await fetch("https://your-image-api.com");
    const data = await response.json();
    setImageSrc(data.imageUrl);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setImageSrc(props.imageUrl);
  };

  return (
    <div
      className="mb-6 flex space-x-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="">
        <button className="w-[300px] h-[168px] rounded-3xl relative overflow-hidden snap-start">
          <motion.div
            className="h-full w-full preview-trending absolute"
            style={{ backgroundImage: `url(${imageSrc})` }}
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          ></motion.div>
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
