import { useLoginGorest } from "@/components/services/baseApi";
import { LoginPartials } from "@/components/types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { DEFAULT_VALUES_LOGIN } from "./Login.constants";
import { validationSchema } from "./Login.schema";
import Swal from "sweetalert2";

const useLogin = () => {
  const router = useRouter();
  const [user, setUser] = useState<string>("");
  const { mutate, isPending: isLoading } = useLoginGorest({
    onSuccess: () => {
      router.replace("/");
      localStorage.setItem("user", user);
    },
    onError: (err) => {
      Swal.fire({
        icon: "error",
        title: err?.response?.data?.status,
        text: err?.response?.data?.message,
      });
    },
  });
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: DEFAULT_VALUES_LOGIN,
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const handleLogin = async (data: LoginPartials) => {
    setUser(data?.username);
    mutate(data?.token);
  };
  return {
    control,
    isLoading,
    handleSubmit,
    isValid,
    handleLogin,
  };
};

export default useLogin;
