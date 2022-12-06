import { createSlice } from '@reduxjs/toolkit';

export const artistSlice = createSlice({
  name: 'artist',
  initialState: {
    artist: null,
    count: 0,
  },
  reducers: {
    addArtistas: (state, action) => {
      state.artist = action.payload.artist;
      state.count = state.artist.data.length;
    },
    addArtist: (state, action) => {
      state.artist = [...state.artist, action.payload.artist];
    },
    cleanArtist: state => {
      state.artist = null;
      state.count = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addArtistas, addArtist, cleanArtist } = artistSlice.actions;
