import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pieceBlue from "../../assets/img/pieceBlue_border03.png"
import pieceYellow from "../../assets/img/pieceYellow_border01.png"
import pieceGreen from "../../assets/img/pieceGreen_border02.png"
import pieceRed from "../../assets/img/pieceRed_border02.png"

const Ludo = () => {
  const [pronto, setPronto] = useState([false, true, true, true]);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
  
    const getUserInfo = async () => {
      try {
        if (token) {
          const userResponse = await fetch("http://localhost:3001/users/me", {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (userResponse.ok) {
            const userData = await userResponse.json();
            setUserName(userData.username);
          } else {
            throw new Error("Errore nel recupero dei dati dell'utente");
          }
        } else {
          window.location.href = "/"; 
        }
      } catch (error) {
        console.error(error);
      } 
    };
  
    getUserInfo();
  }, []);

  const handleProntoClick = (index) => {
    const updatedPronto = [...pronto];
    updatedPronto[index] = !updatedPronto[index];
    setPronto(updatedPronto);
  };

  const allPlayersReady = pronto.every((player) => player);

  const handleGiocaClick = () => {
    if (allPlayersReady) {
     window.location.href = "/game"
    } else {
      // Do nothing if not all players are ready
    }
  };


  return (
    <Container className="text-center mt-4">
      <h1 className='m-5 text-white'>Giocatori</h1>
      <Row className="">
        {[pieceRed, pieceBlue, pieceYellow, pieceGreen].map((piece, index) => (
          <Col key={index} xs={12} sm={6} className="mb-3 d-flex justify-content-center  ">
            <div
              className="player  border rounded p-3 w-75"
              style={{ width: '100%', height: '200px' }}
            >
              <img src={piece} alt="" />
              <h3 className='text-white'>{index === 0 ? userName : `Player ${index + 1}`}</h3>
              <Button 
                className={pronto[index] ? 'btn btn-success border border-white' : 'btn-dark border border-white '}
                onClick={() => handleProntoClick(index)}
              >
                {pronto[index] ? 'Pronto!' : 'Pronto?'}
              </Button>
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
         
            <Button className="btn btn-light" disabled={!allPlayersReady} 
          onClick={handleGiocaClick}    >
              <span className='fs-1'>Gioca!</span>
            </Button>
         
        </Col>
      </Row>
    </Container>
  );
};

export default Ludo;
