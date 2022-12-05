import React from 'react';
import Play from '../../assets/Play.jsx';
import Pause from '../../assets/Pause.jsx';
import Prev from '../../assets/Prev.jsx';
import Next from '../../assets/Next.jsx';
const AudioControls = ({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev,
}) => (
  <div className="audio-controls">
    <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={handlePrev}
    >
      <Prev />
    </button>
    <button
      className={
        isPlaying ? "pause" : "play"
      }
      onClick={() => setIsPlaying(!isPlaying)}
    >
      {isPlaying ? <Pause /> : <Play />}
    </button>
    <button
      type="button"
      className="next"
      aria-label="Next"
      onClick={handleNext}
    >
      <Next />
    </button>
  </div>
);

export default AudioControls;