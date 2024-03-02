import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../auth/authSlice";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL_API as string,
    credentials: "include",
  }),

  endpoints: (builder) => ({
    getPrice: builder.query({
      query: () => `/payment/v1/single`,
    }),
    createPayment: builder.mutation({
      query: (data) => ({
        url: "/payment/v1/history/create",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data.success) {
            dispatch(setUser({ user: data.user }));
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useGetPriceQuery, useCreatePaymentMutation } = apiSlice;

export default apiSlice;
