import React from "react";
import Logo from "../assets/logo.png";
import "../index.css";

const Login = () => {
  return (
    <section className="login-container">
      <div className="row m-0 p-0">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
          <div className="text-center">
            <p>Welcome to</p>
            <p>SPYRA Commerce</p>
          </div>
          <form>
            

          </form>
        </div>
        <div className="col-12 col-md-6  d-flex flex-column align-items-center justify-content-center login_backgroud-image">
          <div>
            <img src={Logo} alt="Logo" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
