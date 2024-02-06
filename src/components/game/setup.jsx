// Ludo.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Ludo = () => {

  return (
    <Container className="text-center mt-4">
      <h1 className='m-5'>Giocatori</h1>
      <Row className="justify-content-center">
          <Col  xs={12} sm={6} md={3} className="mb-3">
            <div
              className="player bg-light border rounded p-3"
              style={{ width: '100%', height: '200px' }}
            >
              Player 1
            </div>
          </Col>

          <Col  xs={12} sm={6} md={3} className="mb-3">
            <div
              className="player bg-light border rounded p-3"
              style={{ width: '100%', height: '200px' }}
            >
              Player 2
            </div>
          </Col>

          <Col  xs={12} sm={6} md={3} className="mb-3">
            <div
              className="player bg-light border rounded p-3"
              style={{ width: '100%', height: '200px' }}
            >
              Player 3
            </div>
          </Col>

          <Col  xs={12} sm={6} md={3} className="mb-3">
            <div
              className="player bg-light border rounded p-3"
              style={{ width: '100%', height: '200px' }}
            >
              Player 4
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
