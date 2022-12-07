import { createSlice } from '@reduxjs/toolkit';

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    playlist: null,
    count: 0,
  },
  reducers: {
    addPlaylist: (state, action) => {
      state.playlist = action.payload.playlist;
      state.count = state.artist.data.length;
    },
    addplaylists: (state, action) => {
      state.playlist = [...state.playlist, action.payload.playlist];
    },
    cleanPlaylist: state => {
      state.playlist = null;
      state.count = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPlaylist, addPlaylists, cleanPlaylist } = playlistSlice.actions;