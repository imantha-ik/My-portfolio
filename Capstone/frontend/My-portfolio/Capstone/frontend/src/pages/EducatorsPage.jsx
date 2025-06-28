import React from 'react';

const EducatorsPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#e6f5f0] dark:from-[#0f172a] dark:to-[#1e293b] text-foreground">
      {/* Hero Banner */}
      <section className="relative w-full h-[90vh]">
        <img src="/images/educators/2.jpg" alt="Hero" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6 text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">How can your local school have a positive global impact?</h1>
            <p className="text-white text-lg mt-6 max-w-2xl mx-auto">
              We want to enable local schools and students to have a global impact by directly supporting innovative schools that provide access to basic education.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-step Infographic */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">How it Works</h2>
        <img src="/images/educators/1.png" alt="How it Works" className="mx-auto max-w-4xl w-full rounded-xl shadow-xl" />
      </section>

      {/* News Section */}

      <section className="py-16 px-4 bg-background">
  <div className="max-w-6xl mx-auto text-center mb-10">
    <h2 className="text-3xl font-bold mb-4">Real School Impact</h2>
    <p className="text-muted-foreground">See how our platform empowers students and communities globally.</p>
  </div>

  <div className="flex flex-col md:flex-row justify-center items-center gap-6">
    
    {/* Left Image */}
    <div className="w-full md:w-1/3">
      <img
        src="/images/educators/5.jpg"
        alt="Students raising hands"
        className="rounded-xl shadow-lg border border-border/40 object-cover w-full h-auto"
      />
    </div>

    {/* Center News Image - Larger */}
    <div className="w-full md:w-2/3">
      <img
        src="/images/educators/3.png"
        alt="Fundraising Article"
        className="rounded-xl shadow-xl border border-border/40 object-cover w-full h-auto"
      />
    </div>

    {/* Right Image */}
    <div className="w-full md:w-1/3">
      <img
        src="/images/educators/4.jpg"
        alt="Presentation"
        className="rounded-xl shadow-lg border border-border/40 object-cover w-full h-auto"
      />
    </div>

  </div>
</section>


      {/* Package Info */}
      <section className="py-20 px-4 bg-background dark:bg-muted">
        <h2 className="text-3xl font-bold text-center mb-10">Our Educational Resource Package</h2>
        <img src="/images/educators/6.png" alt="Resource Info" className="mx-auto max-w-xl w-full rounded-xl shadow-lg" />
      </section>

      {/* Unit of Work Sample Image Section */}
<section className="py-20 px-4 text-center bg-gradient-to-b from-white to-teal-50 dark:from-[#0f172a] dark:to-[#1e293b] transition-colors">
  <h2 className="text-3xl font-bold mb-4">Unit of Work Sample.</h2>
  <p className="text-muted-foreground mb-8">
    
  </p>
  <div className="max-w-5xl mx-auto">
    <img
      src="/images/educators/7.png" // ⬅️ Replace with actual path
      alt="Unit of Work Sample"
      className="mx-auto rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
    />
  </div>
</section>


      {/* Slides Preview */}
<section className="py-20 px-4 text-center">
  <h2 className="text-3xl font-bold mb-6">Example of Accompanying Teacher Slides</h2>
  <p className="text-muted-foreground mb-10">
    These offer a comprehensive guide for each lesson of the unit.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    <img src="/images/educators/111.jpg" alt="Slide 1" className="rounded-lg shadow-lg" />
    <img src="/images/educators/222.png" alt="Slide 2" className="rounded-lg shadow-lg" />
    <img src="/images/educators/333.png" alt="Slide 3" className="rounded-lg shadow-lg" />
    <img src="/images/educators/444.png" alt="Slide 4" className="rounded-lg shadow-lg" />
    <img src="/images/educators/555.png" alt="Slide 5" className="rounded-lg shadow-lg" />
    <img src="/images/educators/666.png" alt="Slide 6" className="rounded-lg shadow-lg" />
  </div>
</section>\


{/* FAQ Section */}
<section className="bg-gradient-to-b from-white to-teal-50 dark:from-[#0f172a] dark:to-[#1e293b] text-foreground py-20 px-6">
  <div className="max-w-5xl mx-auto grid gap-10">
    {[
      {
        question: "Where do the funds go?",
        answer: "100% of donations raised through our organisation are divided between our three partner schools featured in the documentary."
      },
      {
        question: "How do I access the documentary and unit of work?",
        answer: (
          <>
            To access the documentary, click{" "}
            <a href="#" className="text-teal-600 underline hover:text-teal-800 dark:text-cyan-400 dark:hover:text-cyan-300">here</a>.<br />
            You’ll need to register your school through the form above. Once submitted, you’ll be redirected to the document immediately.
          </>
        )
      },
      {
        question: "How much does it cost?",
        answer: (
          <>
            Nothing.<br /><br />
            We encourage schools undertaking the unit to donate a minimum of 50% of funds raised to Elemental Aim and use the remaining 50% to implement the innovative projects in their own school or community.
          </>
        )
      },
      {
        question: "What does the unit include?",
        answer: (
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Links to the documentary, Thinking Futures</li>
            <li>Individual lesson plans and the resources required for each lesson</li>
            <li>Ongoing support from an Elemental Aim representative to guide you through the unit</li>
          </ul>
        )
      },
      {
        question: "Why is access to education still an issue?",
        answer: (
          <>
            Education is a basic human right, but many children still lack access. We aim to support this inequity by helping schools and local organizations make long-term impact in their communities.
          </>
        )
      },
      {
        question: "Who is it for?",
        answer: "Australian schools, primarily Stage 3 (Years 5 & 6). Stage 4 (Years 7 & 8) resources are in development. Contact us for more info."
      },
      {
        question: "How long is it?",
        answer: "2 hours a week for 9 weeks."
      },
      {
        question: "What’s the focus?",
        answer: (
          <>
            Our model is unique as it focuses on two levels of social impact:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Supporting innovative schools in Nicaragua, India, and Bangladesh</li>
              <li>Enabling Australian students to drive real-world change through local engagement</li>
            </ul>
          </>
        )
      },
    ].map((faq, idx) => (
      <div key={idx}>
        <h4 className="font-bold text-lg mb-2">{faq.question}</h4>
        <div className="text-sm text-muted-foreground">{faq.answer}</div>
      </div>
    ))}
  </div>
</section>



      {/* Final Step Form Section */}
<section className="py-24 px-6 bg-gradient-to-b from-teal-50 to-white dark:from-[#0f172a] dark:to-[#1e293b] text-foreground transition-colors">
  <div className="max-w-4xl mx-auto text-center mb-12">
    <h3 className="text-3xl font-bold mb-6">What to do next.</h3>
    <img
      src="/images/educators/6.jpg" 
      className="mx-auto mb-6 w-64 h-64 rounded-full object-cover shadow-lg border-4 border-white dark:border-muted"
    />
    <div className="text-sm md:text-base space-y-2 text-muted-foreground max-w-2xl mx-auto">
      <p><strong>Step 1:</strong> Register your school through the contact form below.</p>
      <p><strong>Step 2:</strong> Once you press ‘submit’ you will be redirected to the Unit of Work.</p>
      <p><strong>Step 3:</strong> Please get in touch with us <a href="/contact" className="underline text-primary">here</a> if you need any assistance in this process.</p>
    </div>
  </div>

  {/* Form Below */}
  <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
    <div className="text-left">
      <h4 className="text-xl font-semibold mb-4">To register your school and access the unit of work, please complete this form.</h4>
    </div>

    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert('✅ Submitted successfully!');
      }}
      className="space-y-4"
    >
      <input
        required
        type="text"
        placeholder="Full Name"
        className="w-full px-4 py-2 rounded bg-white/90 text-black dark:bg-white/80 dark:text-black focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
      <input
        required
        type="text"
        placeholder="School Name"
        className="w-full px-4 py-2 rounded bg-white/90 text-black dark:bg-white/80 dark:text-black focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
      <input
        required
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 rounded bg-white/90 text-black dark:bg-white/80 dark:text-black focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
      <textarea
        rows="4"
        placeholder="Message"
        className="w-full px-4 py-2 rounded bg-white/90 text-black dark:bg-white/80 dark:text-black focus:outline-none focus:ring-2 focus:ring-teal-400"
      ></textarea>
      <button
        type="submit"
        className="px-6 py-2 bg-teal-600 text-white font-semibold rounded shadow hover:bg-teal-700 transition-transform duration-150 active:scale-95"
      >
        Submit
      </button>
    </form>
  </div>
</section>


    </div>
  );
};

export default EducatorsPage;
