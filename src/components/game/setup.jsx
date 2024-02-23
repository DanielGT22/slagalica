// Ludo.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pieceBlue from "../../assets/img/pieceBlue_border03.png"
import pieceYellow from "../../assets/img/pieceYellow_border01.png"
import pieceGreen from "../../assets/img/pieceGreen_border02.png"
import pieceRed from "../../assets/img/pieceRed_border02.png"
const Ludo = () => {

  return (
    <Container className="text-center mt-4">
      <h1 className='m-5'>Giocatori</h1>
      <Row className="justify-content-center">
          <Col  xs={12} sm={6} md={3} className="mb-3">
            <div
              className="player  border rounded p-3"
              style={{ width: '100%', height: '200px' }}
            >
              <img src={pieceRed} alt="" />
              <h3>Username</h3>
              <Button>Pronto!</Button>
            </div>
          </Col>

          <Col  xs={12} sm={6} md={3} className="mb-3">
            <div
              className="player  border rounded p-3"
              style={{ width: '100%', height: '200px' }}
            >
              <img src={pieceBlue} alt="" />
              <h3>PlayerBot1</h3>
              <Button className='bg-danger'>Rimuovi!</Button>
            </div>
          </Col>

          <Col  xs={12} sm={6} md={3} className="mb-3">
            <div
              className="player  border rounded p-3"
              style={{ width: '100%', height: '200px' }}
            >
              <img src={pieceYellow} alt="" />
              <h3>PlayerBot2</h3>
              <Button className='bg-danger'>Rimuovi!</Button>
            </div>
          </Col>

          <Col  xs={12} sm={6} md={3} className="mb-3">
            <div
              className="player  border rounded p-3"
              style={{ width: '100%', height: '200px' }}
            >
              <img src={pieceGreen} alt="" />
              <h3>PlayerBot3</h3>
              <Button className='bg-danger'>Rimuovi!</Button>
            </div>
          </Col>
        
      </Row>
      <Row>
        <Col>
        <Link to="/game">
            <Button className="btn btn-danger">
              <span className='fs-1'>Gioca!</span>
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Ludo;
