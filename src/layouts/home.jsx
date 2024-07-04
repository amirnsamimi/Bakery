import React from "react";
import Navbar from "../components/navigations/navbar/navbar.component";
import Carousel from "../components/visuals/carousel/carousel.component";
import WhatsNew from "../components/products/whatsnew/whatsNew.component";

const HomeLayout = () => {
  return (
    <div className="grid gap-12">
      <section>
        <Carousel />
      </section>
      <section>
        <WhatsNew />
      </section>
    </div>
  );
};

export default HomeLayout;
