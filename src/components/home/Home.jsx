import { Col, Container, Row } from "react-bootstrap"
import CurtainContainer from "./CurtainContainer"
import AudioController from "./AudioController"
import Main from "./Main"
import React, { useEffect, useState } from 'react';
import Quiz from "../game/miniGames/quiz/Quiz";
import "../../assets/css/Home.css"
const Home = () => {
    const [curtainsOpened, setCurtainsOpened] = useState(false);
    const [loading, setLoading] = useState(true);
   
  const index = 0;
  useEffect(() => {
    document.querySelectorAll('.ball1, .ball2, .ball3').forEach((ball, index) => {
      ball.classList.add(`animate-bounce${index + 1}`);
    });
    const timeout = setTimeout(() => {
        setLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
}, []);

  
    return (
      <div className=""  >
           {loading ? (
            
                <div className="d-flex justify-content-center align-items-center text-white" style={{ minHeight:"100vh"}}>
                 
                  <div className="ball1 bg-white mx-2 rounded rounded-circle" style={{ minHeight:"5rem",minWidth:"5rem"}}></div>
                  <div className="ball2 bg-white mx-2 rounded rounded-circle" style={{ minHeight:"5rem",minWidth:"5rem"}}></div>
                  <div className="ball3 bg-white mx-2 rounded rounded-circle" style={{ minHeight:"5rem",minWidth:"5rem"}}></div>
                  </div>
            ) : (
                <div>
                    {/* <CurtainContainer curtainsOpened={curtainsOpened} /> */}
                    <Main />
                    {/* <AudioController /> */}
                </div>
            )}
      </div>
    );
  };
  // <CurtainContainer curtainsOpened={curtainsOpened} />
  export default Home;