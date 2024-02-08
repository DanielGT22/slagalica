// Ludo.jsx
import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../assets/css/Game.css";

const Ludo = () => {
  // Defining whose turn it currently is
  let turn = '';

  // Defining the selected piece
  let selectedPiece = null;

  // Defining each color and their starting positions
  const colors = {
    red: ['cell-1-1', 'cell-1-2', 'cell-2-1', 'cell-2-2'],
    blue: ['cell-1-8', 'cell-1-9', 'cell-2-8', 'cell-2-9'],
    green: ['cell-8-1', 'cell-8-2', 'cell-9-1', 'cell-9-2'],
    yellow: ['cell-8-8', 'cell-8-9', 'cell-9-8', 'cell-9-9']
  };

  // Defining the starting points for every color
  const startingPoints = {
    red: 'cell-4-0',
    blue: 'cell-0-6',
    green: 'cell-6-10',
    yellow: 'cell-10-4'
  };

  // Defining the starting value for each color
  const colorCounts = {
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0
  };

  // Dice value
  let diceValue = 0;

  // Function to roll the dice
  const rollDice = () => {
    // Generate a random number between 1 and 6
    diceValue = Math.floor(Math.random() * 6) + 1;
    // Update UI to reflect the new dice value
  };

  // Defining every "Tile" that the player can't interact with
  const nonClickable = [
    'cell-0-0', 'cell-0-1', 'cell-0-2', 'cell-0-3', 'cell-0-7', 'cell-0-8', 'cell-0-9', 'cell-0-10',
    'cell-1-0', 'cell-1-3', 'cell-1-7', 'cell-1-10',
    'cell-2-0', 'cell-2-3', 'cell-2-7', 'cell-2-10',
    'cell-3-0', 'cell-3-1', 'cell-3-2', 'cell-3-3', 'cell-3-7', 'cell-3-8', 'cell-3-9', 'cell-3-10',
    'cell-5-5',
    'cell-7-0', 'cell-7-1', 'cell-7-2', 'cell-7-3', 'cell-7-7', 'cell-7-8', 'cell-7-9', 'cell-7-10',
    'cell-8-0', 'cell-8-3', 'cell-8-7', 'cell-8-10',
    'cell-9-0', 'cell-9-3', 'cell-9-7', 'cell-9-10',
    'cell-10-0', 'cell-10-1', 'cell-10-2', 'cell-10-3', 'cell-10-7', 'cell-10-8', 'cell-10-9', 'cell-10-10'
  ];

  // Defining the Tiles a player can interact with
  const movingTiles = [
    'cell-4-0', 'cell-4-1', 'cell-4-2', 'cell-4-3', 'cell-4-4', 'cell-3-4', 'cell-2-4', 'cell-1-4', 'cell-0-4', 'cell-0-5',
    'cell-0-6', 'cell-1-6', 'cell-2-6', 'cell-3-6', 'cell-4-6', 'cell-4-7', 'cell-4-8', 'cell-4-9', 'cell-4-10', 'cell-5-10',
    'cell-6-10', 'cell-6-9', 'cell-6-8', 'cell-6-7', 'cell-6-6', 'cell-7-6', 'cell-8-6', 'cell-9-6', 'cell-10-6', 'cell-10-6',
    'cell-10-4', 'cell-9-4', 'cell-8-4', 'cell-7-4', 'cell-6-4', 'cell-6-3', 'cell-6-2', 'cell-6-1', 'cell-6-0', 'cell-5-0',
  ];

  let  selectedPawn;
  let  targetDiv;
  // Function to select a pawn
  const selectPawn = (event, pawnId ) => {
    event.stopPropagation();
    selectedPawn = document.getElementById(pawnId) 
    console.log(selectedPawn);
    selectedPawn.remove();
  }
  const selectedField = (cellId) => {
    targetDiv = document.getElementById(cellId)
    console.log(targetDiv);
    if (selectedPawn) {
      targetDiv.appendChild(selectedPawn);
      selectedPawn = undefined; 
      console.log(selectedPawn);
  } else {
      console.error("No pawn selected or already moved."); // Handle error or log message accordingly
  }
  }

  // Rendering the main grid
  const renderGrid = () => {
    // Logic to render the main grid
    const renderChessboard = () => {
      console.log("Rendering chessboard...");

      // Rendering all the tiles
      const grid = [];
      let x = 1;
      // Render all the rows
      for (let i = 0; i < 11; i++) {
        // Render the columns for each row
        for (let j = 0; j < 11; j++) {
          
          // Give a unique id to each tile, containing "cell" and its row-col
          const cellId = `cell-${i}-${j}`;
          const pawnId = `pawn-${x}`;
          // Check if there is one of the color pawnStartingTiles on a tile
          const isStartingPiece = colors.red.includes(cellId) || colors.blue.includes(cellId) || colors.green.includes(cellId) || colors.yellow.includes(cellId);
          // Checks if the piece is in the "nonClickable" array
          const isClickable = !nonClickable.includes(cellId);
          grid.push(
            
            <div key={cellId} id={cellId}  onClick={() =>selectedField(cellId) } className={`chess-cell rounded rounded-circle ${isStartingPiece ? 'has-piece' : ''}`} >
                
              {isStartingPiece && x++ && (<div onClick={(event) => selectPawn(event, pawnId)} id={pawnId}></div>)   }
             
            </div>
          );
          
        }
      }
      return grid;
    };

    return (
      <div className='bg-light boxBig'>
        <div className="chessboard">
          {renderChessboard()}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Container className="text-center mt-2 container-custom-width"  >
        <h1 className="m-2">Players</h1>
        <h2>{`Turn: ${turn}`}</h2>
        <button onClick={rollDice}>Roll Dice</button>
        <p>{`Dice Value: ${diceValue}`}</p>
        {renderGrid()}
        <Row>
          <Col>
            <Link to="/game">
              <Button className="btn btn-danger">
                <span className="fs-1">Play!</span>
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Ludo;
