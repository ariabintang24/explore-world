import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <li className="mt-8">
      <div className="h-full rounded-2xl border border-white/10 bg-surface shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
        {/* IMAGE */}
        <img
          src={flags.svg}
          alt={name.common}
          className="h-40 w-full rounded-t-2xl object-cover"
        />

        {/* CONTENT */}
        <div className="flex flex-col gap-3 p-6 text-white">
          <p className="text-lg font-semibold tracking-wide">
            {name.common.length > 10
              ? name.common.slice(0, 10) + "..."
              : name.common}
          </p>

          <p className="text-sm opacity-90">
            <span className="font-semibold">Population:</span>{" "}
            {population.toLocaleString()}
          </p>

          <p className="text-sm opacity-90">
            <span className="font-semibold">Region:</span> {region}
          </p>

          <p className="text-sm opacity-90">
            <span className="font-semibold">Capital:</span>{" "}
            {capital?.[0] ?? "—"}
          </p>

          <NavLink to={`/country/${name.common}`} className="mt-4">
            <button className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black">
              Read More
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
