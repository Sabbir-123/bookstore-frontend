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

      query: ( data ) => ({
        url: `/books/new-book`,
        method: 'POST',
        body: data,

      })
      
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comments'],
    }),
    getComment: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ['comments'],
    }),
  }),
});

export const {
  useGetCommentQuery,
  useGetProductsQuery,
  usePostCommentMutation,
  useSingleProductQuery,
  useAddBookMutation,
} = productApi;
