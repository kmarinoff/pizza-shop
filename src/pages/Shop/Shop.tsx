import React from "react";
import {
  AboutUs,
  Contacts,
  Footer,
  Ingredients,
  OneBlock,
  PaymentMethods,
  Products,
  Specialty,
  Staff
} from "src/components";
import { CustomCarousel } from "src/components/CustomCarousel";

const Shop: React.FC = () => {
  return (
    <>
      <CustomCarousel />

      <section id="specialty" style={{ backgroundColor: "#f3f3f3" }}>
        <Specialty />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="ingredients">
        <Ingredients />
      </section>

      <section id="staff">
        <Staff />
      </section>

      <section id="about-us">
        <AboutUs />
      </section>

      <section id="one-block-section">
        <OneBlock />
      </section>

      <section id="payment-methods">
        <PaymentMethods />
      </section>

      <section id="contacts">
        <Contacts />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export { Shop };
