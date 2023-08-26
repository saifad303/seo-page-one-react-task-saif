import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchAllToDoTask = () => {
  const {
    refetch: refetchAllUnderReviewTask,
    data: allUnderReviewTask = [],
    isLoading: isFetchAllUnderReviewTask,
  } = useQuery({
    queryKey: ["underreview"],
    queryFn: async () => {
      const res = await axios.get(
        `https://seo-page-one-express-server.vercel.app/underreview`
      );
      // console.log("To do data = ", res.data);
      return res.data;
    },
  });

  return [
    allUnderReviewTask,
    refetchAllUnderReviewTask,
    isFetchAllUnderReviewTask,
  ];
};

export default useFetchAllToDoTask;
