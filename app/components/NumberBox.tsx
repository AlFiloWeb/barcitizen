import React from "react";

interface numProp {
  num: string | number;
  unit: string;
  flip: boolean;
}

export const NumberBox = ({ num, unit, flip }: numProp) => {
  return (
    <div className="flex flex-col items-center lg:px-2">
      <div className="relative bg-transparent flex flex-col items-center justify-center rounded-lg max-w-[10rem] w-[20vw] h-auto aspect-square lg:w-40 lg:h-40 text-2xl lg:text-4xl mt-4 ">
        <div className="rounded-t-lg rounded-b-lg bg-white w-full h-full"></div>
        <div className="text-[8vw] md:text-7xl absolute text-black z-10 font-bold font-redhat lg:text-7xl font-mono ">
          {num}
        </div>
        <div className="rounded-b-lg rounded-t-lg bg-white w-full h-full"></div>
        <div
          className={`absolute w-full h-1/2 top-0 rounded-t-lg z-5 ${
            flip ? "animate-flip bg-gray-300" : "bg-transparent"
          }`}
        ></div>
        <div className="absolute -right-1 top-[46%] w-[10px] md:top-[47.5%] h-[10px] lg:top-[74px] rounded-full lg:w-[12px] lg:h-[12px] bg-[#1e1f29]"></div>
        <div className="absolute -left-1 top-[46%] w-[10px] md:top-[47.5%] h-[10px] lg:top-[74px] rounded-full lg:w-[12px] lg:h-[12px] bg-[#1e1f29]"></div>
      </div>
      <p className="text-sm mt-3 font-semibold text-white text-shadow lg:text-2xl ">
        {unit}
      </p>
    </div>
  );
};