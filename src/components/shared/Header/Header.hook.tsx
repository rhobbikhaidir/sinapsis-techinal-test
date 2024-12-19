import { useLogoutGorest } from "@/components/services/baseApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const useHeader = () => {
  const [user, setUser] = useState<string | null>("");
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
      mutate();
    }
    if (result.isDismissed) {
      Swal.close();
    }
  };
  return { user, onLogut };
};

export default useHeader;
