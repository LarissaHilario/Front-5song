import { createSlice } from '@reduxjs/toolkit';

export const artistSlice = createSlice({
  name: 'artista',
  initialState: {
    artistas: null,
    count: 0,
  },
  reducers: {
    addArtistas: (state, action) => {
      state.artistas = action.payload.artistas;
      state.count = state.artistas.length;
    },
    addArtist: (state, action) => {
      state.artistas = [...state.artistas, action.payload.artista];
    },
    cleanArtist: state => {
      state.artistas = null;
      state.count = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addArtistas, addArtist, cleanArtist } = artistSlice.actions;
