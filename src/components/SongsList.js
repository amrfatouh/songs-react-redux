import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

function SongsList(props) {
  const renderedSongs = props.songs.map((song) => {
    return (
      <div className="ui segment" key={song.title}>
        <button
          className="ui right floated button"
          onClick={() => props.selectSong(song)}>
          Select
        </button>
        <div>{song.title}</div>
        <div>{song.duration}</div>
      </div>
    );
  });
  return <div>{renderedSongs}</div>;
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongsList);
