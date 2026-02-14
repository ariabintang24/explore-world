import React from "react";
import { NavLink } from "react-router-dom";
import countryData from "../api/countryData.js";
import { FaGlobeAmericas } from "react-icons/fa";
import { WhyChooseUs } from "../components/Layout/WhyChooseUs";

export const About = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 text-white">
      {/* HERO SECTION */}
      <div className="mb-20 text-center">
        <div className="mb-6 flex justify-center">
          <FaGlobeAmericas className="text-6xl text-blue-500" />
        </div>

        <h2 className="text-4xl font-bold leading-tight md:text-5xl">
          Discover Fascinating Facts <br />
          About Amazing Countries
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-white/70">
          Explore some interesting highlights from countries around the world.
          Learn about capitals, populations, and unique historical landmarks.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {countryData.map((country) => {
          const { id, countryName, capital, population, interestingFact } =
            country;

          return (
            <div
              key={id}
              className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0d0d0d] to-[#151515] p-6 sm:p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-500/20"
            >
              {/* FLAG */}
              <div className="absolute -top-5 -right-5 sm:-top-8 sm:-right-8 z-30">
                <img
                  src={`https://flagcdn.com/w160/${country.flagCode}.png`}
                  alt={countryName}
                  className="w-16 sm:w-24 rounded-xl shadow-2xl transition duration-300 ease-out group-hover:rotate-12 group-hover:scale-110"
                />
              </div>

              <div className="relative z-10">
                <h3 className="mb-4 text-xl sm:text-2xl font-semibold tracking-tight">
                  {countryName}
                </h3>

                <p className="text-sm text-white/80">
                  <span className="font-semibold text-white">Capital:</span>{" "}
                  {capital}
                </p>

                <p className="text-sm text-white/80">
                  <span className="font-semibold text-white">Population:</span>{" "}
                  {population.toLocaleString()}
                </p>

                <p className="mt-4 text-sm text-white/70 leading-relaxed">
                  {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-2xl font-semibold md:text-3xl">
          And many more amazing countries waiting to be explored 🌍
        </h3>

        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          Discover hundreds of countries with detailed insights, population
          data, capitals, languages, and fascinating historical facts.
        </p>

        <NavLink
          to="/country"
          className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-3 font-medium text-white transition duration-300 hover:bg-white hover:text-black"
        >
          Explore More Countries →
        </NavLink>
      </div>

      {/* DECORATIVE BACKGROUND BLUR */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

      {/* <WhyChooseUs /> */}
    </section>
  );
};

export default About;
