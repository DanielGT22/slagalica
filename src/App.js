// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import Home from './components/home/Home';
import Game from './components/game/game';
import Setup from './components/game/setup';
const App = () => {

    return (
        
        <BrowserRouter >
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/game-setup" element={<Setup />} />
        </Routes>
    </BrowserRouter>

    );
};

export default App;
