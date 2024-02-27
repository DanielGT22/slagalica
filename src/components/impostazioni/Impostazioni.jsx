import { Button, Col, Row } from "react-bootstrap";
import "../impostazioni/impostazioni.css"
import { Form, Link } from "react-router-dom";
const Impostazioni = () => {

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
			<button type="submit" class="btn btn-light  w-100 rounded rounded-pill ">LogOut</button>
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
		
		
			

{/* 			
<div class="row gutters">
	<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
		<div class="card h-100">
			<div class="card-body">
				<div class="account-settings">
					<div class="user-profile">
						<div class="user-avatar">
							<img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Maxwell Admin"/>
						</div>
						<h5 class="user-name">Yuki Hayashi</h5>
						<h6 class="user-email">yuki@Maxwell.com</h6>
					</div>
					<div class="about">
						<h5 class="mb-2 text-primary">About</h5>
						<p>I'm Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
		<div class="card h-100">
			<div class="card-body">
				<div class="row gutters">
					<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<h6 class="mb-3 text-primary">Personal Details</h6>
					</div>
					<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div class="form-group">
							<label for="fullName">Full Name</label>
							<input type="text" class="form-control" id="fullName" placeholder="Enter full name"/>
						</div>
					</div>
					<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div class="form-group">
							<label for="eMail">Email</label>
							<input type="email" class="form-control" id="eMail" placeholder="Enter email ID"/>
						</div>
					</div>
					
				</div>
				
				<div class="row gutters">
					<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div class="text-right">
							<button type="button" id="submit" name="submit" class="btn btn-secondary">Cancel</button>
							<button type="button" id="submit" name="submit" class="btn btn-primary">Update</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div> */}
</div>
   


    );
  };

export default Impostazioni