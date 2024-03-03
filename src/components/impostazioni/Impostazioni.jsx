import { Button, Col, Row } from "react-bootstrap";
import "../impostazioni/impostazioni.css"
import { Form, Link, redirect } from "react-router-dom";
const Impostazioni = () => {
	const token = localStorage.getItem("jwtToken");

	if (!token) {
		// If token doesn't exist, redirect to "/"
		window.location.href = "/"; 
	  }
	function removeToken() {
		localStorage.removeItem("jwtToken");
	  }
    return (
    
         <div class="container">

		
		<Row className=" my-5"> 
			<Col xs={3}>
				
			</Col>

			<Col xs={6} className="box rounded border border-2 ">
			<form>
				
					<Row class="">
					<Col xs={5}></Col>
					<Col xs={2} className="d-flex justify-content-center pt-4">
					<img className="rounded rounded-circle " src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Maxwell Admin" width={100} />
					</Col>
					<Col xs={5}></Col>
					</Row>
					<Row className="text-center">
					<h2 className="my-4">Username</h2>
					</Row>
				<Row className="m-3 mb-4">
				<Col >
				<div class="form-group">
				 <input type="email" class="form-control rounded rounded-pill" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
				 </div>
				 </Col>
				</Row>
			
			
			<Row  className="m-3">
				<Col>
			 <div class="form-group">
				  <input type="password" class="form-control rounded rounded-pill" id="exampleInputPassword1" placeholder="Password"/>
			 </div>
			 </Col>
			 </Row>
			
			
			 <Row className="m-3">
			 <Col xs={6} >
			
			</Col>
			<Col xs={6} >
			<Link className="text-decoration-none text-white text-start "><small className="text-nowrap">Hai dimmenticato la password?</small></Link>
			</Col>
			</Row>
			<Row>
			<Col className="pb-4 px-4">
			<button type="submit" class="btn btn-light w-100 rounded rounded-pill ">Submit</button>
			</Col>
			</Row>
			<Row>
			<Col className="pb-4 px-4">
			<button type="submit" class="btn btn-light  w-100 rounded rounded-pill" onClick={removeToken}>LogOut</button>
			</Col>
			</Row>
			<Row>
			<Col className="pb-4 px-4">
			<button type="submit" class="btn  btn-danger w-100 rounded rounded-pill border-black">Cancela Profilo</button>
			</Col>
			</Row>
			
			
			</form>
			</Col>
			<Col xs={3}>
			</Col>
		</Row>
		
		
</div>
   
   

    );
  };

export default Impostazioni