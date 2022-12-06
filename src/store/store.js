import { configureStore } from '@reduxjs/toolkit'
import { artistSlice } from './slices/artistSlice'
import {authSlice} from './slices/authSlice'
export const store=configureStore({
    reducer: {
       artist: artistSlice.reducer,
       authState: authSlice.reducer,
    }
})

