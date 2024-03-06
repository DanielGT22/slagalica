// Menu.jsx
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Row, Button,Col } from 'react-bootstrap';
import "../../assets/css/Main.css"
import { Link } from 'react-router-dom';
import quiz from "../../assets/img/quiz.png"
import conect4 from "../../assets/img/connect 4.png"
import ludo from "../../assets/img/Ludo1.png"
import friends from "../../assets/img/friends.png"
import inventory from "../../assets/img/inventory.png"
import settings from "../../assets/img/setting.png"
import shop from "../../assets/img/shop.png"
import Spojnice from "../../assets/img/Spojnice.png"


const Menu = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };
  const [isHovered4, setIsHovered4] = useState(false);

  const handleMouseEnter4 = () => {
    setIsHovered4(true);
  };

  const handleMouseLeave4 = () => {
    setIsHovered4(false);
  };

  const [isHovered5, setIsHovered5] = useState(false);

  const handleMouseEnter5 = () => {
    setIsHovered5(true);
  };

  const handleMouseLeave5 = () => {
    setIsHovered5(false);
  };
  const [isHovered6, setIsHovered6] = useState(false);

  const handleMouseEnter6 = () => {
    setIsHovered6(true);
  };

  const handleMouseLeave6 = () => {
    setIsHovered6(false);
  };
  const [isHovered7, setIsHovered7] = useState(false);

  const handleMouseEnter7 = () => {
    setIsHovered7(true);
  };

  const handleMouseLeave7 = () => {
    setIsHovered7(false);
  };
  const [isHovered8, setIsHovered8] = useState(false);

  const handleMouseEnter8 = () => {
    setIsHovered8(true);
  };

  const handleMouseLeave8 = () => {
    setIsHovered8(false);
  };

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
  


    return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{height:"100vh"}}>

<div className='  mb-5 ' style={{width:"60%"}}>
    <Row>
      <Col xs={2} className='pb-5'>
        <Link className='text-decoration-none'>
        <div className='d-flex align-items-center'>
        <img className='rounded rounded-circle' src="https://picsum.photos/id/237/50" alt="" width={50} height={50}/>
        <h2 className=' ms-3 text-white ' style={{fontSize:"45px", fontWeight:"600"}}>{userName}</h2>
        </div>
        </Link>
      </Col>
    
    </Row>
      <Row>
          <Col xs={3} className={` d-flex justify-content-center  rounded overflow-hidden p-2 `}  >
            <div className='d-flex flex-column'>
           <Button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} 
           className={` w-100  border border-black border-1 p-0 ${isHovered ? 'shadow-game' : ''}`}> 
           <img src={ludo} alt=""  style={{width:"100%",height:"100%"}}   onClick={() => window.location.href = "/game-setup"}/>
         </Button>
         <h3 className='text-white text-center mt-3'>Ludo</h3>
         </div>
          </Col>
          <Col xs={3} className={` d-flex justify-content-center  rounded overflow-hidden p-2 `} >
           <div className='d-flex flex-column'>
           <Button 
           onMouseEnter={handleMouseEnter2}
           onMouseLeave={handleMouseLeave2} className={` w-100  border border-black border-1 p-0 ${isHovered2 ? 'shadow-game' : ''}`}> 
              <img src={conect4} alt=""  style={{width:"100%",height:"100%"}}   onClick={() => window.location.href = "/shop"}/>
                </Button>
                <h3 className='text-white  mt-3 text-center'>Connect4</h3>
         </div>
               </Col>
  
               <Col xs={3} className={` d-flex justify-content-center  rounded overflow-hidden p-2 `} >
            <div className='d-flex flex-column'>
           <Button 
           onMouseEnter={handleMouseEnter3}
           onMouseLeave={handleMouseLeave3} className={` w-100  border border-black border-1 p-0 ${isHovered3 ? 'shadow-game' : ''}`}> 
               <img src={quiz} alt=""  style={{width:"100%",height:"100%"}}   onClick={() => window.location.href = "/quiz"}/>
               </Button>
               <h3 className='text-white  mt-3 text-center'>Quizzz</h3>
         </div>
               </Col>

               <Col xs={3} className={` d-flex justify-content-center  rounded overflow-hidden p-2 `} >
            <div className='d-flex flex-column'>
           <Button 
           onMouseEnter={handleMouseEnter4}
           onMouseLeave={handleMouseLeave4} className={` w-100  border border-black border-1 p-0 ${isHovered4 ? 'shadow-game' : ''}`}> 
               <img src={Spojnice} alt=""  style={{width:"100%",height:"100%"}}   onClick={() => window.location.href = "/asosijacije"}/>
              </Button>
              <h3 className='text-white  mt-3 text-center'>Leads</h3>
         </div>
               </Col>
  </Row> 
  
    </div>
    <div className=''  style={{width:"30%"}}>
    <Row className='p-5'>
    <Col xs={3} className={`d-flex flex-column justify-content-center p-2 overflow-hidden  rounded-circle  `} 
     onMouseEnter={handleMouseEnter5}
     onMouseLeave={handleMouseLeave5}>
        <img src={friends} alt="" style={{width:"100%",height:"100%"}} 
        className={`rounded-circle p-0  ${isHovered5 ? 'shadow-blue' : ''}`} 
         onClick={() => window.location.href = "/friends"} />
         <div className='text-white text-center'>Social</div>
    </Col>

    <Col xs={3} className={`d-flex flex-column justify-content-center p-2 overflow-hidden  rounded-circle  `}  
    onMouseEnter={handleMouseEnter6}
    onMouseLeave={handleMouseLeave6}>
        <img src={inventory} alt="" style={{width:"100%",height:"100%"}}
         className={`rounded-circle p-0  ${isHovered6 ? 'shadow-blue' : ''}`}  
        onClick={() => window.location.href = "/inventory"} />
         <div className='text-white text-center'>Inventory</div>
    </Col>
    <Col xs={3} className={`d-flex flex-column justify-content-center p-2 overflow-hidden  rounded-circle `}  onMouseEnter={handleMouseEnter7}
                 onMouseLeave={handleMouseLeave7}>
        <img src={shop} alt="" style={{width:"100%",height:"100%"}} className={`rounded-circle p-0  ${isHovered7 ? 'shadow-blue' : ''}`} 
         onClick={() => window.location.href = "/shop"} />
          <div className='text-white text-center'>Shop</div>
    </Col>
    <Col xs={3} className={`d-flex flex-column justify-content-center p-2  overflow-hidden  rounded-circle `}  onMouseEnter={handleMouseEnter8}
                 onMouseLeave={handleMouseLeave8}>
        <img src={settings} alt="" style={{width:"100%",height:"100%"}} className={`rounded-circle p-0  ${isHovered8 ? 'shadow-blue' : ''}`} 
         onClick={() => window.location.href = "/impostazioni"} />
          <div className='text-white text-center'>Settings</div>
    </Col>
</Row>

    </div>   
   

      </div>
    );
};

export default Menu;
