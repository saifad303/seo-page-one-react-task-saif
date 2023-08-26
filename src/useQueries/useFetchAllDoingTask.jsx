import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchAllToDoTask = () => {
  const {
    refetch: refetchAllDoingTask,
    data: allDoingTask = [],
    isLoading: isFetchAllDoingTask,
  } = useQuery({
    queryKey: ["doing"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/doing`);
      console.log("To do data = ", res.data);
      return res.data;
    },
  });

  return [allDoingTask, refetchAllDoingTask, isFetchAllDoingTask];
};

export default useFetchAllToDoTask;
