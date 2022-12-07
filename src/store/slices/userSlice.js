import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    count: 0,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload.user;
      state.user= state.user.data.length;
    },
    cleanUser: state => {
      state.user = null;
      state.count = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser,cleanUser} = userSlice.actions;