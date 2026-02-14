import React from "react";
import { FiSearch } from "react-icons/fi";

export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSelectChange = (e) => {
    setFilter(e.target.value);
  };

  const sortCountries = (order) => {
    const sorted = [...countries].sort((a, b) =>
      order === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common),
    );

    setCountries(sorted);
  };

  return (
    <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* LEFT SIDE — SEARCH */}
      <div className="relative">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />

        <input
          type="text"
          placeholder="Search country..."
          value={search}
          onChange={handleInputChange}
          className="w-full sm:w-64 md:w-80 rounded border border-white/40 bg-black pl-10 pr-4 py-2 text-white placeholder-white/50 outline-none focus:border-blue-500"
        />
      </div>

      {/* RIGHT SIDE — BUTTONS */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => sortCountries("asc")}
          className="rounded-lg border border-white/20 bg-surface px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black"
        >
          Asc
        </button>

        <button
          onClick={() => sortCountries("desc")}
          className="rounded-lg border border-white/20 bg-surface px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black"
        >
          Desc
        </button>

        <select
          value={filter}
          onChange={handleSelectChange}
          className="rounded-lg border border-white/20 bg-black px-4 py-2 text-sm text-white outline-none focus:border-blue-500"
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default SearchFilter;
