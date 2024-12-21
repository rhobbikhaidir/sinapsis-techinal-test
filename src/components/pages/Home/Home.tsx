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
    gotoDetail,
    onFilter,
    tempTitle,
    onChangeTitle,
  } = useHome();
  return (
    <div className=" min-h-screen p-20 gap-16   dark:bg-ireng">
      <main className="flex flex-col gap-2 row-start-2 items-center sm:items-start">
        <div className="flex flex-row w-full items-end justify-between">
          <form onSubmit={onFilter}>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Icon icon="search" />
              </div>
              <input
                value={tempTitle}
                onChange={(e) => onChangeTitle(e.target.value)}
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Title"
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
          <Button id="add-new" title="Add New" onClick={gotoCreate} />
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
                          <button
                            onClick={gotoDetail.bind(null, el.id)}
                            id="detail"
                          >
                            <Icon icon="detail" size="18px" />
                          </button>
                          <button
                            onClick={gotoEdit.bind(null, el.id)}
                            id="edit"
                          >
                            <Icon icon="edit" size="18px" />
                          </button>
                          <button
                            onClick={() => handleDelete(el.id, el.title)}
                            id="delete"
                          >
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
