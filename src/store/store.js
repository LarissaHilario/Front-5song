import { configureStore } from '@reduxjs/toolkit'
import { artistSlice } from './slices/artistSlice'

const store=configureStore({
    reducer: {
       artistas: artistSlice.reducer
    }
})

export default store