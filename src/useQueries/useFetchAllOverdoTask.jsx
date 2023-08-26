import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchAllOverdoTask = () => {
  const {
    refetch: refetchAllOverdoTask,
    data: allOverdoTask = [],
    isLoading: isFetchAllOverdoTask,
  } = useQuery({
    queryKey: ["overdo"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/overdo`);
      // console.log("res from axios", res);
      return res.data;
    },
  });

  return [allOverdoTask, refetchAllOverdoTask, isFetchAllOverdoTask];
};

export default useFetchAllOverdoTask;
