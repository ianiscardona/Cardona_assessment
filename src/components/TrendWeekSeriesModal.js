import React from "react";
import { FaStar } from "react-icons/fa";
import { EpisodeCard } from "./EpisodeCard";
import EpisodesData from "../data/EpisodesData";
import { motion } from "framer-motion";

export const TrendWeekSeriesModal = (props) => {
  const episodes = EpisodesData.map((details) => {
    return (
      <EpisodeCard
        key={details.id}
        description={details.description}
        episode={details.episode}
      />
    );
  });

  const modalVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const modalTransition = { duration: 0.5 };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const ratingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="absolute pr-20 pb-16 z-20 bg-stone-900"
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      transition={modalTransition}
    >
      <div className="flex columns-2 w-full">
        <div className="mr-5 flex flex-col">
          <button
            onClick={props.close}
            className="rounded-2xl w-[600px] h-[690px] relative overflow-hidden"
          >
            <div className="h-full w-full preview-trending absolute scale-110"></div>
            <div className="bg-gradient-to-t from-black w-full h-full absolute"></div>
            <div className="px-9 pb-9 h-full flex relative justify-end items-start flex-col">
              <motion.h1
                className="text-white text-2xl leading-none font-bold font-outfit tracking-wide antialiased"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Attack on Titan
              </motion.h1>
              <ul className="flex items-end w-full justify-between">
                <li>
                  <p className="text-white text-xs font-normal font-outfit antialiased">
                    Category: Adventure fiction, Dark fantasy, Martial Arts
                  </p>
                </li>
                <li>
                  <motion.p
                    className="flex items-end justify-center content-between space-x-1 text-white text-xs font-normal font-outfit antialiased"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <div className="text-[#FBC94A]">
                      <FaStar size={20} />
                    </div>
                    <div>5.0</div>
                  </motion.p>
                </li>
              </ul>
            </div>
          </button>
          <div className="w-[600px] py-4">
            <motion.text
              id=""
              className="text-white text-lg font-light leading-none font-outfit antialiased"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              When man-eating Titans first appeared 100 years ago, humans found
              safety behind massive walls that stopped the giants in their
              tracks. But the safety they have had for so long is threatened
              when a colossal Titan smashes through the barriers, causing a
              flood of the giants into what had been the human...
            </motion.text>
          </div>
        </div>
        <div className="flex flex-col justify-items-end w-full">
          <div
            className="w-full overflow-y-scroll overscroll-contain px-6"
            style={{ height: "600px" }}
          >
            {episodes}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
