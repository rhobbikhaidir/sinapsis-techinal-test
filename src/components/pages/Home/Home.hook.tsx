import { useGetListTable } from "@/components/services/baseApi";

const useHome = () => {
  const { data, isFetching: isLoading, isSuccess } = useGetListTable({
    page: 1,
    per_page: 1,
  });

  console.log(data, "testing data");

  return { data, isLoading, isSuccess };
};

export default useHome;
