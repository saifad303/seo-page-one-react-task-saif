import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchAllIncompleteTask = () => {
  const {
    refetch: refetchAllIncompleteTask,
    data: allIncompleteTask = [],
    isLoading: isFetchAllIncompleteTask,
  } = useQuery({
    queryKey: ["incomplete"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/incomplete`);
      // console.log("res from axios", res);
      return res.data;
    },
  });

  return [
    allIncompleteTask,
    refetchAllIncompleteTask,
    isFetchAllIncompleteTask,
  ];
};

export default useFetchAllIncompleteTask;
