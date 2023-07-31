import React, { useState } from "react";
import Logo from "../assets/logo.png";
import "../index.css";
import Form from "react-bootstrap/Form";
import { Button ,InputGroup} from "react-bootstrap";
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
const Login = () => {
 const[showPassword,setShowPassword]= useState(false);
  return (
    <section className="login-container">
      <div className="row m-0 p-0">
        <div className="col-12 p-0 col-md-6 d-flex flex-column align-items-center justify-content-center login-container--left">
          <div className="text-center py-1">
            <p className="header_text-one m-0">Welcome to</p>
            <p className="header_text-two">SPYRA <span className="header_text-three">Commerce</span> </p>
          </div>
          <Form>
            <Form.Group className="mb-4" controlId="Form.ControlInput1">
              <Form.Label>Enter your username or email address</Form.Label>
              <Form.Control type="email" placeholder="Username or email address" style={{  minWidth: '17rem' }} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label >Enter your password</Form.Label>
              <InputGroup>
              <Form.Control type={showPassword?"text":"password"} placeholder="Password"  style={{ borderRight: 'none', minWidth: '17rem' }}/>
              <Button className="eye-button" onClick={()=>setShowPassword(!showPassword)}>
                {showPassword?<FaEyeSlash/>:<FaEye/>}
              </Button>
              </InputGroup>
              <div className="my-2 d-flex flex-row w-100 justify-content-end">
                <p style={{color:'#de5384',fontWeight:'700'}}>Forgot Password</p>
              </div>
            </Form.Group>
            <Form.Group>
            <button className="signIn-button">Sign In</button>
            </Form.Group>
          </Form>
        </div>
        <div className="col-12 col-md-6  d-none d-md-flex flex-column align-items-center justify-content-center login-container--right">
          <div className="login_backgroud-image">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
