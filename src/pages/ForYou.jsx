import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../component/ProductList";
import { addCartItem } from "../redux/Slice/CartSlice";
import { getAllProducts, getDashboardData } from "../redux/Slice/HomeSlice";

const ForYou = () => {
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

        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
            <ProductList products={products} addItemToCart={addItemToCart} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForYou;
