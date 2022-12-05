import { configureStore } from '@reduxjs/toolkit'
import { artistSlice } from './slices/artistSlice'

export const store=configureStore({
    reducer: {
       artist: artistSlice.reducer
    }
})

