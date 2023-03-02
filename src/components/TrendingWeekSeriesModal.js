import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { EpisodeCard } from "./EpisodeCard";
import EpisodesData from "../data/EpisodesData";
import AnimeData from "../data/AnimeData";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import slugify from "react-slugify";

export const TrendingWeekSeriesModal = (props) => {
  const { name } = useParams();
  const [show, setShow] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setShow(AnimeData.find((data) => slugify(data.name) === name));
    console.log(AnimeData.find((data) => data.name === name));
  }, [name]);

  const episodes = EpisodesData.map((details) => {
    return (
      <EpisodeCard
        key={details.id}
        description={details.description}
        episode={details.episode}
        image={details.image}
      />
    );
  });

  const modalVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const modalTransition = { duration: 0.5 };

  // const titleVariants = {
  //   hidden: { opacity: 0, y: -50 },
  //   visible: { opacity: 1, y: 0 },
  // };

  // const ratingVariants = {
  //   hidden: { opacity: 0, x: -50 },
  //   visible: { opacity: 1, x: 0 },
  // };

  // const descriptionVariants = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: { opacity: 1, y: 0 },
  // };

  return (
    <motion.div
      className="relative w-full px-20 py-16 z-20 bg-stone-900"
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      transition={modalTransition}
    >
      <div className="w-auto pb-7">
        <button
          className="text-white text-[34px] leading-none font-bold font-outfit tracking-wide antialiased"
          onClick={() => navigate("/")}
        >
          Trending
          <text className="text-[#FBC94A]"> this week</text>
        </button>
      </div>
      <div className="z-0 relative flex flex-col columns-2 w-full h-fit xl:flex-row">
        <div className="mr-5 flex flex-col">
          <div className="rounded-2xl w-[600px] h-[690px] relative overflow-hidden">
            <div className="h-full w-full preview-trending absolute scale-110"></div>
            <div className="bg-gradient-to-t from-black w-full h-full absolute"></div>
            <div className="px-9 pb-9 h-full flex relative justify-end items-start flex-col">
              <motion.h1
                className="text-white text-2xl leading-none font-bold font-outfit tracking-wide antialiased"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {show?.name}
              </motion.h1>
              <ul className="flex items-end w-full justify-between">
                <li>
                  <p className="text-white text-xs font-normal font-outfit antialiased">
                    {show?.categories}
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
                    <div>{show?.ratings}</div>
                  </motion.p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[600px] py-4">
            <motion.text
              id=""
              className="text-white text-lg font-light leading-none font-outfit antialiased"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {show?.description}
            </motion.text>
          </div>
        </div>
        <div className="flex flex-col justify-items-end max-w-full">
          <div className="overflow-y-scroll px-6 min-h-screen">{episodes}</div>
        </div>
      </div>
    </motion.div>
  );
};
