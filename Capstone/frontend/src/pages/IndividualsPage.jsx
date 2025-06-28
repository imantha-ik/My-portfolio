import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IndividualsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Elemental Aim – For Individuals";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center justify-start px-8 py-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Sisters.jpg')",
          backgroundPosition: "center right",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 mt-32 bg-black/60 p-8 rounded-xl max-w-lg backdrop-blur-md">
          <h1 className="text-5xl font-bold mb-4">You can help.</h1>
          <p className="text-lg text-gray-200 mb-6">
            Watch the film and find out how you can help support access to education.
          </p>
          <button
            className="bg-cyan-500 text-white px-6 py-3 font-semibold rounded-lg hover:bg-cyan-600 transition"
            onClick={() => navigate("/film")}
          >
            Watch Now
          </button>
        </div>
      </section>

      {/* HOW IT WORKS IMAGE SECTION */}
<section className="bg-white dark:bg-neutral-900 text-black dark:text-white py-16 px-6 transition-colors duration-300">
  <h2 className="text-4xl font-bold text-center mb-12">How it Works.</h2>
  <div className="flex justify-center">
    <img
      src="/images/11.png"
      alt="How it Works flow"
      className="w-full max-w-[1300px] rounded-lg shadow-xl"
    />
  </div>
</section>

{/* WHERE TO NOW SECTION */}
<section className="bg-teal-50 dark:bg-[#0f2d2d] text-center py-16 px-6 transition-colors duration-300">
  <h2 className="text-4xl font-bold mb-10 text-gray-800 dark:text-white">
    Where to Now?
  </h2>
  <div className="flex flex-col md:flex-row justify-center items-center gap-8">
    {[
      { label: 'Donate', link: '/donate' },
      { label: 'Get Involved', link: '/get-involved' },
      { label: 'About Us', link: '/about' },
    ].map(({ label, link }) => (
      <button
        key={label}
        onClick={() => navigate(link)}
        className="bg-teal-500 text-white text-xl px-10 py-5 font-semibold rounded-lg shadow-lg hover:bg-teal-600 transition"
      >
        {label}
      </button>
    ))}
  </div>
</section>

    </div>
  );
};

export default IndividualsPage;
