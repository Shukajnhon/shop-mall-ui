import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Header from "../components/header/Header";

const PaymentScreen = () => {
  window.scrollTo(0, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <Header></Header>
      <div className="container flex items-center justify-center login-form">
        <form
          className="login2 col-md-8 col-lg-4 col-11"
          onSubmit={handleSubmit}
        >
          <h6>SELECT PAYMENT METHOD</h6>
          <div className="payment-container">
            <div className="radio-container">
              <input type="radio" className="form-check-input" value="MoMo" />
              <label className="form-check-label">
                Visa, Credit Card or MoMo
              </label>
            </div>
          </div>
          <button type="submit">
            <Link to="/placeorder" className="text-white">
              Continue
            </Link>
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default PaymentScreen;
