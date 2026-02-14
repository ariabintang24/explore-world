import React from "react";

export const WhyChooseUs = () => {
  const features = [
    {
      title: "Explore All Countries",
      desc: "Access information about countries from every region in the world in one place. Discover new destinations and expand your global knowledge effortlessly.",
      image:
        "/images/explore.jpg",
    },
    {
      title: "Detailed Insights",
      desc: "View detailed country data including population, capital, languages, currencies, and more — all structured clearly and easy to understand.",
      image:
        "/images/insight.png",
    },
    // {
    //   title: "Fast & Responsive",
    //   desc: "Optimized for speed and fully responsive across all devices, ensuring a seamless experience whether you're on desktop, tablet, or mobile.",
    //   image:
    //     "/images/explore.jpeg",
    // },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 text-white">
      {/* TITLE */}
      <div className="mb-24 text-center">
        <h2 className="text-4xl font-bold md:text-5xl">
          Why <span className="text-blue-500">Explorrre</span>?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-white/70">
          Discover the world with powerful tools designed to make exploring
          countries simple, fast, and informative.
        </p>
      </div>

      {/* FEATURES */}
      <div className="space-y-32">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`grid items-center gap-12 md:grid-cols-2 ${
              index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={feature.image}
                alt={feature.title}
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0  transition group-hover:bg-black/20" />
            </div>

            {/* TEXT */}
            <div>
              <h3 className="mb-6 text-3xl font-semibold">{feature.title}</h3>

              <p className="text-white/70 leading-relaxed text-lg">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
