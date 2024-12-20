"use client";
import Button from "@/components/shared/Button";
import TextField from "@/components/shared/TextField";
import TextFieldArea from "@/components/shared/TextFieldArea";
import React from "react";
import useCreateEdit from "./CreateEdit.hook";
import { Controller } from "react-hook-form";

const CreateEdit = () => {
  const {
    control,
    isValid,
    handleSubmit,
    handleSave,
    isLoading,
    isEdit,
    isLoadingEdit,
  } = useCreateEdit();
  return (
    <main className="min-h-screen p-32 dark:bg-ireng">
      <div className="gap-6 flex flex-col justify-center border rounded-md p-8 shadow dark:bg-gray-800 dark:border-gray-700">
        <p className="text-4xl text-ireng dark:text-white items-start">
          {isEdit ? " Edit" : "Create new"} posts
        </p>
        <div className="flex flex-col">
          <Controller
            control={control}
            name="title"
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <TextField
                ref={ref}
                isMandatory
                {...field}
                id="title"
                label="Title"
                errorsmsg={error ? error.message : ""}
              />
            )}
          />
          <Controller
            control={control}
            name="body"
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <TextFieldArea
                ref={ref}
                isMandatory
                {...field}
                id={"body"}
                label={"Body"}
                errorsmsg={error ? error.message : ""}
              />
            )}
          />
        </div>
        <div className="flex flex-row justify-end">
          <Button
            title="Save"
            disabled={!isValid}
            isLoading={isLoading || isLoadingEdit}
            onClick={handleSubmit(handleSave)}
          />
        </div>
      </div>
    </main>
  );
};

export default CreateEdit;
