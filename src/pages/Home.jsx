import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductSlider from "../component/ProductSlider";
import { addCartItem } from "../redux/Slice/CartSlice";
import { getAllProducts, getDashboardData } from "../redux/Slice/HomeSlice";

const Home = () => {
  const products = useSelector(getAllProducts)?.products;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDashboardData());
  }, []);

  const addItemToCart = (item) => {
    const productId = item.id;
    dispatch(addCartItem({ productId }));
  };

  return (
    <section className="pt-[115px] pb-12 bg-gray-900/50 text-gray-100 sm:pb-12 lg:pb-16 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
            Shop Smarter, Live Better
          </h2>
          <p className="mb-4">
            "Shop Smarter, Live Better" emphasizes the convenience and
            efficiency of using our ecommerce web app. It highlights how our
            platform simplifies shopping, helping users make informed choices
            that enhance their everyday lives. With a focus on smart purchasing,
            it invites users to experience a more enjoyable and effective way to
            shop.
          </p>
        </div>
        <h1
          className="flex py-5 lg:px-0  lg:pl-5 md:pl-5 md:pr-10 px-5 lg:mr-40 
         lg-ml-5 md:mr-20 md:ml-1 mx-5 font-bold text-4xl text-gray-50"
        >
          Availabel Categories
        </h1>
        <div
          className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 
        sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-6 lg:mt-10 sm:text-left"
        >
          {products?.slice(3, 9).map((item) => (
            <div className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                  Hi
                </div>
              </div>
              <div
                key={item.id}
                className="relative overflow-hidden bg-white shadow-md rounded-xl h-full"
              >
                <div className="p-9">
                  <img
                    alt="Sunset in the mountains"
                    className="w-full max-h-64"
                    src={item?.images[0]}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {Array.isArray(products) && (
          <div className="flex flex-col m-auto p-auto my-2">
            <h1 className="flex py-5 lg:px-0 md:pl-5 md:pr-10 px-5 lg:mr-40 lg-ml-5 md:mr-20 md:ml-1 mx-5 font-bold text-4xl text-gray-50">
              Just Arrived
            </h1>
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
              <div className="flex flex-nowrap lg:ml-5 ">
                <ProductSlider
                  addItemToCart={addItemToCart}
                  products={products.slice(0, 10)}
                />
              </div>
            </div>
          </div>
        )}

        {Array.isArray(products) && (
          <div className="flex flex-col m-auto p-auto my-2 ">
            <h1 className="flex py-5 lg:px-0 md:pl-5 md:pr-10 px-5 lg:mr-40 lg-ml-5 md:mr-20 md:ml-1 mx-5 font-bold text-4xl text-gray-50">
              Latest Product
            </h1>
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
              <div className="flex flex-nowrap lg:ml-5  ">
                <ProductSlider
                  addItemToCart={addItemToCart}
                  products={products.slice(0, 10)}
                />
              </div>
            </div>
          </div>
        )}
        {Array.isArray(products) && (
          <div className="flex flex-col m-auto p-auto my-2 ">
            <h1 className="flex py-5 lg:px-0 md:pl-5 md:pr-10 px-5 lg:mr-40 lg-ml-5 md:mr-20 md:ml-1 mx-5 font-bold text-4xl text-gray-50">
              For You
            </h1>
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
              <div className="flex flex-nowrap lg:ml-5 ">
                <ProductSlider
                  addItemToCart={addItemToCart}
                  products={products?.slice(0, 10)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
