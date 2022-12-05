import { configureStore } from '@reduxjs/toolkit'
import { artistSlice } from './slices/artistSlice'

const store=configureStore({
    reducer: {
       artista: artistSlice.reducer
    }
})

export default store