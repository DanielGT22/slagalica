import { useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


const Register = () => {

    const [registerPayload, setRegisterPayload] = useState({
        email: "",
        password: "",
        username: ""
      });
    
      const navigate = useNavigate();
      const [registrationSuccess, setRegistrationSuccess] = useState(false);
      // const handleLogin = async () => {
      //   navigate("/login");
      // };
      
      const handleRegister = async () => {
        try {
          const response = await registerUser();
          if (response.ok) {
            setRegistrationSuccess(true);
            setTimeout(() => {
              navigate("/"); 
            }, 2000);
          } else {
            console.error("Registration failed:", response.statusText);
          }
        } catch (error) {
          console.error("Error during registration:", error);
          // Optionally, you can display an error message to the user
        }
      };
    
      const registerUser = async () => {
        try {
          const url = "http://localhost:3001/auth/register";
          return await fetch(url, {
            method: "POST",
            body: JSON.stringify(registerPayload),
            headers: {
              "Content-Type": "application/json"
            }
          });
        } catch (error) {
          throw new Error("Error registering user");
        }
      };

      
      const url = "http://localhost:3001/auth/register";
    
      
      return (
        <>
        <div className="d-flex justify-content-center align-items-center p-5">
          <div>
            <div >
            {registrationSuccess && (
              <div className="alert alert-success mt-3 text-center" role="alert">
                Account creato! <br />
                Redirect alla pagina di Login
              </div>
            )}
              <Form>
              <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                  <Form.Label className="text-center bg-dark border border-white border-2 rounded  w-100 text-white">Username</Form.Label>
                  <Form.Control
                    type="username"
                    placeholder="Username"
                    value={registerPayload.username}
                    onChange={(e) => {
                        setRegisterPayload({
                        ...registerPayload,
                        username: e.target.value,
                      });
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                  <Form.Label className="text-center bg-dark border border-2 border-white rounded  w-100 text-white">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    value={registerPayload.email}
                    onChange={(e) => {
                        setRegisterPayload({
                        ...registerPayload,
                        email: e.target.value,
                      });
                    }}
                  />
                </Form.Group>
                <Form.Label htmlFor="inputPassword5"  className="text-center bg-dark border border-white  rounded  w-100 text-white">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="*******"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                  value={registerPayload.password}
                  onChange={(e) => {
                    setRegisterPayload({
                      ...registerPayload,
                      password: e.target.value,
                    });
                  }}
                /> <div className="d-flex m-2 justify-content-around">
              
                <Button onClick={handleRegister} className="bg-dark border border-white ">Registrati!</Button>

      
                </div>
               
              </Form>
              
              <div className="mt-4 d-flex flex-column justify-content-center align-items-center">
                  <div  className="text-center bg-dark rounded  p-1 w-100 text-white " style={{fontSize: "1em"}}>Sei già registrato?
                  Accedi!</div> 
                  <Link className="mt-3 " to={"/"}>
                <Button className="bg-dark border-2 border-white m-1 mx-5">Login!</Button>
                </Link>
                </div>
            </div>
          </div>
          </div>
        </>
      );
    };
    
    export default Register;
