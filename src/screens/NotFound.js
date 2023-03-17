import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Header from "../components/header/Header";

const NotFound = () => {
  return (
    <Fragment>
      <Header></Header>
      <div className="container my-5">
        <div className="items-center justify-center row">
          <h4 className="mb-5 text-center md:mb-2">Page Not Found</h4>
          <img
            className="w-full h-[300px] object-contain"
            src="/assets/imgs/not-found.png"
            alt="Not-found"
          />
          <button className="mt-5 col-md-3 col-sm-6 col-12 btn btn-success">
            <Link to="/" className="text-white no-underline">
              Home page
            </Link>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
