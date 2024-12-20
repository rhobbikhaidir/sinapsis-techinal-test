/* eslint-disable @typescript-eslint/no-explicit-any */
import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TablePartials } from "../types/types";

const url = 'https://gorest.co.in/public/v2'

export const useLoginGorest = ({
  onSuccess = () => {},
  onError = (err: any) => {},
}) => {
  const mutation = useMutation({
    mutationFn: async (token: string) => {
      const res = await axios.get(`/api/auth/login?access-token=${token}`);
      axios.interceptors.request.use(
        async (config) => {
          if (token) config.headers.Authorization = `${token}`;
          if (!config.headers.Accept) {
            config.headers.Accept = "application/json";
          }
          return config;
        },
        (error) => Promise.reject(error)
      );
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (err: any) => {
      console.log("error jalan", err);
      onError();
    },
  });
  return mutation;
};


export const useGetListTable = (
  payload: TablePartials,
) => {
  const query = useQuery(
    {
      placeholderData: keepPreviousData,
      queryFn: async () => {
        const res = await axios.get(`${url}/posts`);
        console.log(res, 'response dari useQuery')
        return res.data;
      },
      queryKey: [
        'list-table',
        payload
      ],
    },
  );

  return query;
};