import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../auth/authSlice";
interface PaymentHistory {
  _id: string;
  user: string;
  type: string;
  downloadLimit: number;
  timeLimit: number;
  transactionId: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL_API as string,
    credentials: "include",
  }),

  tagTypes: ["paymentHistory"],

  endpoints: (builder) => ({
    getPrice: builder.query<PaymentHistory[], void>({
      query: () => `/payment/v1/single`,
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
  }),
});

export const {
  useGetPriceQuery,
  useCreatePaymentMutation,
  useGetPaymentHistoryQuery,
} = apiSlice;

export default apiSlice;
