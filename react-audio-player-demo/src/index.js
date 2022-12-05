import React from "react";
import ReactDOM from "react-dom";
import AudioPlayer from "./AudioPlayer";
import tracks from "./tracks";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AudioPlayer tracks={tracks} />
  </React.StrictMode>,
  rootElement
);
