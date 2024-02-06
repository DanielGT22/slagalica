// Ludo.jsx
import React, { useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../assets/css/Game.css"

const Ludo = () => {
  const [pieces, setPieces] = useState([
    
   'cell-1-1', 'cell-1-2', 
     'cell-2-1', 'cell-2-2'
 
  ]);

  const nonClickable = [
    'cell-0-0', 'cell-0-1', 'cell-0-2', 'cell-0-3',  'cell-0-7', 'cell-0-8', 'cell-0-9','cell-0-10',
    'cell-1-0', 'cell-1-3',  'cell-1-7', 'cell-1-10', 
    'cell-2-0', 'cell-2-3','cell-2-7', 'cell-2-10',
    'cell-3-0', 'cell-3-1', 'cell-3-2', 'cell-3-3','cell-3-7', 'cell-3-8', 'cell-3-9', 'cell-3-10', 
    'cell-5-5',
    'cell-7-0', 'cell-7-1', 'cell-7-2', 'cell-7-3', 'cell-7-7', 'cell-7-8', 'cell-7-9','cell-7-10',
    'cell-8-0', 'cell-8-3', 'cell-8-7','cell-8-10',
    'cell-9-0', 'cell-9-3','cell-9-7',  'cell-9-10', 
    'cell-10-0', 'cell-10-1', 'cell-10-2', 'cell-10-3','cell-10-7', 'cell-10-8', 'cell-10-9','cell-10-10'
  ];
 const renderGrid = () => {
   
    
    const renderChessboard = () => {

 const togglePiece = (cellId) => {
      const pieceIndex = pieces.indexOf(cellId);
      if (pieceIndex === -1) {
        setPieces([...pieces, cellId]);
      } else {
        const newPieces = [...pieces];
        newPieces.splice(pieceIndex, 1);
        setPieces(newPieces);
      }
    };

      const grid = [];
      for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
          const cellId = `cell-${i}-${j}`;
          const backgroundColor = (i + j) % 2 === 0 ? 'white' : 'grey';
          const isPiece = pieces.includes(cellId); // Check if there's a piece on this cell
          const isClickable = !nonClickable.includes(cellId); // Check if the cell is clickable

        
          grid.push(
            <div
              key={cellId}
              id={cellId} 
              // className={"chess-cell rounded rounded-circle ${isPiece ? 'has-piece' : ''}"}
              className={`chess-cell rounded rounded-circle ${isPiece ? 'has-piece' : ''}`}

              onClick={isClickable ? () => togglePiece(cellId) : null} // Conditionally render onClick event handler

          
            >
              {/* <span className='nome'>{cellId}</span> */}
             
              {isPiece && isClickable && <div className="piece" />}

            </div>
          );
        }
      }
      return grid;
    };
  
    return (
      <div className='bg-secondary d-flex justify-content-between'>
        <div className='d-flex flex-column'>
          <div className='boxTop bg-danger d-flex flex-column justify-content-between'>
            <div className='d-flex justify-content-between'>
              <div>1</div>
              <div>1</div>
            </div>
            <div className='d-flex justify-content-between'>
              <div>1</div>
              <div>1</div>
            </div>
          </div>
          <div className='boxBot bg-success d-flex flex-column justify-content-between'>
            <div className='d-flex justify-content-between'>
              <div>1</div>
              <div>1</div>
            </div>
            <div className='d-flex justify-content-between'>
              <div>1</div>
              <div>1</div>
            </div>
          </div>
        </div>
  
     
        <div className='bg-light boxBig'>
        <div className="chessboard">
          {renderChessboard()}
        </div>
      </div>
  
        <div className='d-flex flex-column'>
          <div className='boxTop bg-primary d-flex flex-column justify-content-between'>
            <div className='d-flex justify-content-between'>
              <div>1</div>
              <div>1</div>
            </div>
            <div className='d-flex justify-content-between'>
              <div>1</div>
              <div>1</div>
            </div>
          </div>
          <div className='boxBot bg-warning d-flex flex-column justify-content-between'>
            <div className='d-flex justify-content-between'>
              <div>1</div>
              <div>1</div>
            </div>
            <div className='d-flex justify-content-between'>
              <div>1</div>
              <div>1</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Container className="text-center mt-2 container-custom-width"  >
        <h1 className="m-2">Giocatori</h1>
        {renderGrid()}
        <Row>
          <Col>
            <Link to="/game">
              <Button className="btn btn-danger">
                <span className="fs-1">Gioca!</span>
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Ludo;
