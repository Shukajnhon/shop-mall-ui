import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Header from "../components/header/Header";
import ErrorMessage from "../components/loadingError/ErrorMessage";

const PlaceOrderScreen = () => {
  window.scrollTo(0, 0);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <Header></Header>
      <div className="container">
        <div className="row order-detail">
          <div className="mb-0 col-lg-4 col-sm-4 lg:mb-4 md:mb-5">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <FontAwesomeIcon icon="fa-solid fa-user" />
                </div>
              </div>

              <div className="col-md-8 center">
                <h5>
                  <strong>Customer</strong>
                </h5>
                <p>Admin Peter</p>
                <p>admin@example.com</p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="mb-0 col-lg-4 col-sm-4 lg:mb-4 md:mb-5">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <FontAwesomeIcon icon="fa-solid fa-truck" />
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Order info</strong>
                </h5>
                <p>Shipping: HCM</p>
                <p>Pay method: MoMo</p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="mb-0 col-lg-4 col-sm-4 lg:mb-4 md:mb-5">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Deliver to</strong>
                </h5>
                <p>Address: Tan Binh, HCM city, VN</p>
              </div>
            </div>
          </div>
        </div>

        <div className="justify-between row order-products">
          <div className="col-lg-8">
            {/* <ErrorMessage variant="alert-info mt-5">Your cart is empty</ErrorMessage> */}

            <div className="order-product row">
              <div className="col-md-3 col-6">
                <img src="/assets/imgs/adidas.png" alt="product" />
              </div>
              <div className="flex items-center col-md-5 col-6">
                <Link to="/">
                  <h6>Girls Nike shoes</h6>
                </Link>
              </div>
              <div className="flex flex-col items-center mt-3 md:mt-0 col-md-2 col-6">
                <h4>QUANTITY</h4>
                <h6>4</h6>
              </div>
              <div className="flex flex-col items-center mt-3 md:mt-0 col-md-2 col-6">
                <h4>SUBTOTAL</h4>
                <h6>$567</h6>
              </div>
            </div>
          </div>
          {/* Total */}
          <div className="flex flex-col items-end mt-5 col-lg-3 subtotal-order">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Products</strong>
                  </td>
                  <td>$345</td>
                </tr>
                <tr>
                  <td>
                    <strong>Shipping</strong>
                  </td>
                  <td>$123</td>
                </tr>
                <tr>
                  <td>
                    <strong>Tax</strong>
                  </td>
                  <td>$5</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>$789</td>
                </tr>
              </tbody>
            </table>
            <button type="submit" onClick={handleSubmit}>
              <Link to="/order" className="text-white">
                PLACE ORDER
              </Link>
            </button>
            {/* <ErrorMessage variant='alert-danger'>{error}</ErrorMessage> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PlaceOrderScreen;
