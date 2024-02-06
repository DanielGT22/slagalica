// Menu.jsx
import React from 'react';
import { Navbar, Nav, Container, Row, Button,Col } from 'react-bootstrap';
import "../../assets/css/Main.css"
import { Link } from 'react-router-dom';

const Menu = () => {
    return (<div>
      <Container className='m-0'>
       <Row className=' m-3 ' >
       <Col xs={12} md={4} className='border border-3 border-black'>
       <h2 className='p-2'>Ciao</h2>
       </Col>
      </Row>
      </Container>

        <Container className="h-100 mx-0 my-5 py-5 d-flex flex-column justify-content-center align-items-start">
           
        <Row className='m-3 py-4 '>
          <Col className="text-center ">
          <Link to="/game-setup">
            <Button className="btn btn-danger">
              <span className='fs-1'>Gioca!</span>
            </Button>
          </Link>
          </Col>
        </Row>
        <Row className='m-3  py-4'>
          <Col className="text-center">
          <Link to="/shop">
            <Button className="btn btn-danger">
              <span className='fs-1'>Shop!</span>
            </Button>
          </Link>
          </Col>
        </Row>
        <Row className='m-3  py-4'>
          <Col className="text-center">
          <Link to="/impostazioni">
            <Button className="btn btn-danger">
              <span className='fs-1'>Settings</span>
            </Button>
          </Link>
          </Col>
          
        </Row>
      </Container>
      </div>
    );
};

export default Menu;
