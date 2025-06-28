import React from 'react';

const TrainPlatformSchoolsPage = () => {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black text-gray-800 dark:text-white scroll-smooth">
      {/* Hero Section */}
      <section
        className="w-full h-screen bg-cover bg-center flex items-center justify-center px-6"
        style={{
          backgroundImage: `url('/images/TrainPlatform/7.jpg')`,
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center bg-black/60 px-6 py-4 rounded-xl">
          What do you get when you cross a train station and a school?
        </h1>
      </section>

      {/* Group Photo */}
      <section className="py-12 px-6 bg-white dark:bg-black text-center">
        <img
          src="/images/TrainPlatform/5.jpg"
          alt="Train Platform School Group"
          className="mx-auto rounded-lg shadow-lg max-w-5xl"
        />
      </section>

      {/* Education Breakdown Section */}
      <section className="py-20 bg-white dark:bg-black text-center">
        <h2 className="text-3xl font-bold mb-10 text-teal-600 dark:text-teal-400">
          Train Platform Schools in India
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Students */}
          <div>
            <img src="/images/TrainPlatform/4.jpg" alt="Students" className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2"> The Students.</h3>
            <p className="text-sm leading-relaxed text-left px-2 md:px-0">
              There are millions of children working throughout India, earning money for their families or
              living on the street and trains trying to support themselves.
              <br /><br />
              Sometimes, they work for 12 hours a day, collecting plastics to sell, sweeping the train, or
              selling food to passengers.
            </p>
          </div>

          {/* Education */}
          <div>
            <img src="/images/TrainPlatform/3.jpg" alt="Education" className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2"> The Education.</h3>
            <p className="text-sm leading-relaxed text-left px-2 md:px-0">
              Train Platform Schools are located on, underneath or nearby train station platforms throughout
              Bhubaneswar in the state of Orissa in India. The Train Platform Schools were created and are operated by staff of the <strong>Ruchika Social Services Organisation</strong>.
              <br /><br />
              The school staff invite children working on the trains, at the train stations and also local children to join in fun games, singing and dancing. This then leads to also providing basic literacy and maths tuition, healthcare, food and counselling.
            </p>
          </div>

          {/* Impact */}
          <div>
            <img src="/images/TrainPlatform/2.jpg" alt="Impact" className="rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2"> The Impact.</h3>
            <p className="text-sm leading-relaxed text-left px-2 md:px-0">
              Through receiving a basic education children have a greater chance of escaping the cycle of
              intergenerational poverty.
              <br /><br />
              The Train Platform Schools provide this opportunity for children who may otherwise not have access
              to an education.
            </p>
          </div>
        </div>
      </section>

      {/* Biju’s Story */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <img
            src="/images/TrainPlatform/1.jpg"
            alt="Biju Story"
            className="rounded-xl mx-auto mb-6"
          />
          <p className="text-lg leading-relaxed">
            This is Biju. He was 4 when his father died and he started working. He lived on a train station
            with his family collecting and selling plastics. The Train Platform School changed his life and his future.
          </p>
        </div>
      </section>

      {/* Donation Impact Chart */}
      <section className="py-20 px-6 bg-white dark:bg-[#064e3b] text-center">
        <h2 className="text-4xl font-extrabold mb-10 text-gray-900 dark:text-white tracking-wide">
           Impact of Donations 
        </h2>
        <img
          src="/images/TrainPlatform/6.jpg"
          alt="Impact of Donations"
          className="mx-auto rounded-xl max-w-4xl shadow-lg"
        />
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-teal-50 dark:bg-[#0d2e2e] text-center">
        <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
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

export default TrainPlatformSchoolsPage;

