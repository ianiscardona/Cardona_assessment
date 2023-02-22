import React from "react";

export default function Carousel({ children: images }) {
  return (
    <div className="overflow-hidden relative">
      <div className="flex">{images}</div>
    </div>
  );
}
