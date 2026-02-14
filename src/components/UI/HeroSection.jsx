import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <section className="bg-background min-h-screen flex items-center pt-28 pb-16 md:pt-0">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-2">
        {/* TEXT */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Explore the World
          </h1>

          <p className="mt-6 max-w-xl text-white/70 mx-auto lg:mx-0">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>

          <NavLink to="/country" className="mt-8">
            <button className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-3 font-medium text-white transition duration-300 hover:bg-white hover:text-black hover:scale-105">
              Start Exploring <FaLongArrowAltRight />
            </button>
          </NavLink>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/images/travel-world.png"
            alt="World"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};
