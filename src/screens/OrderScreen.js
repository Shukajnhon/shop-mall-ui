import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Header from "../components/header/Header";
import ErrorMessage from "../components/loadingError/ErrorMessage";

const OrderScreen = () => {
  window.scrollTo(0, 0);
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
                <p>
                  <a href={`mailto:admin@example.com`}>admin@example.com</a>
                </p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="mb-0 col-lg-4 com-sm-4 lg:mb-4 md:mb-5">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <FontAwesomeIcon icon="fa-solid fa-truck-moving" />
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Order info</strong>
                </h5>
                <p>Shipping: VN</p>
                <p>Pay method: MoMo</p>

                <div className="p-2 bg-info col-12">
                  <p className="text-white text-start md:text-center">
                    Paid on march 12 2023
                  </p>
                </div>
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
                  <strong>Delivery to</strong>
                </h5>
                <p>Address: abxx, Tan Binh, Ho Chi Minh city, VN</p>
                <div className="p-1 bg-danger col-12">
                  <p className="text-white text-start md:text-center">
                    Not Delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-between row order-products">
          <div className="col-lg-8">
            {/* <ErrorMessage variant="alert-info mt-5">
              Your order is empty
            </ErrorMessage> */}
            <div className="order-product row">
              <div className="col-md-3 col-6">
                <img src="/assets/imgs/shoes.png" alt="shoes" />
              </div>
              <div className="flex items-center col-md-5 col-6">
                <Link to="/">
                  <h6>Girls Nike Shoes</h6>
                </Link>
              </div>
              <div className="flex flex-col items-center mt-3 md:mt-0 col-6 col-md-2">
                <h4>QUANTITY</h4>
                <h6>4</h6>
              </div>
              <div className="flex flex-col items-end mt-3 md:mt-0 col-md-2 col-6">
                <h4>SUBTOTAL</h4>
                <h6>$456</h6>
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
                  <td>$234</td>
                </tr>
                <tr>
                  <td>
                    <strong>Shipping</strong>
                  </td>
                  <td>$566</td>
                </tr>

                <tr>
                  <td>
                    <strong>Tax</strong>
                  </td>
                  <td>$3</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>$733</td>
                </tr>
              </tbody>
            </table>
            <div className="col-12">
              {/* <PaypalButton amount={345}></PaypalButton> */}
              <button>Order</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OrderScreen;
