import React, { useEffect, useState } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // 🔹 Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;
  const MAX_VISIBLE_PAGES = 5;

  // 🔹 Fetch countries
  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);

      const res = await getCountryData();
      if (res.status === 200) {
        setCountries(res.data);
      }
      setLoading(false);
    };

    fetchCountries();
  }, []);

  //Loader
  if (loading) return <Loader />;

  // 🔹 Search Logic
  // It's equal to Indonesia.toLowerCase().
  const searchCountry = (country) => {
    // if (search) {
    if (!search) return true;
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  };

  // 🔹 Filter Logic
  const filterRegion = (country) => {
    if (filter === "all") return true; //return country
    return country.region === filter;
  };

  // Filtered Result
  const filteredCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country),
  );

  // 📄 Pagination logic
  const totalPages = Math.ceil(filteredCountries.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCountries = filteredCountries.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  // Sliding window pagination logic
  const half = Math.floor(MAX_VISIBLE_PAGES / 2);

  let startPage = Math.max(1, currentPage - half);
  let endPage = startPage + MAX_VISIBLE_PAGES - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - MAX_VISIBLE_PAGES + 1);
  }

  const visiblePages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  // 🔹 HANDLERS
  const handleSearchChange = (value) => {
    setSearch(value);
    setCurrentPage(1); // reset pagination
  };

  const handleFilterChange = (value) => {
    setFilter(value);
    setCurrentPage(1); // reset pagination
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <SearchFilter
        search={search}
        setSearch={handleSearchChange}
        filter={filter}
        setFilter={handleFilterChange}
        countries={countries}
        setCountries={setCountries}
      />

      {/* EMPTY STATE */}
      {filteredCountries.length === 0 ? (
        <div className="mt-16 flex flex-col items-center justify-center text-center">
          <img
            src="/images/no-data.png"
            alt="No country found"
            className="mb-6 w-48 opacity-80"
          />

          <h3 className="text-xl font-semibold text-white">
            Country Not Found
          </h3>

          <p className="mt-2 max-w-md text-sm text-white/70">
            We couldn’t find any country matching your search or filter. Try
            adjusting your keywords or selecting a different region.
          </p>
        </div>
      ) : (
        <>
          {/* GRID */}
          <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {paginatedCountries.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))}
          </ul>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
              {/* PREV */}
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white disabled:opacity-40"
              >
                Prev
              </button>

              {/* PAGE NUMBERS */}
              {visiblePages.map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`rounded-lg px-4 py-2 text-sm ${
                    currentPage === page
                      ? "bg-white text-black"
                      : "border border-white/20 text-white hover:bg-white hover:text-black"
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* NEXT */}
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};
