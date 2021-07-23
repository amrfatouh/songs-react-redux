import React from "react";
import SongDetail from "./components/SongDetail";
import SongsList from "./components/SongsList";

function App() {
  return (
    <div className="ui grid container">
      <div className="eight wide column">
        <SongsList />
      </div>
      <div className="eight wide column">
        <SongDetail />
      </div>
    </div>
  );
}

export default App;
