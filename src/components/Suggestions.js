import React from "react";

export const Suggestions = () => {
  return (
    <div className="pl-20 py-20 relative bg-stone-900">
      <div className="w-auto pb-7">
        <text className="text-white text-[34px] leading-none font-bold font-outfit tracking-wide antialiased">
          Trending
          <text className="text-white hover:text-[#FBC94A]"> this week</text>
        </text>
      </div>
      <section className="flex space-y-3">
        <div className="flex flex-nowrap space-x-5">
          <div className="w-[500px] h-[281px] rounded-3xl border preview-trending"></div>
          <div className="w-[500px] h-[281px] rounded-3xl border preview-trending"></div>
          <div className="w-[500px] h-[281px] rounded-3xl border preview-trending"></div>
        </div>
      </section>
      <section className="p-20 flex">Throwback</section>
    </div>
  );
};
