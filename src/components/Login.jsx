import React from "react";
import Logo from "../assets/logo.png";
import "../index.css";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <section className="login-container">
      <div className="row m-0 p-0">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center login-container--left">
          <div className="text-center">
            <p>Welcome to</p>
            <p>SPYRA Commerce</p>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
          </Form>
        </div>
        <div className="col-12 col-md-6  d-flex flex-column align-items-center justify-content-center login-container--right">
          <div className="login_backgroud-image">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
