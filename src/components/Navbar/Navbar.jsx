import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Services", path: "/services" },
  { id: 3, title: "About Us", path: "/about" },
  { id: 4, title: "Our Team", path: "/team" },
  { id: 5, title: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => setIsMobileOpen(!isMobileOpen);
  const closeMenu = () => setIsMobileOpen(false);

  return (
    <div className="fixed w-full top-0 left-0 z-50 bg-secondary shadow-sm">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-6 px-4 flex justify-between items-center"
      >
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          SkillUp
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6">
          {NavbarMenu.map((menu) => (
            <li key={menu.id}>
              <Link
                to={menu.path}
                className="text-gray-700 hover:text-indigo-600 transition"
              >
                {menu.title}
              </Link>
            </li>
          ))}
          <button className="primary-btn ml-4">Sign In</button>
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden z-50">
          <button onClick={toggleMenu}>
            {isMobileOpen ? (
              <IoMdClose className="text-3xl text-gray-700" />
            ) : (
              <IoMdMenu className="text-3xl text-gray-700" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="bg-white px-6 pt-4 pb-8 shadow-lg lg:hidden absolute top-full left-0 w-full"
          >
            <ul className="flex flex-col gap-4 text-center bg-secondary">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.path}
                    onClick={closeMenu}
                    className="block py-2 text-lg text-gray-700 hover:text-indigo-600"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
              <button className="primary-btn w-full mt-4" onClick={closeMenu}>
                Sign In
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
