import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row ">
        {/* Phone */}
        <div className="col-12 col-md-4 contact-box">
          <div className="box-info">
            <div className="info-image">
              <FontAwesomeIcon icon="fa-solid fa-mobile-screen-button" />
            </div>
            <h5>Call Us</h5>
            <p>0975.404.540</p>
          </div>
        </div>
        {/* Address */}
        <div className="col-12 col-md-4 contact-box">
          <div className="box-info">
            <div className="info-image">
              <FontAwesomeIcon icon="fa-sharp fa-regular fa-location-dot" />
            </div>
            <h5>Address</h5>
            <p>Tan Binh, HCM city</p>
          </div>
        </div>
        {/* FaceBook */}
        {/* <div className="col-12 col-md-4 contact-box">
          <div className="box-info">
            <div className="info-image">
              <FontAwesomeIcon icon="fa-sharp fa-regular fa-location-dot" />
            </div>
            <h5>FaceBook</h5>
            <p>Tan Binh, HCM city</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContactInfo;
