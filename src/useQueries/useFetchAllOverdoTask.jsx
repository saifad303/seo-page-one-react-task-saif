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
      const res = await axios.get(
        `https://seo-page-one-express-server.vercel.app/overdo`
      );
      // console.log("res from axios", res);
      return res.data;
    },
  });

  return [allOverdoTask, refetchAllOverdoTask, isFetchAllOverdoTask];
};

export default useFetchAllOverdoTask;
