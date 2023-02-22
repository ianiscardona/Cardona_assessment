import React from "react";

export const Throwback = (props) => {
  return (
    <div className="w-[440px] h-[450px] rounded-3xl border-2 relative overflow-hidden">
      <img
        alt={props.alt}
        src={`../images/${props.image}`}
        className="h-full w-full object-cover absolute"
      ></img>
      {/* <div className="bg-gradient-to-t from-black w-full h-full absolute"></div> */}
    </div>
  );
};
