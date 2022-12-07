import { createSlice } from '@reduxjs/toolkit';

export const songSlice = createSlice({
  name: 'song',
  initialState: {
    song: null,
    count: 0,
  },
  reducers: {
    addCanciones: (state, action) => {
      state.song = action.payload.song;
      state.count= state.song.data.length;
    },
    addSong: (state, action) => {
      state.song = [...state.song, action.payload.song];
    },
    cleanSong: state => {
      state.song = null;
      state.count = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCanciones, addSong, cleanSong } = songSlice.actions;