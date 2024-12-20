"use client";
import Button from "@/components/shared/Button";
import React from "react";
import useHome from "./Home.hook";
import Loading from "@/components/shared/Loading/Loading";
import { dataTableProps } from "@/components/types/types";
import Pagination from "@/components/shared/Pagination";
import Icon from "@/components/shared/Icon";

const Home = () => {
  const {
    data,
    isLoading,
    isSuccess,
    currentPage,
    totalPages,
    handlePageChange,
    numbers,
    gotoCreate,
    gotoEdit,
    handleDelete,
    gotoDetail
  } = useHome();
  return (
    <div className=" min-h-screen p-20 gap-16   dark:bg-ireng">
      <main className="flex flex-col gap-2 row-start-2 items-center sm:items-start">
        <div className="flex flex-row w-full items-end justify-end">
          <Button title="Add New" onClick={gotoCreate} />
        </div>
        {isLoading && <Loading />}

        {!isLoading && isSuccess && data?.length >= 1 && (
          <>
            <table className=" table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-3 w-5 rounded-tl-lg border-r dark:border-r-gray-600 dark:text-white text-lg">
                    No.
                  </th>
                  <th className="px-6 py-3 border-r dark:border-r-gray-600 dark:text-white text-lg">
                    Title
                  </th>
                  <th className="px-6 py-3 border-r dark:border-r-gray-600 dark:text-white text-lg">
                    Body
                  </th>
                  <th className="px-6 py-3 w-5 dark:text-white text-lg">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((el: dataTableProps, idx: number) => {
                  return (
                    <tr
                      key={el.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 py-4 border-r dark:border-r-gray-600 dark:text-white">
                        {numbers[idx] + 1}
                      </td>
                      <td className="px-6 py-4 border-r dark:border-r-gray-600 dark:text-white">
                        {el.title}
                      </td>
                      <td className="px-6 py-4 border-r dark:border-r-gray-600 dark:text-white">
                        {el.body}
                      </td>
                      <td className="px-6 py-4 border-r dark:border-r-gray-600 dark:text-white">
                        <div className="flex flex-row gap-2">
                        <button onClick={gotoDetail.bind(null, el.id)}>
                            <Icon icon="detail" size="18px" />
                          </button>
                          <button onClick={gotoEdit.bind(null, el.id)}>
                            <Icon icon="edit" size="18px" />
                          </button>
                          <button onClick={() => handleDelete(el.id, el.title)}>
                            <Icon icon="delete" size="18px" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {data?.length && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
        {isSuccess && !isLoading && !data?.length && (
          <p className="text-lg text-ireng dark:text-white text-center w-full">
            Data not Found,
            <span
              className="text-blue-400 cursor-pointer"
              onClick={() => window.location.reload()}
            >
              click here to refersh
            </span>
          </p>
        )}
      </main>
    </div>
  );
};

export default Home;
