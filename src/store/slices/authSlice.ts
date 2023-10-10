import { createSlice } from '@reduxjs/toolkit';

const getUserInfoFromStorage = () => {
   const userInfo: string | null = localStorage.getItem('userInfo');
   return userInfo ? JSON.parse(userInfo) : null;
};

const initialState = {
   userInfo: getUserInfoFromStorage(),
};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setCredentials: (state, action) => {
         state.userInfo = action.payload;
         localStorage.setItem('userInfo', JSON.stringify(action.payload));
      },
      removeCredentials: (state) => {
         state.userInfo = null;
         localStorage.removeItem('userInfo');
      },
   },
});

export const { setCredentials, removeCredentials } = authSlice.actions;

export default authSlice.reducer;
