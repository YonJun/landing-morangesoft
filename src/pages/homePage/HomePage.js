import React from "react";
import Hero from "../../components/hero/Hero";
import BringBusiness from "../../components/bringBusiness/BringBusiness";
import ContactUs from "../../components/contactUs/ContactUs";
import Innovador from "../../components/innovador/Innovador";
import Plan from "../../components/plan/Plan";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <BringBusiness />
      <ContactUs />
      <Innovador />
      <Plan />
    </div>
  );
};

export default HomePage;
