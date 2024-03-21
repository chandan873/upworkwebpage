import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../Wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex flex-col">
    <h2 className="head-text">
      Our <span>Blogs</span>
    </h2>
    <div class="  w-full flex justify-between flex-wrap mt-20 ">
      {/* <!-- card 1 --> */}
      <div class="max-w-lg mx-auto">
        <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-72 mb-5">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="font-normal text-gray-700 mb-3">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href="#"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
      {/* <!-- card 2 --> */}
      <div class="max-w-lg mx-auto">
        <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-72 mb-5">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="font-normal text-gray-700 mb-3">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href="#"
            >
              Read more
            </a>
          </div>
        </div>
      </div>

      {/* <!-- card 3 --> */}
      <div class="max-w-lg mx-auto">
        <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-72 mb-5">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="font-normal text-gray-700 mb-3">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href="#"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AppWrap(Header, "blog");
