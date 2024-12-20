import { useGetPostDetail } from "@/components/services/baseApi";
import { useParams, useRouter } from "next/navigation";

const useDetail = () => {
  const params = useParams();
  const router = useRouter();
  const id = params && params?.id;
  const {
    data: detailData,
    isLoading,
    isSuccess,
    isError,
  } = useGetPostDetail(Number(id));

  const handleBack = () => router.replace('/')

  return { detailData, isLoading, isSuccess, isError, handleBack };
};

export default useDetail;
