import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Header from "../components/header/Header";

const Login = () => {
  window.scrollTo(0, 0);
  return (
    <Fragment>
      <Header></Header>
      <div className="container flex flex-col items-center justify-center">
        <form className="login col-md-8 col-lg-4 col-11">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <button type="submit">Login</button>
          <p>
            <Link to={"/register"}>Create Account</Link>
          </p>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
