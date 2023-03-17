import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import CallToActionSection from "../components/homeComponents/CallToActionSection";
import ContactInfo from "../components/homeComponents/ContactInfo";

import ShopSection from "../components/homeComponents/ShopSection";

const HomeScreen = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header></Header>
      <ShopSection></ShopSection>
      <CallToActionSection></CallToActionSection>
      <ContactInfo></ContactInfo>
      <Footer></Footer>
    </div>
  );
};

export default HomeScreen;
