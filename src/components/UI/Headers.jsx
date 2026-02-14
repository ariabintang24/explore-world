import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export const Headers = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface shadow-md backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            <NavLink to="/" className="text-2xl font-bold text-white">
              Explorrre
            </NavLink>

            <nav className="hidden md:block">
              <ul className="flex gap-10 text-white">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/country">Country</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>

            <button
              onClick={() => setShow(true)}
              className="md:hidden text-white text-2xl"
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </header>

      {/* 🔥 MOBILE MENU DIPINDAHKAN KE LUAR HEADER */}
      {show && (
        <div className="fixed inset-0 z-[999] md:hidden">
          {/* BACKDROP */}
          <div
            onClick={() => setShow(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* DRAWER */}
          <div className="absolute inset-0 flex flex-col bg-[#151414]">
            {/* CLOSE BUTTON */}
            <div className="flex justify-end px-6 pt-10">
              <button
                onClick={() => setShow(false)}
                className="text-3xl text-white hover:text-red-400 transition"
              >
                <IoClose />
              </button>
            </div>

            {/* MENU CENTERED */}
            <div className="flex flex-1 items-center justify-center">
              <ul className="flex flex-col items-center gap-12 text-2xl font-medium text-white">
                <li>
                  <NavLink to="/" onClick={() => setShow(false)}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={() => setShow(false)}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/country" onClick={() => setShow(false)}>
                    Country
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={() => setShow(false)}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Headers;
