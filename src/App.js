// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import Home from './components/home/Home';
import Game from './components/game/game';
import Setup from './components/game/setup';
import Login from './components/login/login';
import Quiz from './components/game/miniGames/quiz/Quiz';
import Register from './components/login/register';
import Asosijacije from './components/game/asosijacije';
import Impostazioni from './components/impostazioni/Impostazioni';
const App = () => {

    return (
        
        <BrowserRouter >
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/game" element={<Game />} />
            <Route path="/game-setup" element={<Setup />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/register" element={<Register />} />
            <Route path="/asosijacije" element={<Asosijacije />} />
            <Route path="/impostazioni" element={<Impostazioni />} />
            
        </Routes>
    </BrowserRouter>

    );
};

export default App;
