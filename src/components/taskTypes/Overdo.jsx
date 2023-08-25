import React from "react";
import { BiSolidCircleHalf } from "react-icons/bi";
import Cards from "../card/Cards";

const Overdo = () => {
  return (
    <div className=" w-[400px] bg-slate-200 h-full py-3 px-2 overflow-x-auto shrink-0 rounded-md scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-gray-300">
      <div className=" flex items-center justify-between mb-6">
        <div className=" flex items-center">
          <span className=" font-semibold">Overdo</span>
        </div>
        <span className=" bg-slate-300 w-6 h-6 flex items-center justify-center rounded-sm">
          0
        </span>
      </div>
      <Cards></Cards>
    </div>
  );
};

export default Overdo;
