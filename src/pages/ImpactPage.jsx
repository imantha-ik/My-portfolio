import React from 'react';
import { motion } from 'framer-motion';

const ImpactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-teal-50 dark:from-gray-900 dark:to-gray-800 text-foreground px-6 pt-6 pb-16 flex items-center justify-center">

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Left Section: Text Content */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🌍 Your Clicks Matter
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Each time you clicked a resource, supported a school, or explored content — you made an impact.
          </p>
          <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
            $1,000,000 Raised
          </h3>
          <p className="text-muted-foreground text-lg">
            Supporting over <span className="font-semibold">50,000 students</span> in <span className="font-semibold">12 countries</span>.
          </p>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 text-center md:text-left">
            <div>
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Students Helped</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">3</p>
              <p className="text-sm text-muted-foreground">Countries Reached</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">370k</p>
              <p className="text-sm text-muted-foreground">Donations</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">100+</p>
              <p className="text-sm text-muted-foreground">Communities</p>
            </div>
          </div>
        </motion.div>

        {/* Right Section: Video */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-xl shadow-lg object-cover"
          >
            <source src="/videos/Nica boys waving.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </div>
  );
};

export default ImpactPage;


