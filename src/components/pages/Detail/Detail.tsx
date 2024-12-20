"use client";

import Loading from "@/components/shared/Loading/Loading";
import useDetail from "./Detail.hook";

const Detail = () => {
  const { detailData, isLoading, isSuccess, isError, handleBack } = useDetail();
  return (
    <main className="min-h-screen p-32 dark:bg-ireng">
      <div className="flex flex-col justify-center items-center">
        {isLoading && <Loading />}
        {isSuccess && detailData && (
          <div className="max-w-2xl p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {detailData?.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {detailData?.body}
            </p>
          </div>
        )}
        {isError && (
          <p className="text-red-800 text-xl">
            Data not Found,
            <span
              className="text-blue-800 text-xl underline cursor-pointer"
              onClick={handleBack}
            >
              lets back
            </span>
          </p>
        )}
      </div>
    </main>
  );
};

export default Detail;
