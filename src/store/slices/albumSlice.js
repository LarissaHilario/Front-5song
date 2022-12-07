import { createSlice } from '@reduxjs/toolkit';

export const albumSlice = createSlice({
  name: 'album',
  initialState: {
    album: null,
    count: 0,
  },
  reducers: {
    addAlbum: (state, action) => {
      state.album = action.payload.album;
      state.album = state.album.data.length;
    },
    addAlbums: (state, action) => {
      state.album = [...state.album, action.payload.album];
    },
    cleanAlbum: state => {
      state.album = null;
      state.count = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAlbum, addAlbums, cleanAlbum} = albumSlice.actions;