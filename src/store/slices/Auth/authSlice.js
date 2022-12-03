import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
        status:'checking', //'not-authenticated', 'authenticated'
        email:null,
        errorMessage:null,
},
   reducers: {
       login:(state, action)=>{

       },
       logout:(state, payload)=>{

       },
       checkingCredentials: (state)=>{

       }
      }
   });

// Action creators are generated for each case reducer function
export const { login,logout,checkingCredentials } = authSlice.actions;