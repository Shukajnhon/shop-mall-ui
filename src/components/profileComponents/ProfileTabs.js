import React, {Fragment} from "react";

const ProfileTabs = () => {
  return (
    <Fragment>
      <form className="row form-container">
        {/* UserName */}
        <div className="col-md-6">
          <div className="form">
            <label for="account-fn">UserName</label>
            <input type="text" className="form-control" required />
          </div>
        </div>
        {/* Email */}
        <div className="col-md-6">
          <div className="form">
            <label for="account-email">E-mail Address</label>
            <input type="email" className="form-control" required />
          </div>
        </div>
        {/* New Password */}
        <div className="col-md-6">
          <div className="form">
            <label for="account-pass">New Password</label>
            <input type="password" className="form-control" />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="col-md-6">
          <div className="form">
            <label for="account-confirm-pass">Confirm Password</label>
            <input type="password" className="form-control" />
          </div>
        </div>

        <button type="submit">Update Profile</button>
      </form>
    </Fragment>
  );
};

export default ProfileTabs;
