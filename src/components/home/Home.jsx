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
      <div className="h-100">
        <Main />
        <AudioController />
      </div>
    );
  };
  // <CurtainContainer curtainsOpened={curtainsOpened} />
  export default Home;