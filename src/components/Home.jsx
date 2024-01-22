import { Col, Container, Row } from "react-bootstrap"
import CurtainContainer from "./CurtainContainer"
import AudioController from "./AudioController"
import Main from "./Main"
import React, { useEffect, useState } from 'react';
const Home = () => {
    const [curtainsOpened, setCurtainsOpened] = useState(false);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setCurtainsOpened(true);
      }, 1000);
  
      return () => clearTimeout(timeout);
    }, []);
  
    return (
      <div>
           <Main />
        <CurtainContainer curtainsOpened={curtainsOpened} />
        <AudioController />
        </div>
    );
  };
  
  export default Home;