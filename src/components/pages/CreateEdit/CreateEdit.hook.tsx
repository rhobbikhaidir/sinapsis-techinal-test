/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { DEFAULT_VALUES_CREATE_EDIT } from "./CreateEdit.constants";
import { validationSchema } from "./CreateEdit.schema";
import { CreateEditPartials } from "@/components/types/types";
import {
  useCreateData,
  useGetPostDetail,
  useUpdateData,
} from "@/components/services/baseApi";
import Swal from "sweetalert2";
import { useEffect } from "react";

const useCreateEdit = () => {
  const params = useParams();
  const router = useRouter();
  const id = params && params?.id;
  const isEdit = Boolean(id);
  const { data: detailData, isSuccess } = useGetPostDetail(Number(id));
  const { mutate: onCreate, isPending: isLoading } = useCreateData({
    onSuccess: async (res) => {
      await Swal.fire({
        icon: "success",
        title: "Success",
        text: `Berhasil membuat data ${res?.data.title}`,
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

  const { mutate: onUpdate, isPending: isLoadingEdit } = useUpdateData({
    onSuccess: async (res) => {
      await Swal.fire({
        icon: "success",
        title: "Success",
        text: `Berhasil mengupdate Data ${res?.data.title}`,
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

  const {
    control,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({
    defaultValues: DEFAULT_VALUES_CREATE_EDIT,
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  const handleSave = (data: CreateEditPartials) => {
    if (isEdit) {
      const payload = {
        ...data,
        user_id: 7593932,
        id: Number(id),
      };
      onUpdate(payload);
    } else {
      const payload = {
        ...data,
        user_id: 7593932,
      };
      onCreate(payload);
    }
  };

  useEffect(() => {
    if (isSuccess && detailData && detailData?.body) {
      reset({
        body: detailData?.body,
        title: detailData.title
      });
      console.log("masuk sini");
    }
  }, [isSuccess, detailData]);

  return {
    control,
    isValid,
    handleSubmit,
    handleSave,
    isLoading,
    isEdit,
    isLoadingEdit,
  };
};

export default useCreateEdit;
