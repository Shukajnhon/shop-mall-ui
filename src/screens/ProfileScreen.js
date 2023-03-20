import React, {Fragment} from "react";
import {Toast} from "react-toastify/dist/components";
import Header from "../components/header/Header";

const ProfileScreen = () => {
  window.scrollTo(0, 0);
  return (
    <Fragment>
      <Header></Header>
      <div className="container md:mt-3 lg:mt-5">
        <div className="items-start row">
          <div className="p-0 shadow col-lg-4">
            <div className="pb-0 author-card md:pb-3">
              <div className="author-card-cover"></div>
              <div className="author-card-profile row">
                <div className="author-card-avatar col-md-5">
                  <img src="/assets/imgs/user.png" alt="userprofileimage" />
                </div>
                <div className="author-card-details col-md-7">
                  <h5 className="mb-2 author-card-name">
                    <strong>Admin Peter</strong>
                  </h5>
                  <span className="author-card-position">
                    <>Joined March 17 2023 </>
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-3 wizard">
              <div className="flex items-start">
                <div
                  id="v-pills-tab"
                  className="flex flex-col items-start nav col-12 nav-pills me-3"
                  role="tablist"
                  aria-orientation="vartical"
                >
                  <button
                    className="nav-link active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Profile Setting
                  </button>

                  <button
                    className="flex justify-between nav-link"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    Orders List
                    <span className="badge2">3</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* panels */}
          <div
            className="pt-3 pb-5 tab-content col-lg-8 lg:pb-0"
            id="v-pills-tabContent"
          >
            <div
              className="tab-pane fade active show"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              {/* <Toast></Toast> */}

              {/* username */}
              <form className="row form-container">
                <div className="col-md-6">
                  <div className="form">
                    <label for="account-fn">UserName</label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      value=""
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <div className="form">
                    <label for="account-email">E-Mail Address</label>
                    <input
                      type="email"
                      className="form-control"
                      required
                      value=""
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="col-md-6">
                  <div className="form">
                    <label for="account-pass">New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      required
                      value
                    />
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="col-md-6">
                  <div className="form">
                    <label for="account-conform-pass">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      required
                      value
                    />
                  </div>
                </div>

                <button type="submit">Update Profile</button>
              </form>
            </div>

            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="tab-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>STATUS</th>
                        <th>DATE</th>
                        <th>TOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="alert-danger">
                        <td>
                          <a href="/#" className="link">
                            CODE
                          </a>
                        </td>
                        <td>Not Paid</td>
                        <td>Yesterday at 12h</td>
                        <td>$345</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileScreen;
