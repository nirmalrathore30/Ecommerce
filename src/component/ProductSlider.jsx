import React from "react";

const ProductSlider = (props) => {
  const { products = [], addItemToCart } = props;
  return (
    <>
      {products?.map((item) => (
        <div key={item?.id} className="inline-block px-3">
          <div
            className="w-80 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl 
          transition-shadow duration-300 ease-in-out"
          >
            <div className="relative">
              <a href="#">
                <img
                  alt="Sunset in the mountains"
                  className="w-full max-h-64"
                  src={item?.images[0]}
                  // "https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <div>
                <a href="#!">
                  <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                    {item?.price} INR
                  </div>
                </a>

                <a href="#!" onClick={() => addItemToCart(item)}>
                  <div className="absolute bottom-0 right-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                    Add to Cart
                  </div>
                </a>
              </div>
              <a href="!#">
                <div className="text-sm absolute top-0 right-0 bg-indigo-900 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  {/* <span className="font-bold">27</span> */}
                  <small className="font-bold text-center">
                    {item?.availabilityStatus}
                  </small>
                </div>
              </a>
            </div>
            <div className="px-6 py-4">
              <a
                className="font-semibold text-indigo-500 text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
                href="#"
              >
                {item?.title}
              </a>
              <p className="text-gray-500 text-sm">
                {item?.warrantyInformation}
              </p>
            </div>
            <div className="px-6 py-4 flex flex-row items-center">
              <span
                className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
                href="#"
              >
                <svg
                  height="13px"
                  id="Layer_1"
                  style={{
                    enableBackground: "new 0 0 512 512",
                  }}
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="13px"
                  x="0px"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  y="0px"
                >
                  <g>
                    <g>
                      <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z" />
                    </g>
                  </g>
                </svg>
                <span className="ml-1">{item.shippingInformation}</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductSlider;
