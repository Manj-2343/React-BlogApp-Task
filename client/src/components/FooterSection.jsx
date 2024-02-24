import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <div className="bg-gray-900">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 ">
        <div className="grid mb-8 lg:grid-cols-4">
          <div className="grid grid-cols-2 gap-3 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Worlds
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Reference
                  </a>
                </li>
              </ul>
            </div>
            {/* Category2 */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">Cherry</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    NonProfit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            {/* category-3 */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">Apples</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Web
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    e-commerce
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    PortFolio
                  </a>
                </li>
              </ul>
            </div>
            {/*category-4  */}
            {/* <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5"> */}
            <div className="md:max-w-md  lg:mt-0 mt-5">
              <p className="font-medium tracking-wide text-gray-300">
                Subscribe for updates
              </p>
              <form className="mt-4 flex flex-col md:flex-row">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="flex-grow w-full h-12 px-4 mb-3 transition-all duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-purple-600 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-orange-600 focus:outline-none border"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Blanditiis dolores beatae temporibus velit voluptatem sint
                voluptates nulla? Ad possimus accusamus, suscipit aliquam beatae
                illo. Soluta vitae velit laboriosam id error?
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-gray-500 font-bold">
            &copy;Copyrights 2024 | All right reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-3">
            <a
              href=""
              className="text-gray-500 transition-all duration-300 hover:text-orange-400"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href=""
              className="text-gray-500 transition-all duration-300 hover:text-orange-400"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href=""
              className="text-gray-500 transition-all duration-300 hover:text-orange-400"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
