import React, { useEffect, useRef, useState } from 'react';
import AudioControls from './AudioControls.jsx';
import './audioPlayer.css';
import albumDefault from "../../assets/images/globos.jpg"

const AudioPlayer = ({
    songs,
    currentIndex,
    setCurrentIndex,
    total
}) => {

    // State
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioSrc = songs[currentIndex].songUrl;
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
    function formatTime(secs) {
        const t = new Date(1970, 0, 1);
        t.setSeconds(secs);
        let s = t.toTimeString().substr(0, 8);
        if (secs > 86399)
            s = Math.floor((t - Date.parse("1/1/70")) / 3600000) + s.substr(2);
        return s.substring(3);
    }
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

    useEffect(() => {
        if (audioRef.current.src) {
            if (isPlaying) {
                audioRef.current.play().then(() => { }).catch((e) => { audioRef.current.pause(); audioRef.current.currentTime = 0; });
                startTimer();
            } else {
                audioRef.current.pause();
            }
        } else if (isPlaying) {
            setIsPlaying(true);
            audioRef.current = new Audio(audioSrc);
            audioRef.current.play().then(() => { }).catch((e) => { audioRef.current.pause(); audioRef.current.currentTime = 0; });
            startTimer();
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
            setIsPlaying(true);
            audioRef.current.play().then(() => { }).catch((e) => { audioRef.current.pause(); audioRef.current.currentTime = 0; });
            startTimer();
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
    return (
        <div className="audio-player">
            <div className="track-info">
                <img
                    className="artwork"
                    src={songs[currentIndex].photoUrl!=null?songs[currentIndex].album.photoUrl: albumDefault}
                />
                <br></br>
                <h2 className="title">{songs[currentIndex].name}</h2>
                <br></br>
                <h3 className="artist">{songs[currentIndex].artists}</h3>
            </div>
            <div>
                <AudioControls
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                    total={total}
                />
            </div>
            <span className="song-duration flex">{formatTime(trackProgress)}/</span>
            <span className="song-duration flex">{formatTime(`${duration}`)}</span>
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
    );
};

export default AudioPlayer;