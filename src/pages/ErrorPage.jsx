import React from "react";
import { NavLink, useRouteError } from "react-router-dom";
import { FaGlobeAmericas } from "react-icons/fa";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white px-6">
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative z-10 text-center max-w-2xl">
        {/* ICON */}
        <div className="flex justify-center mb-6">
          <FaGlobeAmericas className="text-6xl text-blue-500 animate-pulse" />
        </div>

        {/* MESSAGE */}
        <h2 className="mt-6 text-2xl font-semibold md:text-3xl">
          Oops!
        </h2>

        <p className="mt-4 text-white/70 leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
          Let’s get you back to exploring the world.
        </p>

        {/* OPTIONAL ERROR MESSAGE */}
        {error?.statusText && (
          <p className="mt-4 text-sm text-red-400">{error.statusText}</p>
        )}

        {/* BUTTON */}
        <NavLink
          to="/"
          className="mt-10 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-3 font-medium text-white transition duration-300 hover:bg-white hover:text-black"
        >
          Go Back Home →
        </NavLink>
      </div>
    </section>
  );
};

export default ErrorPage;
