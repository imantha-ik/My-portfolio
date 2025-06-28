import React from 'react';
import { BookOpen, Users, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetInvolvedPage = () => {
  return (
    <div className="text-foreground bg-background dark:bg-background">
      {/* Hero Section with Background Image */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/images/1.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <h1 className="relative z-10 text-white text-3xl md:text-5xl font-bold text-center">
          Would you like to get involved?
        </h1>
      </section>

      {/* Grid Section */}
      <section className="py-16 px-6 bg-white dark:bg-muted text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* TEACH */}
          <div className="space-y-4">
            <BookOpen className="mx-auto w-10 h-10 text-teal-600 dark:text-teal-400" />
            <h3 className="text-xl font-semibold text-foreground dark:text-white">Teach</h3>
            <p className="text-muted-foreground dark:text-gray-300">
              Are you a teacher who would like to implement our unit of work in your school?
            </p>
          </div>

          {/* VOLUNTEER */}
          <div className="space-y-4">
            <Users className="mx-auto w-10 h-10 text-teal-600 dark:text-teal-400" />
            <h3 className="text-xl font-semibold text-foreground dark:text-white">Volunteer</h3>
            <p className="text-muted-foreground dark:text-gray-300">
              Would you like to join our team or explore our educational resources?
            </p>
            <Link
              to="/contact"
              className="inline-block mt-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-sm rounded-full"
            >
              Contact Us
            </Link>
          </div>

          {/* TEACHER NETWORK */}
          <div className="space-y-4">
            <Share2 className="mx-auto w-10 h-10 text-teal-600 dark:text-teal-400" />
            <h3 className="text-xl font-semibold text-foreground dark:text-white">Teacher Network</h3>
            <p className="text-muted-foreground dark:text-gray-300">
              Would you like to become part of our advisory network?
            </p>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default GetInvolvedPage;
;
