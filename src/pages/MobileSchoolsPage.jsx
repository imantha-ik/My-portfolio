import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MobileSchoolsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Elemental Aim – Mobile Schools";
  }, []);

  return (
    <div className="scroll-smooth bg-white dark:bg-black text-black dark:text-white">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/MobileSchool/7.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <h1 className="relative z-10 text-4xl md:text-5xl text-center font-bold max-w-4xl">
          What has 4 wheels, folds out like a telescope, and educates vulnerable children?
        </h1>
      </section>

      {/* Title Image */}
      <section className="py-12 bg-white dark:bg-black text-center">
        <img
          src="/images/MobileSchool/6.jpg"
          alt="Mobile Schools"
          className="mx-auto rounded-xl shadow-lg max-w-4xl"
        />
        <h2 className="text-2xl font-bold mt-6">Mobile Schools in Nicaragua</h2>
      </section>

      {/* Info Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-black text-center">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* The Students */}
          <div>
            <img src="/images/MobileSchool/5.jpg" className="rounded-xl mx-auto mb-4" alt="The Students" />
            <h3 className="text-xl font-bold mb-2">The Students.</h3>
            <p className="text-sm leading-relaxed text-left px-4 md:px-0">
              The Mobile Schools target three groups of students:
              <br /><br />
              1) Street-connected children and young people who are living on the street or at risk of becoming homeless.
              <br /><br />
              2) Working children who are not attending school.
              <br /><br />
              3) Students who are enrolled in a local school and attend the Mobile School sessions in addition to their daily classes.
            </p>
          </div>

          {/* The Education */}
          <div>
            <img src="/images/MobileSchool/4.jpg" className="rounded-xl mx-auto mb-4" alt="The Education" />
            <h3 className="text-xl font-bold mb-2">The Education.</h3>
            <p className="text-sm leading-relaxed text-left px-4 md:px-0">
              This amazing school on wheels gets driven – or walked – to different areas in Leon and Managua by staff of the <strong>Asociación Niños y Niñas del Fortín</strong>.
              <br /><br />
              Maths. Spanish. Wellbeing. Safety.
              <br /><br />
              Educational boards are attached to the school prior to heading to its destination. These boards are changed every two weeks depending on the subjects being taught and are colour-coded depending on their level of difficulty.
            </p>
          </div>

          {/* The Impact */}
          <div>
            <img src="/images/MobileSchool/3.jpg" className="rounded-xl mx-auto mb-4" alt="The Impact" />
            <h3 className="text-xl font-bold mb-2">The Impact.</h3>
            <p className="text-sm leading-relaxed text-left px-4 md:px-0">
              The Mobile Schools provide an opportunity for all local students to engage and enhance their learning and development.
              <br /><br />
              These schools are also simultaneously a soft access point for staff to provide family support and ongoing assistance to create a safe and stable environment for children.
            </p>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-20 px-6 bg-black text-white text-center">
        <img src="/images/MobileSchool/2.jpg" alt="Transformation" className="mx-auto rounded-xl mb-6 max-w-3xl" />
        <h3 className="text-2xl font-bold mb-2">The Transformation.</h3>
        <p className="max-w-3xl mx-auto">
          While the school is being transported, it is packed into itself. Hiding in the nooks and crannies of the box are the fold-out boards where the real magic happens.
        </p>
      </section>

      {/* Donation Chart */}
      <section className="py-20 px-6 bg-white dark:bg-[#064e3b] text-center">
        <h2 className="text-4xl font-extrabold mb-10 text-gray-900 dark:text-white tracking-wide">
           Impact of Donations 
        </h2>
        <img
          src="/images/MobileSchool/1.jpg"
          alt="Donation Impact"
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
            🎬 Click here to access our Film
          </a>
          <br />
          <a
            href="/resources"
            className="inline-block px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition text-lg"
          >
            📘 Click here to access our Educational Resources
          </a>
        </div>
      </section>
    </div>
  );
};

export default MobileSchoolsPage;


