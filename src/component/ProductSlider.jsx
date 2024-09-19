import React from "react";
import ProductItem from "./ProductItem";

const ProductSlider = (props) => {
  const { products = [], addItemToCart } = props;
  return (
    <>
      {products?.map((item) => (
        <ProductItem item={item} addItemToCart={addItemToCart} />
      ))}
    </>
  );
};

export default ProductSlider;
