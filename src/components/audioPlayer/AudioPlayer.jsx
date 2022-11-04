import React, { useEffect, useRef, useState } from 'react';
import songs from '../Player/tracksTests.js';
import AudioControls from './AudioControls.jsx';
import './audioPlayer.css';

const AudioPlayer = ({
    currentTrack,
    currentIndex,
    setCurrentIndex,
    total
}) => {

    // State
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    var audioSrc = songs[currentIndex].track;
    // Refs
    const audioRef = useRef(new Audio(audioSrc));
    const intervalRef = useRef();
    const isReady = useRef(false);

    // Destructure for conciseness
    const { duration } = audioRef.current;

    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                handleNext();
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, [1000]);
    };

    const onScrub = (value) => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setTrackProgress(audioRef.current.currentTime);
    };

    const onScrubEnd = () => {
        // If not already playing, start
        if (!isPlaying) {
            setIsPlaying(true);
        }
        startTimer();
    };

    const handlePrev = () => {
        if (currentIndex - 1 < 0) {
            setCurrentIndex(songs.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < songs.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };
    async function playMusic() {
        try {
            await audioRef.current.play();
            setIsPlaying(true);
            startTimer();
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        if (audioRef.current.src) {
            if (isPlaying) {
                playMusic(audioRef.current);
            } else {
                audioRef.current.pause();
            }
        } else if (isPlaying) {
            audioRef.current = new Audio(audioSrc);
            playMusic(audioRef.current.play());
        } else {
            clearInterval(intervalRef.current);
            audioRef.current.pause();
        }

    }, [isPlaying]);

    // Handles cleanup and setup when changing tracks
    useEffect(() => {
        audioRef.current.pause();

        audioRef.current = new Audio(audioSrc);
        setTrackProgress(audioRef.current.currentTime);

        if (isReady.current) {
            playMusic();
        } else {
            // Set the isReady ref as true for the next pass
            isReady.current = true;
        }
    }, [currentIndex]);

    useEffect(() => {
        // Pause and clean up on unmount
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        };
    }, []);
    const addZero = (n) => {
        return n > 9 ? "" + n : "0" + n;
    };
    return (
        <div className="audio-player">
            <div className="track-info">
                <img
                    className="artwork"
                    src={songs[currentIndex].album.image}
                />
                <h2 className="title">{songs[currentIndex].name}</h2>
                <h3 className="artist">{songs[currentIndex].artists}</h3>
                <AudioControls
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                    total={total}
                />
                <p className="duration">{trackProgress < "59" ? "0" : "1"}:{addZero(Math.round(trackProgress))}</p>
                <input
                    type="range"
                    value={trackProgress}
                    step="1"
                    min="0"
                    max={duration ? duration : `${duration}`}
                    className="progress"
                    onChange={(e) => onScrub(e.target.value)}
                    onMouseUp={onScrubEnd}
                    onKeyUp={onScrubEnd}
                />
            </div>
        </div>
    );
};

export default AudioPlayer;
