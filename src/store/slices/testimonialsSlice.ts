import { createSlice } from '@reduxjs/toolkit';

export type Testimonial = {
   title: string;
   tag: string;
   date: Date;
   reporter: string;
   image: string;
   link: string;
};

export type TestimonialsState = {
   testimonials: Testimonial[];
   isLoading: boolean;
};

const initialState: TestimonialsState = {
   testimonials: [],
   isLoading: false,
};

const testimonialsSlice = createSlice({
   name: 'testimonials',
   initialState,
   reducers: {
      setTestimonials: (state, action) => {
         state.testimonials = action.payload;
         state.isLoading = false;
      },
      setIsLoading: (state, action) => {
         state.isLoading = action.payload;
      },
   },
});

export const { setTestimonials, setIsLoading } = testimonialsSlice.actions;

export default testimonialsSlice.reducer;
