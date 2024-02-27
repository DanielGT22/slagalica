// Menu.jsx
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Row, Button,Col } from 'react-bootstrap';
import "../../assets/css/Main.css"
import { Link } from 'react-router-dom';
import animal from "../../assets/img/gioca.png"
import cannon from "../../assets/img/cannon.png"
import shop from "../../assets/img/hot-dog.png"
import stage from "../../assets/img/platform.png"
import asosijacije from "../../assets/img/ring-of-fire.png"

import Logo from "../../assets/img/Logo.png"
const Menu = () => {

  const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   const token = localStorage.getItem("jwtToken");

  //   const getUserInfo = async () => {
      
  //     try {
  //       const userResponse = await fetch("http://localhost:3001/users/me", {
  //         method: "GET",
  //         headers: {
  //           "Content-type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       if (userResponse.ok) {
  //         const userData = await userResponse.json();
  //         setUserName(userData.username);
  //       } else {
  //         throw new Error("Errore nel recupero dei dati dell'utente");
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   if (token) {
  //     getUserInfo();
  //   }else  {
  //     window.location.href = "/"; 
  //     return;
  //   }
  // }, []); // Dipendenza vuota, quindi la richiesta viene eseguita solo al caricamento del componente
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
          // Redirect if no token
          window.location.href = "/"; // Redirect to the desired URL
        }
      } catch (error) {
        console.error(error);
      } 
    };
  
    getUserInfo();
  }, []);
  


    return (<div>
      <img src={Logo} alt="" width="200px" className='logo' />
      <div className=' p-1' id='profile'>
      <div className=' w-100' id='profileBanner'> 
      <Container className='' >
       <div className=' p-2 d-flex ' >
       <div><img className='rounded rounded-circle' src="http://placekitten.com/g/50" alt="" /></div>
       <h2 className='pt-1 mx-2 text-white '>{userName}</h2>
      
      </div>
      <div className='d-flex m-auto '>

      <div   className="text-center rounded p-1 bg-light mx-1">
          <Link to="/shop" >
            <Button className="btn btn3 btn-danger">
              <span className=' '><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg></span>
            </Button>
          </Link>
        </div>

        <div   className="text-center rounded p-1 bg-light mx-1">
          <Link to="/shop">
            <Button className="btn btn3 btn-warning">
              <span className=' '><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-box2-heart" viewBox="0 0 16 16">
  <path d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982"/>
  <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zm0 1H7.5v3h-6zM8.5 4V1h3.75l2.25 3zM15 5v10H1V5z"/>
</svg></span>
            </Button>
          </Link>
        </div>
      <div   className="text-center rounded p-1 bg-light mx-1">
          <Link to="/shop">
            <Button className="btn btn3 btn-primary">
              <span className=' '><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-people" viewBox="0 0 16 16">
  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
</svg></span>
            </Button>
          </Link>
        </div>
      <div   className="text-center rounded p-1 bg-light mx-1">
          <Link to="/impostazioni">
            <Button className="btn btn3 btn-success">
              <span className=' '><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-gear" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
</svg></span>
            </Button>
          </Link>
        </div>

      </div>
      </Container>
      </div>
      </div>

        <div className='circus d-flex  justify-content-start align-items-center px-5'>
        <div className=' animal1 w-25 h-25 m-3'>
         <a href="/game-setup">
       <img src={cannon} alt="Game Setup" width="100px" onClick={() => window.location.href = "/game-setup"} />
       </a>
        </div>
      {/* <div className='w-25 h-25 m-3'>
      <Link to="/game-setup">
            <Button className="btnPlayShop ">
              <span className='fs-1'>Gioca!</span>
            </Button>
          </Link>
      </div> */}
      {/* <div className='w-25 h-25 m-3'>
      <Link to="/shop">
            <Button className="btnPlayShop ">
              <span className='fs-1'>Shop!</span>
            </Button>
          </Link>
      </div> */}
      <div className=' animal2 w-25 h-25 m-3'>
  <a href="/shop">
    <img src={shop} alt="Shop" width="100px" onClick={() => window.location.href = "/shop"} />
  </a>
</div>

<div className=' animal2 w-25 h-25 m-3'>
  <a href="/quiz">
    <img src={stage} alt="Quiz" width="100px" onClick={() => window.location.href = "/quiz"} />
  </a>
</div>

<div className=' animal2 w-25 h-25 m-3'>
  <a href="/asosijacije">
    <img src={asosijacije} alt="asosijacije" width="100px" onClick={() => window.location.href = "/asosijacije"} />
  </a>
</div>
      </div>
     
      { /* <Container className=" cont p-5  d-flex flex-column justify-content-center align-items-start">
           
        <Row className='w-50 m-2 '>
          <Col  xs={4} md={4} className="text-center ">
          <Link to="/game-setup">
            <Button className="btn btn1 btn-danger">
              <span className='fs-1'>Gioca!</span>
            </Button>
          </Link>
          </Col>
          <Col xs={4} md={4}></Col>
          <Col xs={4} md={4}></Col>
        </Row>

        
        <Row className='w-50 m-2'>
        <Col xs={3} md={3}></Col>
          <Col   xs={4} md={4}  className="text-center">
          <Link to="/shop">
            <button className="btn btnPlayShop  btn-danger">
              <span className='fs-1 '>Shop!</span>
            </button>
          </Link>
          </Col>
        
          <Col xs={5} md={5}></Col>
        </Row>
      </Container> */}
      

      </div>
    );
};

export default Menu;
