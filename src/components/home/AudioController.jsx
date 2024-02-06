// AudioController.js
import React, { useState } from 'react';
import backgroundMusic from "../../assets/audio/theamazing.mp3";
import "../../assets/css/CurtainContainer.css"

const AudioController = () => {
    const [audio] = useState(new Audio(backgroundMusic)); 
    const [volume, setVolume] = useState(0.02);

    const handlePlayButtonClick = () => {
        audio.play().catch(error => console.error('Audio play error:', error));
    };

    const handlePauseButtonClick = () => {
        audio.pause();
        audio.currentTime = 0;
    };

    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
        audio.volume = newVolume;
    };

    return (
        <div className="AudioController">
            <button className='btn btn-danger border border-dark ms-3 px-2 py-1' onClick={handlePlayButtonClick}>Play</button>
            <button className='btn btn-danger border border-dark m-1 px-2 py-1' onClick={handlePauseButtonClick}>Pause</button>

            <input 
                className='d-flex m-2'
                type="range" 
                min="0" 
                max="1" 
                step="0.02" 
                value={volume} 
                onChange={handleVolumeChange} 
            />
        </div>
    );
};

export default AudioController;
