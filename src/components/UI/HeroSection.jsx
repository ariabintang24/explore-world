import React from "react";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <section className="bg-background min-h-[85vh] flex items-center">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 lg:grid-cols-2">
        {/* TEXT */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
            Explore the World
          </h1>

          <p className="mt-8 max-w-xl text-white/70">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>

          <NavLink to="/country">
            <button className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-3 font-medium text-white transition duration-300 hover:bg-white hover:text-black">
              Start Exploring <FaLongArrowAltRight />
            </button>
          </NavLink>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/images/travel-world.png"
            alt="World"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};
