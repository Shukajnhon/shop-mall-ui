import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="flex justify-center">
        {/* master card */}
        <div className="card-name">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png"
            alt="mastercard"
          />
        </div>
        {/* Visa card */}
        <div className="card-name">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
            alt="visa"
          />
        </div>

        {/* momo */}
        <div className="card-name">
          <img
            src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png"
            alt="momo"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
