import { FaStar } from "react-icons/fa";
import React, { useState } from "react";
import { TrendWeekSeriesModal } from "./TrendWeekSeriesModal";

export const TrendWeek = (props) => {
  const [openModal, setOpenModal] = useState(false);

  function open() {
    setOpenModal(true);
  }
  function close() {
    setOpenModal(false);
  }

  return (
    <div className="">
      {openModal && <TrendWeekSeriesModal close={close} />}
      <button
        onClick={open}
        className="w-[600px] h-[337px] rounded-3xl relative overflow-hidden hover:shadow-[0_4px_10px_-3px_rgba(196,196,196,0.4)] hover:ease-out hover:duration-300 snap-start"
      >
        <img
          src={`../images/${props.image}`}
          className="h-full w-full object-cover absolute"
        ></img>
        <div className="bg-gradient-to-t from-black w-full h-full absolute"></div>
        <div className="px-7 pb-5 h-full flex relative justify-end items-start flex-col">
          <h1 className="text-white text-2xl leading-none font-bold font-outfit tracking-wide antialiased">
            {props.name}
          </h1>
          <ul className="flex items-end w-full justify-between">
            <li>
              <p className="text-white text-xs font-normal font-outfit antialiased">
                {props.categories}
              </p>
            </li>
            <li>
              <p className="flex items-end justify-center content-between space-x-1 text-white text-xs font-normal font-outfit antialiased">
                <div className="text-[#FBC94A]">
                  <FaStar size={20} />
                </div>
                <div>{props.rating}</div>
              </p>
            </li>
          </ul>
        </div>
      </button>
    </div>
  );
};
