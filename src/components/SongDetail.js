import React from "react";
import { connect } from "react-redux";

function SongDetail(props) {
  if (!props.selectedSong)
    return <div className="ui medium header">Please select a song</div>;
  return (
    <div className="ui segment">
      <div className="ui medium header">
        Details of {props.selectedSong.title}
      </div>
      <p>Title: {props.selectedSong.title}</p>
      <p>Duration: {props.selectedSong.duration}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
