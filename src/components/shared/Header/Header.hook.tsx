import { useLogoutGorest } from "@/components/services/baseApi";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const useHeader = () => {
  const [user, setUser] = useState<string | null>("");
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const newUser = localStorage.getItem("user");
      setUser(newUser);
    }
  }, []);

  const { mutate } = useLogoutGorest({
    onSuccess: () => {
      Swal.close();
      localStorage.clear();
      router.replace("/login");
    },
    onError: () => {
      console.log("ini errorr");
    },
  });

  const onLogut = async () => {
    console.log("run");
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to Logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      width: "400px",
    });

    if (result.isConfirmed) {
      setTheme("light");
      mutate();
    }
    if (result.isDismissed) {
      Swal.close();
    }
  };
  return { user, onLogut, theme, setTheme };
};

export default useHeader;
