import { useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {

    const [loginPayload, setLoginPayload] = useState({
        email: "",
        password: "",
      });
    
      const navigate = useNavigate();

      const handleLogin = async () => {
        try {
          const token = await getToken();
          if (token) {
            navigate("/home");
          }
        } catch (error) {
          console.error("Errore durante il login:", error);
        }
      };
    
      const url = "http://localhost:3001/auth/login";
    
      const getToken = async () => {
        try {
          let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(loginPayload),
            headers: {
              "Content-type": "application/json",
            },
          });
    
          if (response.ok) {
            let data = await response.json();
            console.log("token recuperato dal server " + data.token);
            localStorage.setItem("jwtToken", data.token);
            console.log(localStorage.getItem("jwtToken"));
            return data.token;
          } else {
            throw new Error("Errore nel caricamento dei dati");
          }
        } catch (error) {
          alert(error);
        }
      };

      
      return (
        <>
        <div className="d-flex justify-content-center align-items-center p-5">
          <div>
            <div >
              <Form>
                <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                  <Form.Label className="text-center bg-danger rounded  w-100 text-white">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    value={loginPayload.email}
                    onChange={(e) => {
                      setLoginPayload({
                        ...loginPayload,
                        email: e.target.value,
                      });
                    }}
                  />
                </Form.Group>
                <Form.Label htmlFor="inputPassword5"  className="text-center bg-danger rounded  w-100 text-white">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="*******"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                  value={loginPayload.password}
                  onChange={(e) => {
                    setLoginPayload({
                      ...loginPayload,
                      password: e.target.value,
                    });
                  }}
                /> <div className="d-flex m-2 justify-content-around">
                <Button onClick={handleLogin}>Entra!</Button>
                 
                <Link to={"/register"}>
                <Button className="bg-danger">Registrati!</Button>
                </Link>
      
                </div>
              </Form>
            </div>
          </div>
          </div>
        </>
      );
    };
    
    export default Login;