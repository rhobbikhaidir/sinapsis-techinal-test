import { getCookie } from "@/components/helper/cookie";
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
    const newUser = getCookie("user") || "";
    if (newUser) {
      setUser(newUser);
    }
  }, []);

  const { mutate } = useLogoutGorest({
    onSuccess: () => {
      Swal.close();
      localStorage.clear();
      router.replace("/login");
    },
  });

  const gotoHome = () => router.replace("/");

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
  return { user, onLogut, theme, setTheme, gotoHome };
};

export default useHeader;
