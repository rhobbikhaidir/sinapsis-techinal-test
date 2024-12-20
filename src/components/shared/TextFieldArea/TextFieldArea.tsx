import { TextFieldAreaProps } from "@/components/types/types";
import React from "react";

const TextFieldArea = (props: TextFieldAreaProps) => {
  const { id, label, ref, errorsmsg, isMandatory, ...res } = props;
  return (
    <div className="mb-4 relative">
      <label
        htmlFor={id}
        className="block mb-2 lg:text-xl text-lg font-medium text-gray-900 dark:text-white"
      >
        {label}
        {isMandatory && <span className="text-red-700">*</span>}
      </label>
      <textarea
        {...res}
        ref={ref}
        id={id}
        className={`${
          errorsmsg ? "border-red-500" : "border-gray-300"
        } block w-full p-3 text-gray-900 border rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
      />
      {errorsmsg && <p className="mt-1 text-sm text-red-500">{errorsmsg}</p>}
    </div>
  );
};

export default TextFieldArea;