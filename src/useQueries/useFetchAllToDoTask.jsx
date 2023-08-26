import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchAllToDoTask = () => {
  const {
    refetch: refetchAllToDoTask,
    data: allToDoTask = [],
    isLoading: isFetchAllToDoTask,
  } = useQuery({
    queryKey: ["toDo"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/todo`);
      console.log("To do data = ", res.data);
      return res.data;
    },
  });

  return [allToDoTask, refetchAllToDoTask, isFetchAllToDoTask];
};

export default useFetchAllToDoTask;
