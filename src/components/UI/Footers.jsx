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
      {/* TOP SECTION */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 lg:grid-cols-3 lg:text-left">
          {footerContact.map((contact, index) => {
            const { icon, title, details } = contact;

            return (
              <div
                key={index}
                className="flex flex-col items-center gap-4 lg:flex-row lg:items-start"
              >
                {/* ICON */}
                <div className="text-4xl text-blue-500">
                  {footerIcon[icon]}
                </div>

                {/* TEXT */}
                <div>
                  <p className="text-lg font-semibold">{title}</p>
                  <p className="text-sm text-white/60">{details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

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
              <NavLink to="/#" className="hover:text-blue-500 transition">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/#" className="hover:text-blue-500 transition">
                Terms & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink to="/#" className="hover:text-blue-500 transition">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
