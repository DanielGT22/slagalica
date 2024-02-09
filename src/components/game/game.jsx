// Ludo.jsx
import React, { useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../assets/css/Game.css";

const Ludo = () => {
  const [turnIndex, setTurnIndex] = useState(0);
  const [lastCells, setLastCells] = useState({});
  // Defining whose turn it currently is
  let turn = ["red", "blue", "yellow", "green"];

  const [diceValue, setDiceValue] = useState(0);


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

  // Function to roll the dice


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
  let selectedPawnFather;
  // Function to select a pawn
  const selectPawn = (event, pawnId ) => {
    if (diceValue > 0) {
      const playerColor = turn[turnIndex]; // Get the color of the current player
      const allowedPawns = {
        red: ["pawn-1","pawn-2","pawn-5","pawn-6"],
        blue: ["pawn-3","pawn-4","pawn-7","pawn-8"],
        yellow: ["pawn-11","pawn-12","pawn-15","pawn-16"], 
        green: ["pawn-9","pawn-10","pawn-13","pawn-14"]
      }; 
      let pawn1father = document.getElementById("pawn-1").parentElement.id
      let pawn2father = document.getElementById("pawn-2").parentElement.id
      let pawn3father = document.getElementById("pawn-3").parentElement.id
      let pawn4father = document.getElementById("pawn-4").parentElement.id
      let pawn5father = document.getElementById("pawn-5").parentElement.id
      let pawn6father = document.getElementById("pawn-6").parentElement.id
      let pawn7father = document.getElementById("pawn-7").parentElement.id
      let pawn8father = document.getElementById("pawn-8").parentElement.id
      let pawn9father = document.getElementById("pawn-9").parentElement.id
      let pawn10father = document.getElementById("pawn-10").parentElement.id
      let pawn11father = document.getElementById("pawn-11").parentElement.id
      let pawn12father = document.getElementById("pawn-12").parentElement.id
      let pawn13father = document.getElementById("pawn-13").parentElement.id
      let pawn14father = document.getElementById("pawn-14").parentElement.id
      let pawn15father = document.getElementById("pawn-15").parentElement.id
      let pawn16father = document.getElementById("pawn-16").parentElement.id

      if (allowedPawns[playerColor] && allowedPawns[playerColor].includes(pawnId)) {
        selectedPawn = document.getElementById(pawnId);
        selectedPawnFather = document.getElementById(pawnId).parentElement.id;
        console.log(selectedPawnFather);
        if (["pawn-1", "pawn-2", "pawn-5", "pawn-6"].includes(pawnId) &&  colors[playerColor].includes(selectedPawnFather) && diceValue === 6 ) {
          console.log(playerColor);
          selectedPawn.remove(); 
          console.log(colors[playerColor]);
          const startRed = document.getElementById(movingTiles[0]);
          startRed.appendChild(selectedPawn); 
          selectedPawn = undefined; 
          setDiceValue(0); 
          // setTurnIndex((prevIndex) => (prevIndex + 1) % turn.length);
          return; 
      } 
    
      
      else if (["pawn-1", "pawn-2", "pawn-5", "pawn-6"].includes(pawnId) &&  movingTiles.includes(selectedPawnFather) ) {

        const index = movingTiles.indexOf(selectedPawnFather);
        if (index !== -1 && index + diceValue < movingTiles.length) {
          const destinationId = movingTiles[index + diceValue]; 
          const destinationElement = document.getElementById(destinationId);
          destinationElement.appendChild(selectedPawn);
          selectedPawn = undefined; 
          setDiceValue(0); 
          // setTurnIndex((prevIndex) => (prevIndex + 1) % turn.length);
          if (diceValue === 6 ) {
            rollDice();
          } else {
             setTurnIndex((prevIndex) => (prevIndex + 1) % turn.length);
             setDiceValue(0); 
          }
          return;
          
      }

        selectedPawn.remove(); 
        selectedPawn = undefined; 
        setDiceValue(0); 
        // setTurnIndex((prevIndex) => (prevIndex + 1) % turn.length);
        return; 
    } 
      
      else if (["pawn-3", "pawn-4", "pawn-7", "pawn-8"].includes(pawnId)  &&  colors[playerColor].includes(selectedPawnFather) && diceValue === 6 ) {


        selectedPawn.remove(); 
        const startBlue = document.getElementById(movingTiles[10]);
        startBlue.appendChild(selectedPawn); 
    
        selectedPawn = undefined; 
        setDiceValue(0); 
        setTurnIndex((prevIndex) => (prevIndex + 1) % turn.length);
        
        return; 
        
      } 
     else if (["pawn-3", "pawn-4", "pawn-7", "pawn-8"].includes(pawnId) &&  movingTiles.includes(selectedPawnFather) ) {

        const index = movingTiles.indexOf(selectedPawnFather);
        if (index !== -1 && index + diceValue < movingTiles.length) {
          const destinationId = movingTiles[index + diceValue]; // Move xx amount ahead
          const destinationElement = document.getElementById(destinationId);
          destinationElement.appendChild(selectedPawn);
          
          selectedPawn = undefined; 
          setDiceValue(0); 
          if (diceValue === 6 ) {
            rollDice();
          } else {
             setTurnIndex((prevIndex) => (prevIndex + 1) % turn.length);
             setDiceValue(0); 
          }
          return;
      }

        selectedPawn.remove(); 
        
        selectedPawn = undefined; 
        setDiceValue(0); 
        // setTurnIndex((prevIndex) => (prevIndex + 1) % turn.length);
        return; 
    } 
      else if (["pawn-11", "pawn-12", "pawn-15", "pawn-16"].includes(pawnId)  &&  colors[playerColor].includes(selectedPawnFather) && diceValue === 6 ) {
        selectedPawn.remove(); 
        const startYellow = document.getElementById(movingTiles[20]);
        startYellow.appendChild(selectedPawn); 
        selectedPawn = undefined; 
        setDiceValue(0); 
        setTurnIndex((prevIndex) => (prevIndex + 1) % turn.length);
        return; 
      } else if (["pawn-11", "pawn-12", "pawn-15", "pawn-16"].includes(pawnId) &&  movingTiles.includes(selectedPawnFather) ) {

        const index = movingTiles.indexOf(selectedPawnFather);
        if (index !== -1 && index + diceValue < movingTiles.length) {
          const destinationId = movingTiles[index + diceValue]; // Move xx amount ahead
          const destinationElement = document.getElementById(destinationId);
          destinationElement.appendChild(selectedPawn);
          
          selectedPawn = undefined; 
          setDiceValue(0); 
          if (diceValue === 6 ) {
            rollDice();
          } else {
             setTurnIndex((prevIndex) => (prevIndex + 1) % turn.length);
             setDiceValue(0); 
          }
          return;
      }

        selectedPawn.remove(); 
        
        selectedPawn = undefined; 
        setDiceValue(0); 
        // setTurnIndex((prevIndex) => (prevIndex + 1) % turn.length);
        return; 
    } 
      else if (["pawn-9", "pawn-10", "pawn-13", "pawn-14"].includes(pawnId)  &&  colors[playerColor].includes(selectedPawnFather) && diceValue === 6 ) {
        selectedPawn.remove(); 
        const startGreen = document.getElementById(movingTiles[30]);
        startGreen.appendChild(selectedPawn); 
        selectedPawn = undefined; 
        setDiceValue(0); 
        setTurnIndex((prevIndex) => (prevIndex + 1) % turn.length);
        return; 
      }
      else if (["pawn-9", "pawn-10", "pawn-13", "pawn-14"].includes(pawnId) &&  movingTiles.includes(selectedPawnFather) ) {

        const index = movingTiles.indexOf(selectedPawnFather);
        if (index !== -1 && index + diceValue < movingTiles.length) {
          const destinationId = movingTiles[index + diceValue]; // Move xx amount ahead
          const destinationElement = document.getElementById(destinationId);
          destinationElement.appendChild(selectedPawn);
          
          selectedPawn = undefined; 
          setDiceValue(0); 
          if (diceValue === 6 ) {
            rollDice();
          } else {
             setTurnIndex((prevIndex) => (prevIndex + 1) % turn.length);
             setDiceValue(0); 
          }
          
          return;
          
      }

        selectedPawn.remove(); 
        
        selectedPawn = undefined; 
        setDiceValue(0); 
        // setTurnIndex((prevIndex) => (prevIndex + 1) % turn.length);
        return; 
    } 
    else if  (diceValue !== 6 &&
      !(
        movingTiles.includes(pawn1father) ||
        movingTiles.includes(pawn2father) ||
        movingTiles.includes(pawn3father) ||
        movingTiles.includes(pawn4father)
      )
  ) {
    setTurnIndex((prevIndex) => (prevIndex + 1) % turn.length);
    setDiceValue(0); 
    } else if  (diceValue !== 6 &&
      !(
        movingTiles.includes(pawn5father) ||
        movingTiles.includes(pawn6father) ||
        movingTiles.includes(pawn7father) ||
        movingTiles.includes(pawn8father)
      )
  ) {
    setTurnIndex((prevIndex) => (prevIndex + 1) % turn.length);
    setDiceValue(0); 
    }else if  (diceValue !== 6 &&
      !(
        movingTiles.includes(pawn9father) ||
        movingTiles.includes(pawn10father) ||
        movingTiles.includes(pawn11father) ||
        movingTiles.includes(pawn12father)
      )
  ) {
    setTurnIndex((prevIndex) => (prevIndex + 1) % turn.length);
    setDiceValue(0); 
    }else if  (diceValue !== 6 &&
      !(
        movingTiles.includes(pawn13father) ||
        movingTiles.includes(pawn14father) ||
        movingTiles.includes(pawn15father) ||
        movingTiles.includes(pawn16father)
      )
  ) {
    setTurnIndex((prevIndex) => (prevIndex + 1) % turn.length);
    setDiceValue(0); 
    }



    }
  }}




  // let currentPawn;
  // let currentFatherElement;
  // const selectMovingPawn =  (event, pawnId) => {
  //      currentPawn = document.getElementById(pawnId);
  //      currentFatherElement = document.getElementById(pawnId).parentElement;
  //     if (movingTiles.includes(currentFatherElement)) {
  //       currentPawn.remove();
  //     }
  // }

  // const selectedField = (cellId) => {
  //   targetDiv = document.getElementById(cellId)
  //   console.log(targetDiv);
  //   if (!colors.red.includes(selectedPawn) ) {
  //     console.log("yah");
  //     if (movingTiles.includes(cellId)) {
  //       targetDiv.appendChild(selectedPawn);
  //       selectedPawn = undefined; 
  //     if (selectedPawn === undefined) {
  //       setTurnIndex((prevIndex) => (prevIndex + 1) % turn.length);
  //       setDiceValue(0); // Reset the dice value
  //     console.log(turn[turnIndex]);
  //     }
  //     console.log(selectedPawn);
  //     }
      
  // } else {
  //     console.error("No pawn selected or already moved."); // Handle error or log message accordingly
  // }
  // }

  const rollDice = () => {
    console.log(diceValue);
   if (diceValue !== 0) {
    console.log("aa");
   }else if (diceValue === 0){
    const newValue = Math.floor(Math.random() * 6) + 1;
  
    setDiceValue(newValue);
    if (newValue === 6) {
    
      console.log("roll again");
    } else {
 
   
    }}
  };

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
            
            <div key={cellId} id={cellId}  
            // onClick={() =>selectedField(cellId) }
             className={`chess-cell rounded rounded-circle ${isStartingPiece ? 'has-piece' : ''}`} >
                
              {isStartingPiece && x++ && (<div onClick={(event) =>  { selectPawn(event, pawnId);}} id={pawnId}>
           
              </div>)   }
              
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
        <h2>{`Turn: ${turn[turnIndex]}`}</h2>
        <button onClick= {rollDice}>   Roll Dice </button>
       
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
