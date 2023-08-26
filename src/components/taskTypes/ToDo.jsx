import React from "react";
import { BiSolidCircleHalf } from "react-icons/bi";
import Cards from "../card/Cards";
import Card from "../card/Card";
import useFetchAllToDoTask from "../../useQueries/useFetchAllToDoTask";

const ToDo = () => {
  const [allToDoTask, refetchAllToDoTask, isFetchAllToDoTask] =
    useFetchAllToDoTask();
  console.log("allToDoTask", allToDoTask);
  return (
    <div className=" w-[400px] bg-slate-200 h-full py-3 px-2 overflow-x-auto shrink-0 rounded-md scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-gray-300">
      <div className=" flex items-center justify-between mb-6">
        <div className=" flex items-center">
          <BiSolidCircleHalf
            color="blue"
            className=" rotate-180"
          ></BiSolidCircleHalf>
          <span className=" font-semibold">To Do</span>
        </div>
        <span className=" bg-slate-300 w-6 h-6 flex items-center justify-center rounded-sm">
          0
        </span>
      </div>
      {allToDoTask.map((task, index) => (
        <Card task={task} key={index}></Card>
      ))}
    </div>
  );
};

export default ToDo;
