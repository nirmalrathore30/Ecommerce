import React from "react";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col pt-[110px] px-5 ">
      <div className="w-full mt-20 max-w-screen mx-auto">
        {/* Tab Buttons */}
        <div className="bg-blue-500 p-2 rounded-t-lg">
        <h3 className="text-3xl text-white ml-2">Latest</h3>

          <div className="flex justify-between space-x-4">
            <button
              className="px-4 py-2 text-white font-semibold border-b-1 hover:bg-transparent focus:outline-none tab-button"
              onclick="showTab('tab1')"
            >
              Back
            </button>

            <button
              className="px-4 py-2 text-white font-semibold border-b-1 hover:bg-transparent focus:outline-none tab-button"
              onclick="showTab('tab3')"
            >
              Next
            </button>
          </div>
        </div>
        {/* Tab Conte5t */}

        <div
          id="tab1"
          className="p-4 tab-content bg-white shadow-md rounded-lg"
        >
          <h2 className="text-2xl font-semibold mb-2 text-blue-700">
            Tab 1 Content
          </h2>
          <p>
            Vestibulum condimentum imperdiet velit nec ornare. Nullam lobortis
            urna posuere quam porta consequat. Donec commodo diam lectus, sit
            amet tempor dolor scelerisque eget. Vestibulum at lectus dui.
            Maecenas consectetur tempor ipsum non porttitor. Cras accumsan
            mattis aliquam. Fusce eleifend maximus elit facilisis condimentum.
            Mauris non risus sed ligula convallis fermentum.
            <br />
            Quisque eu purus nunc. Ut eget ligula ac lorem laoreet scelerisque
            in ut nulla. Quisque volutpat elit eget tellus pharetra, vel
            sollicitudin velit scelerisque. Vivamus ac libero eu nunc congue
            malesuada eu vitae est.
          </p>
        </div>
      </div>
      <div class="flex  flex-wrap justify-center mt-10">
        {[{}, {}, {}].map(() => (
          <div class="p-4 max-w-sm">
            <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 class="text-white dark:text-white text-lg font-medium">
                  Feature 3
                </h2>
              </div>
              <div class="flex flex-col justify-between flex-grow">
                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                  Lorem ipsum dolor sit amet. In quos laboriosam non neque
                  eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum
                  inventore et maxime amet.
                </p>
                <a
                  href="#"
                  class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
