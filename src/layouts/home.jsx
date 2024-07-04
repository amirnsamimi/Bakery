import React from "react";
import Carousel from "../components/visuals/carousel/carousel.component";
import MainProducts from "../components/products/mainProducts/mainProducts.component";
import Categories from "../components/products/categories/categories";

const HomeLayout = () => {
  return (
    <div className="grid gap-12">
      <section>
        <Carousel />
      </section>
      <section>
        <MainProducts title={"تازه ها"} symbol={"tag-outline"} />
      </section>
      <section>
        <Categories />
      </section>
      <section>
        <MainProducts title={"تخفیف ها"} symbol={"discount-outline"} />
      </section>
    </div>
  );
};

export default HomeLayout;
