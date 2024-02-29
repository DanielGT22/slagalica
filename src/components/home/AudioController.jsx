// AudioController.js
import React, { useEffect, useState } from 'react';
import backgroundMusic from "../../assets/audio/theamazing.mp3";
import "../../assets/css/CurtainContainer.css"

const AudioController = () => {
    const [audio] = useState(new Audio(backgroundMusic)); 
    const [volume, setVolume] = useState(0.02);
    const [isPlaying, setIsPlaying] = useState(false);
    const [playbackPosition, setPlaybackPosition] = useState(0);
    const [showVolumeControl, setShowVolumeControl] = useState(false);
    // const handlePlayButtonClick = () => {
    //     audio.volume = volume;
    //     audio.play().catch(error => console.error('Audio play error:', error));
    // };

    // const handlePauseButtonClick = () => {
    //     audio.pause();
    //     audio.currentTime = 0;
    // };

    useEffect(() => {
        // Add event listener to update isPlaying state
        const updateIsPlaying = () => {
            setIsPlaying(!audio.paused);
        };
        audio.addEventListener('play', updateIsPlaying);
        audio.addEventListener('pause', updateIsPlaying);

        return () => {
            // Clean up event listener
            audio.removeEventListener('play', updateIsPlaying);
            audio.removeEventListener('pause', updateIsPlaying);
        };
    }, [audio]);
    const handleTogglePlayback = () => {
        if (audio.paused) {
            audio.volume = volume;
            audio.currentTime = playbackPosition; // Set playback position
            audio.play().catch(error => console.error('Audio play error:', error));
        } else {
            audio.pause();
            setPlaybackPosition(audio.currentTime);
        }
    };


    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
        audio.volume = newVolume;
    };
// MIGLIORA IL AUDIO CONTROLLER 
// molto brutto 
    return (
        <div className="AudioController">
            <button className='btn btn-danger border border-dark m-1 px-2 py-1' onClick={handleTogglePlayback}>
                {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pause" viewBox="0 0 16 16">
                        <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
                        <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
                    </svg>
                )}
            </button>

            <div className="volume-control-container" onMouseEnter={() => setShowVolumeControl(true)} onMouseLeave={() => setShowVolumeControl(false)}>
                <button className='btn btn-secondary border border-dark m-1 px-2 py-1' onClick={() => audio.muted = !audio.muted}>
                    {audio.muted ? (
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-mute" viewBox="0 0 16 16">
                       <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06M6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0"/>
                     </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up" viewBox="0 0 16 16">
  <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
  <path d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11"/>
</svg>
                    )}
                </button>

              
            </div>
            {showVolumeControl && (
                    <input 
                        className='d-flex m-2 '
                        type="range" 
                        min="0" 
                        max="1" 
                        step="0.02" 
                        value={volume} 
                        onChange={handleVolumeChange} 
                    />
                )}
        </div>
    );
};

export default AudioController;
