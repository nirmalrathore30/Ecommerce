import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const { products=[],addItemToCart} = props;
  return (
    <>
      {products?.map((item) => (
        <ProductItem  item={item} addItemToCart={addItemToCart}/>
      ))}
    </>
  );
};

export default ProductList;
