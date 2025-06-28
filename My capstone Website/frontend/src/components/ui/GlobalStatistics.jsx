import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const StatCard = ({ title, value, subtitle, isMoney }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Set to false so it animates every time it's in view
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white/80 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-xl p-6 shadow-xl w-full max-w-xs text-center"
    >
      <p className="text-base font-semibold text-muted-foreground mb-2">{title}</p>
      <div className="text-4xl font-bold text-primary mb-2">
        {inView && (
          <CountUp
            end={value}
            duration={2.5}
            separator=","
            prefix={isMoney ? '$' : ''}
            suffix={isMoney ? '' : '%'}
          />
        )}
      </div>
      {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
};

const GlobalStatistics = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-slate-100 dark:from-[#0f172a] dark:to-[#1e293b] py-24 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-12 text-foreground"
      >
        Global Statistics
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left Stat */}
        <StatCard
          title="1 in 6 children don't have access to formal education"
          value={17}
          subtitle="No of children currently out of school globally"
        />

        {/* Middle Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <img
            src="/images/10.png"
            alt="SDG Goal 4"
            className="w-32 md:w-40 h-auto rounded-full shadow-md mb-2"
          />
          <span className="text-sm text-muted-foreground">SDG Goal 4</span>
        </motion.div>

        {/* Right Stat */}
        <StatCard
          title="Through your clicks on our platform, we’ve raised"
          value={67}
          subtitle="Funds Raised to support education"
        />
      </div>

      {/* Total Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-10 text-lg font-semibold bg-white dark:bg-muted border dark:border-white/10 px-6 py-3 rounded-md shadow-md"
      >
        Total Raised:{' '}
        <span className="text-primary font-bold">
          <CountUp end={1000000} duration={3} separator="," prefix="$" />
        </span>
      </motion.div>
    </section>
  );
};

export default GlobalStatistics;
