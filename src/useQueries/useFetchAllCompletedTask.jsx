import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchAllCompletedTask = () => {
  const {
    refetch: refetchAllCompletedTask,
    data: allCompletedTask = [],
    isLoading: isFetchAllCompletedTask,
  } = useQuery({
    queryKey: ["completed"],
    queryFn: async () => {
      const res = await axios.get(
        `https://seo-page-one-express-server.vercel.app/completed`
      );
      return res.data;
    },
  });

  return [allCompletedTask, refetchAllCompletedTask, isFetchAllCompletedTask];
};

export default useFetchAllCompletedTask;
