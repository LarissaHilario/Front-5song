import songs from "../components/Player/tracksTests";
export const initialState = {
    playlists: songs,
    playing:null,
    search:null
};
const musicReducer = (state=initialState,action) => {
    switch (action.type){
        case "SET_PLAYLIST":
            return {
                ...state,
                playlists: action.payload
            }
        case "SET_CURR_PLAYING":
            return {
                ...state,
                playing: action.payload
            }
        case "INC_TIMES_PLAYED":
            songs[action.payload].track += 1;
            return state;
        case "SET_SEARCH_QUERY":
            return {
                ...state,
                search: action.payload
            };
        default:
            return state;
    }
};

export default musicReducer;