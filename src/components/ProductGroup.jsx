import React from "react";
import "./product.css";
import earphone from "../assets/earphone.png";
import watch from "../assets/watch.png";
import macbook from "../assets/macbook.png";
import gadgets from "../assets/gadgets.png";
import ps4 from '../assets/ps4.png';
import VR from '../assets/VR.png';

function ProductGroup() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 h-72 py-7  ">
        {/*  Product section  and cards*/}
        <div className="card container items-center justify-between flex relative product-group-card3 h-72 rounded-3xl col-span-2 lg:col-span-1 shadow-xl">
          <div className="">
            <img className="h-72" src={macbook} alt="" />
          </div>
          <div>
            <div className="mb-4 w-full text-end ">
              <p className="text-white">ٍENJOY</p>
              <p className="font-semibold mb-2 text-2xl text-white">WITH</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-20 text-white animate-pulse">
                LAPTOP
              </p>
              <button className="bg-primary hover:text-primary hover:bg-white duration-200  text-white px-3 py-2 rounded-md font-semibold mt-5">
              <a href="/laptops">مشاهده همه</a>
              </button>
            </div>
          </div>
        </div>
        <div className="card grid grid-cols-2 lg:col-span-1 col-span-2 gap-4 relative ">
          {/*   watchs product */}
          <div className="flex relative items-center justify-between container max-w-full product-group-card2 col-span-1 rounded-3xl shadow-xl  h-72  ">
            <div className="">
              <img
                className="absolute h-52 w-full xl:-right-20 -right-14 -top-0 lg:top-4  "
                src={watch}
                alt=""
              />
            </div>
            <div className="mb-4  text-end  z-10   ">
              <p className="text-white text-xs">ٍENJOY</p>
              <p className="font-semibold mb-2 text-xl lg:text-2xl text-white">WITH</p>
              <p className="text-3xl xl:text-5xl font-bold opacity-20  text-white animate-pulse z-0">
                WTACHS
              </p>
              <button className="bg-primary hover:text-primary  z-20 hover:bg-white duration-200   text-sm text-white px-2 lg:px-3 py-2 rounded-md font-semibold mt-5">
              <a href="/watchs">مشاهده همه</a>
              </button>
            </div>
          </div>
          {/*   watchs product */}
          <div className="flex relative items-center justify-between container max-w-full product-group-card1 col-span-1 rounded-3xl shadow-xl  h-72 ">
              <div className="">
                <img
                  className=" absolute z-20 bottom-0 xl:h-72 h-60 "
                  src={earphone}
                  alt=""
                />
              </div>
              <div className="mb-4  text-end  z-10   ">
              <p className="text-white text-xs">ٍENJOY</p>
              <p className="font-semibold mb-2 text-xl lg:text-2xl text-white">WITH</p>
              <p className="text-3xl xl:text-5xl font-bold opacity-20  text-white animate-pulse z-0">
                EARPHONE
              </p>
              <button className="bg-primary hover:text-primary  z-20 hover:bg-white duration-200  text-sm text-white px-2 lg:px-3 py-2  rounded-md font-semibold mt-5">
                <a href="/earphones">مشاهده همه</a>
              </button>
            </div>
            
          </div>
          
        </div>
        {/* secend trends banners */}
        <div className="card py-7 grid grid-cols-2 lg:col-span-1 col-span-2 gap-4 relative ">
          {/*   */}
          <div className="flex product-group-card6 relative items-center justify-between container max-w-full product-group-card2 col-span-1 rounded-3xl shadow-xl  h-72  ">
            <div className="">
              <img
                className="absolute w-48 xl:w-52 h-52 xl:h-60 right-2 lg:right-0 xl:right-5   top-9  xl:top-4 "
                src={gadgets}
                alt=""
              />
            </div>
            <div className="mb-4  text-end  z-10   ">
              <p className="text-white text-xs">ٍENJOY</p>
              <p className="font-semibold mb-2 text-xl lg:text-2xl  text-white">WITH</p>
              <p className="text-3xl xl:text-5xl font-bold opacity-20  text-white animate-pulse z-0">
                GADGETS
              </p>
              <button className="bg-primary hover:text-primary  z-20 hover:bg-white duration-200  text-sm text-white px-2 lg:px-3 py-2  rounded-md font-semibold mt-5">
              <a href="/watchs">مشاهده همه</a>
              </button>
            </div>
          </div>
          {/*   w*/}
          <div className="flex relative items-center product-group-card5 justify-between container  product-group-card1 col-span-1 rounded-3xl shadow-xl  h-72 ">
              <div className="">
                <img
                  className=" absolute bottom-0 h-4/6 md:h-60  xl:w-64 xl:h-68 right-0 xl:right-3  "
                  src={VR}
                  alt=""
                />
              </div>
              <div className="mb-4  text-end  z-10   ">
              <p className="text-white text-xs ">ٍENJOY</p>
              <p className="font-semibold mb-2 text-xl lg:text-2xl text-white">WITH</p>
              <p className="text-3xl xl:text-5xl font-bold opacity-20  text-white animate-pulse z-0">
                VR
              </p>
              <button className="bg-primary hover:text-primary  z-20 hover:bg-white duration-200 text-sm text-white px-2 lg:px-3 py-2 rounded-md font-semibold mt-5">
                <a href="/earphones">مشاهده همه</a>
              </button>
            </div>
            
          </div>
          
        </div>
        <div className="py-7 col-span-2 lg:col-span-1 ">
        <div className="card   container items-center product-group-card4 justify-between flex relative product-group-card3 h-72 rounded-3xl  shadow-xl">
          <div className="">
            <img className="h-60" src={ps4} alt="" />
          </div>
          <div>
            <div className="mb-4 w-full text-end ">
              <p className="text-white text-xs">ٍENJOY</p>
              <p className="font-semibold mb-2 text-2xl text-white">WITH</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-20 text-white animate-pulse">
                CONSOLE
              </p>
              <button className="bg-primary hover:text-primary hover:bg-white duration-200  text-white px-3 py-2 rounded-md font-semibold mt-5">
              <a href="/laptops">مشاهده همه</a>
              </button>
            </div>
          </div>
        </div>
        </div>
        {/*   */}
      </div>
      
    </div>
  );
}

export default ProductGroup;
