import { apiSlice } from './apiSlice';

const TESTIMONIALS_URL = '/api/testimonials';

export const testimonialsApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      getTestimonials: builder.query({
         query: () => ({
            url: `${TESTIMONIALS_URL}`,
            method: 'GET',
         }),
      }),
      removeTestimonial: builder.mutation({
         query: (testimonialId) => ({
            url: `${TESTIMONIALS_URL}/${testimonialId}`,
            method: 'DELETE',
         }),
      }),
      addTestimonial: builder.mutation({
         query: (data) => ({
            url: `${TESTIMONIALS_URL}`,
            method: 'POST',
            body: data,
         }),
      }),
      updateTestimonial: builder.mutation({
         query: (data) => ({
            url: `${TESTIMONIALS_URL}/${data.id}`,
            method: 'PUT',
            body: data,
         }),
      }),
   }),
});

export const {
   useGetTestimonialsQuery,
   useRemoveTestimonialMutation,
   useAddTestimonialMutation,
   useUpdateTestimonialMutation,
} = testimonialsApiSlice;
