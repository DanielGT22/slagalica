import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Shop = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('jwtToken');
  
  
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        if (token) {
          const userResponse = await fetch("http://localhost:3001/items", {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (userResponse.ok) {
            const data = await userResponse.json();
            setData(data.content);
            console.log(data);
           
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
  }, [token]);
  return (
    <div>
     <Row className='g-3 m-3' > 
        {data.map((item, index) => (
          <Col xs={6} md={3} className='text-white   ' key={index}>
            <Row className=''>
            <Col>
            <img src={item.img} alt={item.name} />
            </Col>
            <Col>
            <div>{item.name}</div>
            <div>{item.price}</div>
            </Col>
            <Col>
            <Button className='btn-dark border border-2  border-white'>Add to cart</Button>
            </Col>
            </Row>
                      </Col>
        ))}
      </Row>
        
    </div>
  );
};

export default Shop;
