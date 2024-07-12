import React, { useEffect, useState } from "react";

import { RadioFilter } from "../inputs/radio/radio.component";
import { Link, useParams } from "react-router-dom";


const ProductFilter = () => {

    const { category } = useParams()

  return (
    <div className="flex gap-8 border-b mb-4 ">
              <Link to="/categories" className="mb-2"><RadioFilter   checked={category == undefined ? true : false }  title="همه محصولات"  name="cakeType" /></Link>
              <Link to="/categories/eveningcake"> <RadioFilter checked={category == "eveningcake" ? true : false }  title="کیک عصرانه" name="cakeType" /></Link>
              <Link to="/categories/birthdaycake"> <RadioFilter  checked={category == "birthdaycake" ? true : false }  title="کیک تولد"  name="cakeType"/></Link>
              <Link to="/categories/cupcake"> <RadioFilter  checked={category == "cupcake" ? true : false }  title="کاپ کیک"   name="cakeType" /></Link>
              <Link to="/categories/jarcake"> <RadioFilter  checked={category == "jarcake" ? true : false }  title="جار کیک"   name="cakeType" /></Link>
              <Link to="/categories/doughnut"> <RadioFilter  checked={category == "doughnut" ? true : false }  title="دونات"   name="cakeType"/></Link>
              <Link to="/categories/misc"> <RadioFilter  checked={category == "misc" ? true : false }  title="متفرقه"  name="cakeType"/></Link>
    </div>
  );
};

export default ProductFilter;
