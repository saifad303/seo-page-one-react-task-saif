import React, { useEffect, useState } from "react";
import { BiSolidCircleHalf } from "react-icons/bi";
import Cards from "../card/Cards";
import FileModal from "../Modal/FileModal";
import axios from "axios";
import Card from "../card/Card";
import useFetchAllIncompleteTask from "../../useQueries/useFetchAllIncompleteTask";

const Incomplete = () => {
  const [allTask, setAllTask] = useState([]);

  const [
    allIncompleteTask,
    refetchAllIncompleteTask,
    isFetchAllIncompleteTask,
  ] = useFetchAllIncompleteTask();

  // console.log("allIncompleteTask", allIncompleteTask);

  return (
    <div className=" w-[400px] bg-slate-200 h-full py-3 px-2 overflow-x-auto shrink-0 rounded-md scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-gray-300">
      <div className=" flex items-center justify-between mb-6">
        <div className=" flex items-center">
          <BiSolidCircleHalf
            color="red"
            className=" rotate-180"
          ></BiSolidCircleHalf>
          <span className=" font-semibold">Incomplete</span>
        </div>
        <span className=" bg-slate-300 w-6 h-6 flex  justify-center rounded-sm">
          0
        </span>
      </div>
      {allIncompleteTask.map((task, index) => (
        <Card task={task} key={index}></Card>
      ))}
    </div>
  );
};

export default Incomplete;
