import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'Daniel Rolfe',
    role: 'Year 3 Teacher, Hayes Park Primary School, NSW',
    text: 'This platform has saved me so much time! I didn’t even know some of these resources existed... and it\'s free!',
    stars: 5,
    avatar: '/images/avataaars.png',
  },
  {
    name: 'Kate McCormack',
    role: 'Mum of Leo and Sam',
    text: 'Using the Elemental platform has saved me countless times when helping my boys do their homework.',
    stars: 5,
    avatar: '/images/avataaars (1).png',
  },
  {
    name: 'Ely Peters',
    role: 'Year 9 Student, NSW',
    text: 'I like supporting other kids to go to school just by doing my assignments. It’s meaningful.',
    stars: 4,
    avatar: '/images/avataaars (2).png',
  },
  {
    name: 'Sarah Lopez',
    role: 'Teacher, VIC',
    text: 'Simple, powerful, and student-centered. Elemental AIM is a must-have.',
    stars: 5,
    avatar: '/images/avataaars (3).png',
  },
  {
    name: 'Mark Johnson',
    role: 'Parent of 3, QLD',
    text: 'A brilliant tool for homeschoolers. It makes lesson planning effortless.',
    stars: 4,
    avatar: '/images/avataaars (4).png',
  },
  {
    name: 'Linda Wong',
    role: 'High School Teacher, WA',
    text: 'The variety of content and ease of access makes this a game changer.',
    stars: 5,
    avatar: '/images/avataaars (5).png',
  },
];

const TestimonialCard = ({ t }) => (
  <div className="bg-white dark:bg-muted border border-gray-200 dark:border-white/10 rounded-xl shadow-md p-6 w-80 mx-4 text-left shrink-0">
    <img
      src={t.avatar}
      alt={t.name}
      className="w-16 h-16 object-cover mx-auto rounded-full border mb-4"
    />
    <div className="flex justify-center mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${
            i < t.stars ? 'text-teal-500' : 'text-gray-300 dark:text-gray-600'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.43 8.719c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-sm text-muted-foreground mb-4">{t.text}</p>
    <div className="font-semibold text-foreground text-center">{t.name}</div>
    <div className="text-xs text-muted-foreground text-center">{t.role}</div>
  </div>
);

const TestimonialsSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: ['0%', '-50%'],
        transition: {
          repeat: Infinity,
          duration: 20,
          ease: 'linear',
        },
      });
    }
  }, [controls, inView]);

  // Duplicate the array for seamless scroll
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-slate-100 dark:from-[#0f172a] dark:to-[#1e293b]">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-foreground">Testimonials</h2>

      <div className="overflow-hidden" ref={ref}>
        <motion.div
          className="flex w-max"
          animate={controls}
          initial={{ x: '0%' }}
        >
          {loopedTestimonials.map((t, idx) => (
            <TestimonialCard key={idx} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
