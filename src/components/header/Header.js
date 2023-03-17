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
                    <div className="dropdown-menu">
                      <Link to="/profile" className="dropdown-item">
                        Profile
                      </Link>

                      <Link to="/#" className="dropdown-item">
                        Logout
                      </Link>
                    </div>
                  </div>

                  <Link to="/cart" className="cart-mobile-icon">
                    <FontAwesomeIcon icon="fa-solid fa-bag-shopping" />
                    <span className="badge">4</span>
                  </Link>
                </div>

                <div className="flex items-center col-12">
                  <form className="input-group">
                    <input
                      className="rounded form-control search"
                      type="search"
                      name=""
                      placeholder="Search"
                    />
                    <button type="submit" className="search-button">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* PC Header */}
          <div className="pc-header">
            <div className="row">
              <div className="flex items-center col-md-3 col-4">
                <Link className="navbar-brand" to="/">
                  <img src="/assets/logo/logo.jpeg" alt="logo" />
                </Link>
              </div>
              <div className="flex items-center col-md-6 col-8">
                <form className="input-group">
                  <input
                    className="rounded form-control search"
                    type="search"
                    placeholder="Search"
                  />
                  <button type="submit" className="search-button">
                    Search
                  </button>
                </form>
              </div>
              <div className="flex items-center justify-end col-md-3">
                <div className="btn-group">
                  <button
                    type="button"
                    className="name-button dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hi, Admin Peter
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>

                    <Link className="dropdown-item" to="/#">
                      Logout
                    </Link>
                  </div>
                </div>

                <Link to="/cart">
                  <FontAwesomeIcon icon="fa-solid fa-bag-shopping" />
                  <span className="badge">4</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
