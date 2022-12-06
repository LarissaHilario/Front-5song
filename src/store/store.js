import { configureStore } from '@reduxjs/toolkit'
import { albumSlice } from './slices/albumSlice'
import { artistSlice } from './slices/artistSlice'
import {authSlice} from './slices/authSlice'
import { playlistSlice } from './slices/playlistSlice'
import { podcastSlice } from './slices/podcastSlice'
export const store=configureStore({
    reducer: {
       artist: artistSlice.reducer,
       podcast: podcastSlice.reducer,
       playlist: playlistSlice.reducer,
       album: albumSlice.reducer,
       authState: authSlice.reducer,
    }
})

