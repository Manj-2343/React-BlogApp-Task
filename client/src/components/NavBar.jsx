import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaDribbble,
  FaFacebook,
  FaTwitter,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import Modal from "./Modal";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //navItems
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contacts" },
  ];
  //modal details
  const opnModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="bg-black text-white fixed top-0 left-0 right-0">
        <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-white">
            Design<span className="text-orange-500">MB</span>
          </a>
          {/* navItems for lg devices */}
          <ul className="md:flex gap-12 text-lg hidden">
            {navItems.map(({ path, link }) => (
              <li className="text-white" key={path}>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "text-orange-500 underline underline-offset-4"
                      : isPending
                      ? "pending"
                      : ""
                  }
                  to={path}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* menu Icons */}
          <div className="text-white lg:flex gap-4 items-center hidden ">
            <a href="/" className="hover:text-orange-600">
              <FaFacebook />
            </a>
            <a href="/" className="hover:text-orange-600">
              <FaDribbble />
            </a>
            <a href="/" className="hover:text-orange-600">
              <FaTwitter />
            </a>
            <button onClick={opnModal} className="bg-orange-600 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
              Login
            </button>
          </div>
          {/* Our modal component is here  */}
          <Modal isOpen={isModalOpen} onClose={closeModal} />

          {/* mobile menu btn,display mobile screen */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="cursor-pointer">
              {isMenuOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
        {/* menu Items only for mobile */}
        <div>
          <ul
            className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
              isMenuOpen
                ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
                : "hidden"
            }`}
          >
            {navItems.map(({ path, link }) => (
              <li className="text-black" key={path}>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "text-orange-500 underline underline-offset-4"
                      : isPending
                      ? "pending"
                      : ""
                  }
                  onClick={toggleMenu}
                  to={path}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default NavBar;
