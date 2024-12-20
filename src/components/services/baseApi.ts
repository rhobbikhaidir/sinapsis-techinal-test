/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { CreateEditPartials, TablePartials } from "../types/types";
import { getCookie } from "../helper/cookie";

const url = "https://gorest.co.in";

const getToken = getCookie("token");

const api = axios.create({
  baseURL: url,
});

api.interceptors.request.use(
  async (config) => {
    if (getToken) {
      config.headers["Authorization"] = `Bearer ${getToken}`;
    }

    if (!config.headers.Accept) {
      config.headers.Accept = "application/json";
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const useLoginGorest = ({
  onSuccess = () => {},
  onError = (err: any) => {},
}) => {
  const mutation = useMutation({
    mutationFn: async (token: string) => {
      const res = await axios.get(`/api/auth/login?access-token=${token}`);

      return res;
    },
    onSuccess: () => {
      onSuccess();
    },
    onError: (err: any) => {
      onError(err);
    },
  });
  return mutation;
};

export const useLogoutGorest = ({
  onSuccess = () => {},
  onError = () => {},
}) => {
  const mutation = useMutation({
    mutationFn: async () => {
      const res = await axios.get(`/api/auth/logout`);
      return res;
    },
    onSuccess: () => {
      onSuccess();
    },
    onError: (err: any) => {
      console.log("error jalan", err);
      onError();
    },
  });
  return mutation;
};

export const useGetListTable = (payload: TablePartials) => {
  const query = useQuery({
    placeholderData: keepPreviousData,
    queryFn: async () => {
      const res = await api.get(
        `/public/v2/users/7593932/posts?page=${payload.page}&per_page=${payload.per_page}`
      );
      return res.data;
    },
    queryKey: ["list-table", payload],
  });

  return query;
};

export const useCreateData = ({
  onSuccess = (res: any) => {},
  onError = (err: any) => {},
}) => {
  const mutation = useMutation({
    mutationFn: async (payload: CreateEditPartials) => {
      const res = await api.post(`/public/v2/posts`, payload);
      return res;
    },
    onSuccess: (res) => {
      onSuccess(res);
    },
    onError: (err: any) => {
      onError(err);
    },
  });
  return mutation;
};

export const useGetPostDetail = (id: number) => {
  const query = useQuery({
    enabled: Boolean(id),
    queryFn: async () => {
      const res = await api.get(`/public-api/posts/${id}`);
      return res.data?.data;
    },
    queryKey: ["posts-detail", id],
  });

  return query;
};

export const useUpdateData = ({
  onSuccess = (res: any) => {},
  onError = (err: any) => {},
}) => {
  const mutation = useMutation({
    mutationFn: async (payload: CreateEditPartials) => {
      const res = await api.put(`/public-api/posts/${payload.id}`, payload);
      return res?.data;
    },
    onSuccess: (res) => {
      onSuccess(res);
    },
    onError: (err: any) => {
      onError(err);
    },
  });
  return mutation;
};

export const useDeleteData = ({
  onSuccess = (res: any) => {},
  onError = (err: any) => {},
}) => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await api.delete(`/public-api/posts/${id}`);
      
      return res?.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ['list-table']});
      onSuccess(res);
    },
    onError: (err: any) => {
      onError(err);
    },
  });
  return mutation;
};
