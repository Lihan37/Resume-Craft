/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../auth/authSlice";
import { Pricing } from "../../types/paymentResponse";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL_API as string,
    credentials: "include",
  }),

  tagTypes: ["paymentHistory", "price", "allPayment"],

  endpoints: (builder) => ({
    getPrice: builder.query({
      query: () => `/payment/v1/single`,
      providesTags: ["price"],
    }),

    getPaymentHistory: builder.query({
      query: () => `/payment/v1/history`,
      providesTags: ["paymentHistory"],
    }),
    createPayment: builder.mutation({
      query: (data) => ({
        url: "/payment/v1/history/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["paymentHistory"],
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
    getAllPrice: builder.query<Pricing[], void>({
      query: () => `/payment/v1`,
      providesTags: ["allPayment"],
    }),

    createPricing: builder.mutation({
      query: (data) => ({
        url: "/payment/v1",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["allPayment"],
    }),
    editPricing: builder.mutation({
      query: ({ data, id }) => ({
        url: `/payment/v1/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["allPayment"],
    }),
    deletePricing: builder.mutation({
      query: (id) => ({
        url: `/payment/v1/${id}`,
        method: "DELETE",
      }),

      // Update getAllPrice cache data
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const updateTaskCache = dispatch(
          apiSlice.util.updateQueryData("getAllPrice", undefined, (tasks) => {
            return tasks.filter((item) => item._id !== id);
          })
        );
        try {
          await queryFulfilled;
        } catch (error) {
          updateTaskCache.undo();
        }
      },
    }),
  }),
});

export const {
  useGetPriceQuery,
  useCreatePaymentMutation,
  useGetPaymentHistoryQuery,
  useGetAllPriceQuery,
  useCreatePricingMutation,
  useEditPricingMutation,
  useDeletePricingMutation,
} = apiSlice;

export default apiSlice;
