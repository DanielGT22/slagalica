import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import "../../assets/css/Main.css"
function Asosijacije() {
  const [randomContent, setRandomContent] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedFields, setSelectedFields] = useState([]);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  useEffect(() => {
    fetchRandomContent();
  }, []);

  const fetchRandomContent = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const response = await fetch('http://localhost:3001/asocijacije', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.content.length);
      setRandomContent(data.content[randomIndex]);
    } catch (error) {
      console.error('Error fetching content: ', error);
    }
  };

  const parseContent = (element) => {
    const pairs = Object.entries(element)
      .filter(([key]) => key !== 'uuid')
      .map(([_, value]) => value.split(' / '));
    
        // Shuffle the items on the right side of each pair
  pairs.forEach(pair => {
    const temp = pair[1];
    const randomIndex = Math.floor(Math.random() * (pairs.length - 1)) + 1; // Exclude the first pair
    pair[1] = pairs[randomIndex][1];
    pairs[randomIndex][1] = temp;
  });

  return pairs;
  };
  const handleFieldClick = (index) => {
    setSelectedFields([...selectedFields, index]);
  };

  return (
    <div className="d-flex flex-column">
      <Container className="p-5">
        <div className="p-1 bg-dark border border-white border-2 mb-2">
          <h4 className="text-center text-white bg-darl border border-white border-2 p-2 m-0 ">Trova la connessione tra le 2 colonne e collega ciascun <br /> campo con la sua controparte</h4>
        </div>
        {randomContent && parseContent(randomContent).map((pair, pairIndex) => (
          <Row className='mb-1' key={pairIndex}>
            <Col xs={6}>
            <div className={`bg-dark border border-white border-2 mt-1 hover-effect-${"r" + pairIndex}`}>
                <div className="border border-2 border-white bg-white text-center m-1">{pair[0]}</div>
              </div>
            </Col>
            <Col xs={6}>
            <div className={`bg-dark border border-white border-2 mt-1 hover-effect-${"l" + pairIndex}`}>
            <div
                  className={`border border-2 border-white bg-white text-center m-1 ${selectedFields.includes(pairIndex) ? 'bg-success' : ''}`}
                  onClick={() => handleFieldClick(pairIndex)}
                >{pair[1]}</div>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
      <div className='text-white text-center'>
        <Button   type="button" onClick={() => window.location.href = "/home"} className='btn-dark text-white border border-white border-2'>Ritorna al Main Menu</Button>
        </div>
    </div>
 
  );
}

export default Asosijacije;
