import React from "react";
import footerContact from "../../api/footerApi.js";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const Footers = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="bg-[#151414] text-white">
      

      {/* BOTTOM SECTION */}
      <div className="border-t border-white/10 bg-[#111]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-sm text-white/60 md:flex-row">
          
          {/* COPYRIGHT */}
          <p className="text-center md:text-left">
            © 2025 All Rights Reserved —{" "}
            <NavLink to="/" className="text-blue-500 hover:underline">
              Explorrre
            </NavLink>
          </p>

          {/* MENU */}
          <ul className="flex flex-wrap items-center justify-center gap-6 md:justify-end">
            <li>
              <NavLink to="/about" className="hover:text-blue-500 transition">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/country" className="hover:text-blue-500 transition">
                Country
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-blue-500 transition">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
