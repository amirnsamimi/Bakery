import React from "react";

import { RadioFilter } from "../inputs/radio/radio.component";


const ProductFilter = ({selectedCategory}) => {



  return (
    <div className="flex gap-8 border-b ">
              <RadioFilter selectedCategory={selectedCategory}  checked={selectedCategory == "" ? true : false }  title="همه محصولات"  name="cakeType" />
      <RadioFilter checked={selectedCategory == "eveningcake" ? true : false } selectedCategory={selectedCategory} title="کیک عصرانه" name="cakeType" />
      <RadioFilter  checked={selectedCategory == "birthdaycake" ? true : false } selectedCategory={selectedCategory} title="کیک تولد"  name="cakeType"/>
      <RadioFilter  checked={selectedCategory == "cupcake" ? true : false } selectedCategory={selectedCategory} title="کاپ کیک"   name="cakeType" />
      <RadioFilter  checked={selectedCategory == "jarcake" ? true : false }  selectedCategory={selectedCategory}title="جار کیک"   name="cakeType" />
      <RadioFilter  checked={selectedCategory == "doughnut" ? true : false } selectedCategory={selectedCategory} title="دونات"   name="cakeType"/>
      <RadioFilter  checked={selectedCategory == "misc" ? true : false } selectedCategory={selectedCategory} title="متفرقه"  name="cakeType"/>
    </div>
  );
};

export default ProductFilter;
