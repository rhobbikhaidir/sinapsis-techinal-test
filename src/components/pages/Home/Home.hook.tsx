import tableNumber from "@/components/helper/tableNumber";
import { useDeleteData, useGetListTable } from "@/components/services/baseApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

const useHome = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [tempTitle, setTempTitle] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const totalPages = 5;
  const {
    data,
    isFetching: isLoading,
    isSuccess,
  } = useGetListTable({
    page: currentPage,
    per_page: 10,
    title,
  });

  const onChangeTitle = (val: string) => {
    setCurrentPage(1);
    setTempTitle(val);
  };

  const onFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const val = tempTitle?.trim()
    setTitle(val);
  };

  const { mutate: onDelete } = useDeleteData({
    onSuccess: async () => {
      Swal.close();
      await Swal.fire({
        icon: "success",
        title: "Success",
        text: `Berhasil Mengapus Data`,
        timer: 1000,
        timerProgressBar: true,
      });
      await router.replace("/");
    },
    onError: () => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong",
      });
    },
  });

  const gotoCreate = () => {
    router.push("/create");
  };
  const gotoEdit = (id: number) => {
    router.push(`/edit/${id}`);
  };

  const gotoDetail = (id: number) => {
    router.push(`/detail/${id}`);
  };

  const handlePageChange = (page: number) => {
    if (isLoading) return;
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleDelete = async (id: number, title: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Do you want to Delete ${title}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      width: "400px",
    });

    if (result.isConfirmed) {
      onDelete(id);
    }
    if (result.isDismissed) {
      Swal.close();
    }
  };

  const numbers = tableNumber(currentPage);

  return {
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
    onChangeTitle,
    onFilter,
    tempTitle,
  };
};

export default useHome;
