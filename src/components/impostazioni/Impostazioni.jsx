import { Button, Col, Row } from "react-bootstrap";
import "../impostazioni/impostazioni.css"
import { Form, Link, redirect } from "react-router-dom";
import { useEffect, useState } from "react";
const Impostazioni = () => {
	const token = localStorage.getItem("jwtToken");
	const [loading, setLoading] = useState(true);
	const [userName, setUserName] = useState("");
	const [userUUID, setUserUUID] = useState("");
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
	const handleDeleteUser = async () => {
		try {
		  const response = await fetch(`http://localhost:3001/users/${userUUID}`, {
			method: "DELETE",
			headers: {
			  "Content-type": "application/json",
			  Authorization: `Bearer ${token}`,
			},
		  });
	
		  if (response.status === 204) {
			// User deleted successfully, perform logout
			removeToken();
		  } else {
			throw new Error("Error deleting user");
		  }
		} catch (error) {
		  console.error(error);
		}
	  };

	const index = 0;
	useEffect(() => {
	  document.querySelectorAll('.ball4, .ball5, .ball6').forEach((ball, index) => {
		ball.classList.add(`animate-roll${index + 1}`);
	  });
	  const timeout = setTimeout(() => {
		  setLoading(false);
	  }, 1000);
  
	  return () => clearTimeout(timeout);
  }, []);
	if (!token) {
		// If token doesn't exist, redirect to "/"
		window.location.href = "/"; 
	  }
	function removeToken() {
		localStorage.removeItem("jwtToken");
	  }
    return (
			
         <div class="container">
{loading ? (
            
			<div className="d-flex justify-content-center align-items-center text-white" style={{ minHeight:"100vh"}}>
			 
			  <div className="ball4 bg-white mx-2 rounded rounded-circle" style={{ minHeight:"5rem",minWidth:"5rem"}}></div>
			  <div className="ball5 bg-white mx-2 rounded rounded-circle" style={{ minHeight:"5rem",minWidth:"5rem"}}></div>
			  <div className="ball6 bg-white mx-2 rounded rounded-circle" style={{ minHeight:"5rem",minWidth:"5rem"}}></div>
			  </div>
		) : (
		
		<Row className=" my-5"> 
			<Col xs={3}>
				
			</Col>

			<Col xs={6} className="box rounded border border-2 ">
			<form>
				
					<Row class="">
					<Col xs={5}></Col>
					<Col xs={2} className="d-flex justify-content-center pt-4">
					<img className="rounded rounded-circle " src="https://picsum.photos/id/237/50" alt="Maxwell Admin" width={100} />
					</Col>
					<Col xs={5}></Col>
					</Row>
					<Row className="text-center">
					<h2 className="my-4 text-white">{userName}</h2>
					</Row>
				<Row className="m-3 mb-4">
				<Col >
				<div class="form-group">
				 <input type="email" class="form-control rounded rounded-pill" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
				 </div>
				 </Col>
				 <Col>
			 <div class="form-group">
				  <input type="password" class="form-control rounded rounded-pill" id="exampleInputPassword1" placeholder="Password"/>
			 </div>
			 </Col>
				</Row>
			
			
			
			 <Row className="m-3">
			 <Col xs={6} >
			
			</Col>
			<Col xs={6} className="mb-2" >
			<Link className="text-decoration-none text-white text-start  "><small className="text-nowrap ">Hai dimmenticato la password?</small></Link>
			</Col>
			
			<Col className="pb-4 px-4">
			<button type="submit" class="btn btn-light w-100 rounded rounded-pill ">Submit</button>
			</Col>
			
			</Row>
			<Row>
			<Col  xs={12} sm={6} className="pb-4 px-4">
			<button type="submit" class="btn btn-light  w-100 rounded rounded-pill" onClick={removeToken}>LogOut</button>
			</Col>
			<Col   xs={12} sm={6} className="pb-4 px-4">
			<button type="submit" class="btn  btn-danger w-100 rounded rounded-pill border-black" onClick={handleDeleteUser}>Cancela Profilo</button>
			</Col>
			</Row>
			
			
			</form>
			</Col>
			<Col xs={3}>
			</Col>
		</Row>
		
		)}
</div>
   
   

    );
  };

export default Impostazioni