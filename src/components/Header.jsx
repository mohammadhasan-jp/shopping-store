import { MenuItems } from '@headlessui/react';
import React from 'react'
import { HiOutlineLogin } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
const linksItems = [
  
  {
    id: 1,
    link: "/#Home",
    name: "دسته بندی",
    icon: <FaBars size={20}/>,
  },
  {
    id: 2,
    link:"/#About",
    name: "اسمبل هوشمند",
  },
  {
    id: 3,
    link:"/#Services",
    name: "خدمات",
  },
  {
    id: 4,
    link:"/#Contact",
    name: "درباره ما",
  },
]
function Header() {
  return (
    <div className='header'>
      <div className=' py-6'>
        <div className='container m-auto flex justify-between items-center'>
          <div className='logo links flex items-center'>
           {/*  logo and links */}
           <div className='relative'>
            <h3 className='text-3xl font-semibold text-primary dark:text-gray-400 '>JPsHOp</h3>
           </div>
           <div className='links mr-20 hidden lg:block'>
            <ul className='flex relative gap-8 '>
              {
                //links
                linksItems.map((item, index) => {
                  return (
                    <li className='text-gray-500  dark:text-gray-400  font-semibold hover:text-primary duration-200 flex items-center gap-1' key={index}>
                       {item.icon}
                     <a href={item.link}>{item.name}</a>
                    </li>
                  )
                })
              }
            </ul>
           </div>

           {/*  logo and links */}
          </div>
          <div className='login cart flex justify-between items-center   gap-6'>
          {/*  login and cart */}
          <div className='text-gray-500 hover:text-primary duration-200 dark:text-gray-400 inline-block '>
            <a href=""><HiOutlineLogin size={25} /></a>
            </div>
            <div className='cart text-gray-500 hover:text-primary duration-200 dark:text-gray-400 inline-block'>
            
            <a href=""><FaShoppingCart size={25}/></a>
            </div>
            {/*  login and cart */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;