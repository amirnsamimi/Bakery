import React, { useEffect, useState } from 'react'
import MainCart from '../components/products/mainCart/mainCart.component'
import ProductFilter from '../components/sorting-filtering/productFilter.component'
import { useParams } from 'react-router-dom'
import { DynamicSvg } from '../assets/icons/icons'

const Category = () => {

  

  return (
    <div className='p-4 grid gap-4 md:gap-10 '>
      <div className='flex gap-4'>
      
      <h1 className='font-medium text-xs md:text-[2rem]'>
        دسته بندی محصولات 
      </h1>
      </div>
      <ProductFilter  />
      <ul className='grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 w-full gap-4 justify-center justify-items-center'>
       <li className='col-auto'>
      <MainCart
            src="/assets/images/b599bbc73eaa10109e1150ed4ee29a41.jpeg"
            description="حداقل سفارش جارکیک 3عدد است."
            unit="اسلایس"
            title="کاپ کیک کدوحلوایی"
            offPrice={18000}
            price={12000}
          />
          </li>
          <li className='col-auto'>
      <MainCart
            src="/assets/images/b599bbc73eaa10109e1150ed4ee29a41.jpeg"
            description="حداقل سفارش جارکیک 3عدد است."
            unit="اسلایس"
            title="کاپ کیک کدوحلوایی"
            offPrice={18000}
            price={12000}
          />
          </li>
          <li className='col-auto'>
      <MainCart
            src="/assets/images/b599bbc73eaa10109e1150ed4ee29a41.jpeg"
            description="حداقل سفارش جارکیک 3عدد است."
            unit="اسلایس"
            title="کاپ کیک کدوحلوایی"
            offPrice={18000}
            price={12000}
          />
          </li>
          <li className='col-auto'>
      <MainCart
            src="/assets/images/b599bbc73eaa10109e1150ed4ee29a41.jpeg"
            description="حداقل سفارش جارکیک 3عدد است."
            unit="اسلایس"
            title="کاپ کیک کدوحلوایی"
            offPrice={18000}
            price={12000}
          />
          </li>
          <li className='col-auto'>
      <MainCart
            src="/assets/images/b599bbc73eaa10109e1150ed4ee29a41.jpeg"
            description="حداقل سفارش جارکیک 3عدد است."
            unit="اسلایس"
            title="کاپ کیک کدوحلوایی"
            offPrice={18000}
            price={12000}
          />
          </li>
          <li className='col-auto'>
      <MainCart
            src="/assets/images/b599bbc73eaa10109e1150ed4ee29a41.jpeg"
            description="حداقل سفارش جارکیک 3عدد است."
            unit="اسلایس"
            title="کاپ کیک کدوحلوایی"
            offPrice={18000}
            price={12000}
          />
          </li>
          <li className='col-auto'>
      <MainCart
            src="/assets/images/b599bbc73eaa10109e1150ed4ee29a41.jpeg"
            description="حداقل سفارش جارکیک 3عدد است."
            unit="اسلایس"
            title="کاپ کیک کدوحلوایی"
            offPrice={18000}
            price={12000}
          />
          </li>
        
      
      </ul>
    </div>
  )
}

export default Category
