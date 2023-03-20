import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Header from "../components/header/Header";

const ShippingScreen = () => {
  window.scrollTo(0, 0);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <Header></Header>
      <div className="container flex items-center justify-center login-form">
        <form
          className="login col-md-8 col-lg-4 col-11"
          onSubmit={handleSubmit}
        >
          <h6>DELIVERY ADDRESS</h6>
          <input type="text" placeholder="Enter address" />
          <input type="text" placeholder="Enter city" />
          <input type="text" placeholder="Enter postal code" />
          <input type="text" placeholder="Enter country" />
          <button type="submit">
            <Link to="/payment" className="text-white">
              Continue
            </Link>
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default ShippingScreen;
