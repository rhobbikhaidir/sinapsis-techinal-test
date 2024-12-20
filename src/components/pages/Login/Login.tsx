"use client";
import React from "react";
import Button from "@/components/shared/Button";
import TextField from "@/components/shared/TextField";
import { Controller } from "react-hook-form";
import useLogin from "./Login.hook";

const Login = () => {
  const { control, handleSubmit, isValid, handleLogin, isLoading } = useLogin();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="shadow border bg-red p-6 rounded-md lg:w-[400px]">
          <div className="pb-4">
            <h1 className="text-gray-950 lg:text-3xl">Login</h1>
            <p className="text-gray-950 ">Sign in to your account </p>
          </div>
          {/* <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(handleLogin);
            }}
          > */}
          <Controller
            control={control}
            name="username"
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <TextField
                ref={ref}
                {...field}
                id={"username"}
                label="Username"
                errorsmsg={error ? error.message : ""}
              />
            )}
          />
          <Controller
            control={control}
            name="token"
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <TextField
                ref={ref}
                {...field}
                id={"token"}
                label="Token"
                type="password"
                errorsmsg={error ? error.message : ""}
              />
            )}
          />
          <div className="flex flex-row justify-end items-end gap-2">
            <Button
              id="btn-login"
              disabled={!isValid}
              type="submit"
              title="Login"
              isLoading={isLoading}
              onClick={handleSubmit(handleLogin)}
            />
          </div>
          {/* </form> */}
        </div>
      </main>
    </div>
  );
};

export default Login;
