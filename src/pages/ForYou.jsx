import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../component/ProductList";
import { getAllProducts, getDashboardData } from "../redux/Slice/HomeSlice";

const ForYou = () => {
  const products = useSelector(getAllProducts)?.products;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDashboardData());
  }, []);
  return (
    <section className="pt-[115px] pb-12 bg-gray-900 text-gray-100 sm:pb-12 lg:pb-16 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
            We are just getting started!
          </h2>
          <p className="mb-4">
            We are creating a tool that helps you be more productive and
            efficient when building websites and webapps
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
            <ProductList products={products} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForYou;
