import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Header from "../components/header/Header";

const Register = () => {
  window.scrollTo(0, 0);
  return (
    <Fragment>
      <Header></Header>
      <div className="container flex flex-col items-center justify-center">
        <form className="login col-md-8 col-lg-4 col-11">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Register</button>

          <p>
            <Link to="/login">
              I Have Account <strong>Login</strong>
            </Link>
          </p>
        </form>
      </div>
    </Fragment>
  );
};

export default Register;
