import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Pagination from "./pagination";
import Rating from "./Rating";
import products from "../data";

const ShopSection = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shop-container row">
                {products.lengtg > 0 &&
                  products.map((product) => {
                    return (
                      <div
                        className="shop col-lg-4 col-md-6 col-sm-6"
                        key={product.id}
                      >
                        <div className="border-product">
                          <Link to={`/products/${product._id}`}>
                            <div className="shopBack">
                              <img src={product.image} alt={product.name} />
                            </div>
                          </Link>

                          <div className="shopText">
                            <p>
                              <Link to={`/products/${product._id}`}>
                                {product.name}
                              </Link>
                            </p>

                            <Rating
                              value={product.rating}
                              text={`${product.numReviews} review`}
                            ></Rating>

                            <h3>${product.price}</h3>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                {/* Pagination */}
                <Pagination></Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShopSection;
