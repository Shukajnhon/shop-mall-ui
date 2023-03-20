import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Header from "../components/header/Header";
import Rating from "../components/homeComponents/Rating";
import ErrorMessage from "../components/loadingError/ErrorMessage";
import products from "../data";

const SingleProduct = ({match}) => {
  const product = products.find((p) => p._id === match.params.id);
  return (
    <Fragment>
      <Header></Header>
      <div className="container single-product">
        <div className="row">
          <div className="col-md-6">
            <div className="single-image">
              <img src={product.img} alt={product.name} />
            </div>
          </div>

          <div className="col-md-6">
            <div className="product-dtl">
              <div className="product-info">
                <div className="product-name">{product.name}</div>
              </div>
              <p>{product.description}</p>
              <div className="product-count col-lg-7">
                <div className="flex items-center justify-between">
                  <h6>Price</h6>
                  <span>${product.price}</span>
                </div>
                <div className="items-center flex-justify-between">
                  <h6>Status</h6>
                  {product.countInStock > 0 ? (
                    <span>In Stock</span>
                  ) : (
                    <span>Unavailable</span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <h6>Reviews</h6>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  ></Rating>
                </div>

                {product.countInStock > 0 ? (
                  <>
                    <div className="flex items-center justify-between">
                      <h6>Quantity</h6>\
                      <select>
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button className="rounded-black-btn">Add To Cart</button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        {/* Rating */}
        <div className="my-5 row">
          <div className="col-md-6">
            <h6 className="mb-3">REVIEWS</h6>
            <ErrorMessage variant={"alert-info mt-3"}>No Reviews</ErrorMessage>
            <div className="p-3 mb-3 rounded shadow md:mb-5 bg-light">
              <strong>Admin Peter</strong>
              <Rating></Rating>
              <span>March 17 2023</span>
              <div className="mt-3 alert alert-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                repellat.
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h6>WRITE A CUSTOMER REVIEW</h6>
            <div className="my-4"></div>

            <form>
              <div className="my-4">
                <strong>Rating</strong>
                <section className="p-3 mt-2 border-0 rounded col-12 bg-light">
                  <option value="">Select...</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </section>
              </div>
              <div className="my-4">
                <strong>Comment</strong>
                <textarea
                  rows="3"
                  className="p-3 mt-2 border-0 rounded bg-light col-12"
                ></textarea>
              </div>
              <div className="my-3">
                <button className="p-3 text-white bg-black border-0 rounded col-12">
                  SUBMIT
                </button>
              </div>
            </form>
            <div className="my-3">
              <ErrorMessage variant={"alert-warning"}>
                Please
                <Link to="/login">
                  " <strong>Login</strong> "
                </Link>
                to write a review
              </ErrorMessage>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SingleProduct;
