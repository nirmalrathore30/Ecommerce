import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { fetchCartItemsData } from "../redux/Slice/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardData } from "../redux/Slice/HomeSlice";
import { MenuIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cartItems?.list);
  const [showNav, setShowNav] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDashboardData());
    dispatch(fetchCartItemsData());
  }, []);
  const total = cartItems?.reduce(
    (accumulator, currentItem) => accumulator + currentItem.quantity,
    0
  );
  const toogleNav = () => setShowNav((preState) => !preState);
  return (
    <header>
      <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <button
            onClick={() => toogleNav()}
            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-twe-collapse-init
            data-twe-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MenuIcon className="w-10" />
          </button>
          <div
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-twe-collapse-item
          >
            <Link
              className="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
              to="/"
            >
              <img
                src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
                style={{ height: "15px" }}
                alt="TE Logo"
                loading="lazy"
              />
            </Link>
            {/* Left navigation links */}
            <ul
              className="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
              data-twe-navbar-nav-ref
            >
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                {/* Dashboard link */}
                <Link
                  className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                  to="/"
                  data-twe-nav-link-ref
                >
                  Dashboard
                </Link>
              </li>
              {/* Team link */}
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <Link
                  className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  to="foryou"
                  data-twe-nav-link-ref
                >
                  For-you
                </Link>
              </li>
              {/* Projects link */}
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <Link
                  className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  to="contact"
                  data-twe-nav-link-ref
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Right elements */}
          <div className="relative flex items-center">
            {/* Cart Icon */}
            <Link
              className="me-4 text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              to="Cart"
            >
              <span className="[&>svg]:w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-10 w-10"
                >
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
              </span>
              {total > 0 ? (
                <div className="absolute bottom-6 right-0 bg-indigo-600 rounded-3xl h-6 w-6 text-gray-50 text-center">
                  {total}
                </div>
              ) : null}
            </Link>
          </div>
        </div>
      </nav>
      {showNav&&<div className="">
        <ul>
          <li>
            <Link
              className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
              to="/"
              data-twe-nav-link-ref
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
              to="foryou"
              data-twe-nav-link-ref
            >
              For-you
            </Link>
          </li>
          <li>
            <Link
              className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
              to="contact"
              data-twe-nav-link-ref
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>}
    </header>
  );
};

export default Navbar;
