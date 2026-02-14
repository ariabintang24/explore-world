import React, { useEffect, useState, useTransition } from "react";
import { useParams, NavLink } from "react-router-dom";
import { getCountryIndividualData } from "../../api/postApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      const res = await getCountryIndividualData(id);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
      setLoading(false);
    };

    fetchCountry();
  }, [id]);

  if (loading) return <Loader />;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-2xl border border-white/10 bg-surface p-8 shadow-xl">
        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* FLAG */}
          <div className="flex items-center justify-center">
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>

          {/* DETAILS */}
          <div>
            <h2 className="mb-6 text-3xl font-bold text-white">
              {country.name.official}
            </h2>

            <div className="grid grid-cols-1 gap-3 text-sm text-white/90 sm:grid-cols-2">
              <p>
                <span className="font-semibold">Native Names:</span>{" "}
                {Object.keys(country.name.nativeName || {})
                  .map((key) => country.name.nativeName[key].common)
                  .join(", ")}
              </p>

              <p>
                <span className="font-semibold">Population:</span>{" "}
                {country.population.toLocaleString()}
              </p>

              <p>
                <span className="font-semibold">Region:</span> {country.region}
              </p>

              <p>
                <span className="font-semibold">Sub Region:</span>{" "}
                {country.subregion}
              </p>

              <p>
                <span className="font-semibold">Capital:</span>{" "}
                {country.capital?.join(", ")}
              </p>

              <p>
                <span className="font-semibold">Top Level Domain:</span>{" "}
                {country.tld?.[0]}
              </p>

              <p>
                <span className="font-semibold">Currencies:</span>{" "}
                {Object.keys(country.currencies || {})
                  .map((cur) => country.currencies[cur].name)
                  .join(", ")}
              </p>

              <p>
                <span className="font-semibold">Languages:</span>{" "}
                {Object.keys(country.languages || {})
                  .map((key) => country.languages[key])
                  .join(", ")}
              </p>
            </div>
          </div>
        </div>

        {/* BACK BUTTON */}
        <div className="mt-12 flex justify-end">
          <NavLink to="/country">
            <button className="rounded-xl border border-white/20 bg-black px-6 py-3 text-white transition hover:bg-white hover:text-black">
              Go Back
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
