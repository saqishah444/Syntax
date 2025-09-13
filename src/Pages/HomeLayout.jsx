import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";

const HomeLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white py-6 ">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-wrap items-center  justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <span className="text-black text-4xl font-md font-semibold">Syntax</span>
          </NavLink>

          {/* Hamburger (mobile) */}
          <button
            aria-label="Toggle menu"
            className="md:hidden text-gray-700 hover:text-pink-400 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Menu */}
          <div className={`${isOpen ? "block" : "hidden"} w-full md:w-auto md:flex items-center justify-center`}>
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 text-lg font-medium mt-4 md:mt-0">
              <li>
                <NavLink to="/" className={({ isActive }) =>
                  `block text-[20px] py-2 px-3 ${isActive ? "text-pink-400" : "text-gray-700 hover:text-pink-400"}`
                }>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/work" className={({ isActive }) =>
                  `block text-[20px] py-2 px-3 ${isActive ? "text-pink-400" : "text-gray-700 hover:text-pink-400"}`
                }>
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink to="/whatwedo" className={({ isActive }) =>
                  `block text-[20px] py-2 px-3 ${isActive ? "text-pink-400" : "text-gray-700 hover:text-pink-400"}`
                }>
                  What we do
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) =>
                  `block text-[20px] py-2 px-3 ${isActive ? "text-pink-400" : "text-gray-700 hover:text-pink-400"}`
                }>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) =>
                  `block text-[20px] py-2 px-3 ${isActive ? "text-pink-400" : "text-gray-700 hover:text-pink-400"}`
                }>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Content area with padding so it doesn’t hide under navbar */}
      <main className="pt-24 ">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
