import { createSlice } from '@reduxjs/toolkit';

export const podcastSlice = createSlice({
  name: 'podcast',
  initialState: {
    podcast: null,
    count: 0,
  },
  reducers: {
    addPodcast: (state, action) => {
      state.podcast = action.payload.podcast;
      state.count= state.podcast.data.length;
    },
    addPodcasts: (state, action) => {
      state.podcast = [...state.podcast, action.payload.podcast];
    },
    cleanPodcast: state => {
      state.podcast = null;
      state.count = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPodcast, addPodcasts, cleanPodcast } = podcastSlice.actions;