"use client";
import Button from "@/components/shared/Button";
import React from "react";
import useHome from "./Home.hook";
import Loading from "@/components/shared/Loading/Loading";
import { dataTableProps } from "@/components/types/types";

const Home = () => {
  const { data, isLoading, isSuccess } = useHome();
  return (
    <div className=" min-h-screen p-20 gap-16   dark:bg-ireng">
      <main className="flex flex-col gap-2 row-start-2 items-center sm:items-start">
        <div className="flex flex-row w-full items-end justify-end">
          <Button title="Add New" />
        </div>
        {isLoading && <Loading />}

        {isSuccess && data && (
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
                <th className="px-6 py-3 w-5 dark:text-white text-lg">Action</th>
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
                      {idx + 1}
                    </td>
                    <td className="px-6 py-4 border-r dark:border-r-gray-600 dark:text-white">
                      {el.title}
                    </td>
                    <td className="px-6 py-4 border-r dark:border-r-gray-600 dark:text-white">
                      {el.body}
                    </td>
                    <td className="px-6 py-4 border-r dark:border-r-gray-600 dark:text-white">
                      {el.user_id}
                    </td>
                  </tr>
                );
              })}

              {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-5 rounded-bl-lg border-r dark:border-r-gray-600"
                >
                  1
                </th>
                <td className="px-6 py-4 border-r dark:border-r-gray-600">
                  Silver
                </td>
                <td className="px-6 py-4 border-r dark:border-r-gray-600">
                  Laptop
                </td>
                <td className="px-6 py-4 w-5 ">$2999</td>
              </tr> */}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
};

export default Home;
