import { combineReducers } from "redux";

export const songsReducer = () => {
  return [
    { title: "song 1", duration: "4:05" },
    { title: "song 2", duration: "3:55" },
    { title: "song 3", duration: "2:01" },
    { title: "song 4", duration: "6:12" },
  ];
};

export const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer,
});
