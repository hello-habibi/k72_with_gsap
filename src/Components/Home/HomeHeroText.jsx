import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className=" text-white text-center pt-5  font-[font1]">
      <div className="text-[9.5vw] uppercase leading-[8vw]">The spark</div>
      <div className="text-[9.5vw] uppercase leading-[8vw] flex justify-center items-center">who <div className="w-[10vw] rounded-full overflow-hidden"><Video></Video></div> </div>
      <div className="text-[9.5vw] uppercase leading-[8vw]">generates</div>
      <div className="text-[9.5vw] uppercase leading-[8vw]">there</div>
      <div className="text-[9.5vw] uppercase leading-[8vw]">creativity</div>
    </div>
  );
};

export default HomeHeroText;
