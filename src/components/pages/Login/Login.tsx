import React from "react";
import Button from "@/components/shared/Button";
import TextField from "@/components/shared/TextField";

const Login = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="shadow border bg-red p-6 rounded-md md:w-96">
          <div className="pb-4">
            <h1 className="text-gray-950 lg:text-3xl">Login</h1>
            <p className="text-gray-950 ">Sign in to your account </p>
          </div>

          <TextField id={"test"} label="Username" />
          <TextField id={"test"} label="Token" type="password" />
          <div className="flex flex-row justify-end items-end gap-2">
            <Button isLoading  title="Login" />
          </div> 
        </div>
      </main>
    </div>
  );
};

export default Login;
