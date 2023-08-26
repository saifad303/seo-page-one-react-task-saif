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
      const res = await axios.get(
        `https://seo-page-one-express-server.vercel.app/todo`
      );
      console.log("To do data = ", res.data);
      return res.data;
    },
  });

  return [allToDoTask, refetchAllToDoTask, isFetchAllToDoTask];
};

export default useFetchAllToDoTask;
