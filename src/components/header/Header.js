import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* Top Header */}
      <div className="announcement">
        <div className="container">
          <div className="row">
            <div className="flex items-center col-md-6 display-none">
              <p>0975.404.540</p>
              <p>hieupham29697@gmail.com</p>
            </div>
            <div className="justify-center col-12 col-lg-6">
              <Link to="/##">
                <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
              </Link>
              <Link to="/##">
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
              </Link>
              <Link to="/##">
                <FontAwesomeIcon icon="fa-brands fa-tiktok" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="header">
        <div className="container">
          {/* Mobile Header */}
          <div className="mobile-header">
            <div className="container">
              <div className="row">
                <div className="flex items-center col-6">
                  <Link to="/" className="navbar-brand">
                    <img src="/assets/logo/logo.jpeg" alt="logo" />
                  </Link>
                </div>
                <div className="justify-end col-6 flex-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <FontAwesomeIcon icon="fa-solid fa-user" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
