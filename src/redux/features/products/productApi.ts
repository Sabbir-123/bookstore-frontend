import { api } from '@/redux/api/apiSlice';

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/books/all-books',
    }),
    singleProduct: builder.query({
      query: (id) => `/books/book/${id}`,
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: `/books/new-book`,
        method: 'POST',
        body: data,
      }),
    }),
    updateBook: builder.mutation({
      query: ({ id, body }) => ({
        url: `/books/book/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["bookDetails"],
    }),
    deleteBook: builder.mutation({
      query: (body) => ({
        url: `/book/${body}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deleteBook"],
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
      
        url: `/books/new-review/${id}`,

        method: "POST",
        body: data,
      }),
      invalidatesTags: ["bookReview"],
    }),
    getReview: builder.query({
      query: (id) => `/books/book/review/${id}`,
      providesTags: ['bookReview'],
    }),
  }),
});

export const {
  useGetReviewQuery,
  useGetProductsQuery,
  usePostReviewMutation,
  useSingleProductQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = productApi;
