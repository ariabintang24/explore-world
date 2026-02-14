import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* TITLE */}
      <h2 className="mb-12 text-center text-4xl font-semibold text-white">
        Contact Us
      </h2>

      {/* FORM WRAPPER */}
      <div className="flex justify-center">
        <form
          onSubmit={handleFormSubmit}
          className="flex w-full max-w-md flex-col gap-8"
        >
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            placeholder="Enter your name"
            className="rounded border border-white/40 bg-black px-4 py-3 text-white placeholder-white/50 outline-none focus:border-blue-500"
          />

          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            placeholder="Enter your email"
            className="rounded border border-white/40 bg-black px-4 py-3 text-white placeholder-white/50 outline-none focus:border-blue-500"
          />

          <textarea
            name="message"
            rows="6"
            required
            autoComplete="off"
            placeholder="Enter your message"
            className="resize-none rounded border border-white/40 bg-black px-4 py-3 text-white placeholder-white/50 outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-surface px-6 py-3 text-white transition hover:bg-white hover:text-black"
          >
            Send Message <FaLongArrowAltRight />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;