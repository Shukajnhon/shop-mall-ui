import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Header from "../components/header/Header";

const CartScreen = () => {
  window.scrollTo(0, 0);
  return (
    <Fragment>
      <Header></Header>
      {/* Cart */}
      <div className="container">
        {/* <div className="mt-3 text-center alert alert-info">
          Your cart is empty
          <Link
            className="px-5 py-3 mx-5 btn btn-success"
            to="/"
            style={{fontSize: "12px"}}
          >
            SHOPPING NOW
          </Link>
        </div> */}
        <div className="mt-3 text-center alert alert-info">
          Total Cart Products
          <Link className="mx-2 text-success" to="/cart">
            (4)
          </Link>
        </div>
        {/* cartiterm */}
        <div className="cart-item row">
          <div className="flex items-center justify-center remove-button">
            <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
          </div>
          <div className="cart-image col-md-3">
            <img src="/imgs/nike.png" alt="nike" />
          </div>
          <div className="flex items-center cart-text col-md-5">
            <Link to="/#">
              <h4>Nike Girls Shoes</h4>
            </Link>
          </div>
          <div className="flex flex-col mt-3 cart-qty col-md-2 col-sm-5 mt-md-5 mt-md-0">
            <h6>QUANTITY</h6>
            <select>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
          <div className="items-end mt-3 cart-price mt-md-0 col-md-2 md:items-end">
            <h6>SUBTOTAL</h6>
            <h4>$456</h4>
          </div>
        </div>
        {/* End of cart iterms */}
        <div className="total">
          <span className="sub">total:</span>
          <span className="total-price">$567</span>
        </div>
        <hr />
        <div className="flex items-center cart-buttons row">
          <Link to="/" className="col-md-6">
            <button>Continue To Shopping</button>
          </Link>
          <div className="flex items-end mt-3 col-md-6 mt-md-0">
            <button>
              <Link to="/shipping" className="text-white">
                Checkout
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartScreen;
