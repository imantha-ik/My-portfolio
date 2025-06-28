import React, { useEffect } from "react";

const FloatingSchoolsPage = () => {
  useEffect(() => {
    document.title = "Elemental Aim – Floating Schools";
  }, []);

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white scroll-smooth">
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center px-6 text-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/FloatingSchool/8.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="z-10 relative max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            How do you go to school <br /> when it’s underwater?
          </h1>
        </div>
      </section>

      {/* Inside Boat Classroom */}
      <section className="py-16 px-6 text-center bg-white dark:bg-black">
        <img
          src="/images/FloatingSchool/6.jpg"
          alt="Class inside floating school"
          className="mx-auto rounded-xl shadow-xl max-w-5xl"
        />
      </section>

      {/* Info Cards with full descriptions */}
      <section className="py-20 px-6 bg-white dark:bg-black">
        <h2 className="text-3xl font-bold text-center mb-12">
          Floating Schools in Bangladesh
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 text-center">
          {/* Students */}
          <div className="flex-1">
            <img
              src="/images/FloatingSchool/5.jpg"
              alt="The Students"
              className="mx-auto rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">The Students.</h3>
            <p className="text-sm leading-relaxed px-2">
              During the monsoon season, as the water levels rise,
              many schools are flooded and become inaccessible or unusable for students. In some cases,
              schools are closed for 4 months. This has a significant impact on the learning and
              engagement of their students.
            </p>
          </div>

          {/* Education */}
          <div className="flex-1">
            <img
              src="/images/FloatingSchool/4.jpg"
              alt="The Education"
              className="mx-auto rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">The Education.</h3>
            <p className="text-sm leading-relaxed px-2">
              The floating schools operated by <strong>Shidhulai Swanirvar Sangstha</strong> are repurposed traditional
              Bangladeshi wooden boats called noka. These boats replace their usual classrooms and
              also act as school buses and pick up the children from their villages.
              <br />
              <br />
              The teacher and resources – including a library and computers powered by solar panels –
              are ready for a day of learning on the water. This means that adverse weather conditions
              will not affect the education of thousands of children.
            </p>
          </div>

          {/* Impact */}
          <div className="flex-1">
            <img
              src="/images/FloatingSchool/3.jpg"
              alt="The Impact"
              className="mx-auto rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">The Impact.</h3>
            <p className="text-sm leading-relaxed px-2">
              This solution will also be crucial in overcoming the ongoing impact of climate change
              in the region as the UN Intergovernmental Panel on Climate Change estimates that more
              than one million Bangladeshis could be displaced or affected by rising sea levels by 2050.
            </p>
          </div>
        </div>
      </section>

      {/* Story Highlight */}
      <section className="py-16 px-6 bg-black text-white text-center">
        <img
          src="/images/FloatingSchool/2.jpg"
          alt="Mohammed Rezwan"
          className="mx-auto rounded-xl shadow-lg mb-6 max-w-3xl"
        />
        <p className="text-lg font-semibold max-w-4xl mx-auto">
          This is Mohammed Rezwan. He started the Floating Schools after seeing educational
          opportunities being eroded through school closures due to rising water levels.
        </p>
      </section>

      {/* Donation Impact Chart */}
      <section className="py-20 px-6 bg-white dark:bg-[#064e3b] text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">
           Impact of Donations 
        </h2>
        <img
          src="/images/FloatingSchool/1.jpg"
          alt="Impact of Donations"
          className="mx-auto rounded-xl max-w-4xl shadow-lg"
        />
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-50 dark:bg-[#e0fdfa] text-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-black mb-8">
          Would you like to learn more?
        </h2>
        <div className="space-y-4">
          <a
            href="/film"
            className="inline-block px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition text-lg"
          >
            🎥 Click here to access our Film
          </a>
          <br />
          <a
            href="/resources"
            className="inline-block px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition text-lg"
          >
            📚 Click here to access our Educational Resources
          </a>
        </div>
      </section>
    </div>
  );
};

export default FloatingSchoolsPage;
