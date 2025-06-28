import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import InteractiveMap from '@/components/ui/InteractiveMap';
import GlobalStatistics from '@/components/ui/GlobalStatistics';
import TestimonialsSection from '@/components/ui/TestimonialsSection';
import RecommendedResources from '@/components/ui/RecommendedResources';


const HomePage = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-y-auto scroll-smooth bg-gradient-to-b from-teal-50 to-white dark:from-[#0f172a] dark:to-[#1e293b] text-foreground">
      {/* === Hero Section === */}
      <section className="h-[calc(100vh-64px)] flex flex-col justify-center items-center text-center px-4 relative">


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="z-10 max-w-3xl"
        >
          <h1
            className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent ${
              theme === 'light'
                ? 'bg-gradient-to-r from-teal-600 to-cyan-700'
                : 'bg-gradient-to-r from-teal-300 to-cyan-400'
            }`}
          >
            Elemental AIM
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Explore a universe of K–12 syllabus content. Engaging, accessible, and impactful learning resources at your fingertips.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex w-full max-w-xl mx-auto items-center space-x-2 mb-8"
          >
            <div className="relative flex-grow">
              <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
              <Input
                type="search"
                placeholder="Search Resources..."
                className="pl-11 h-12 text-base bg-background/70 dark:bg-card/70 border-border focus:bg-background dark:focus:bg-card focus:ring-primary focus:border-primary shadow-sm rounded-lg"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="h-12 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
            >
              Search
            </Button>
          </motion.div>

          <motion.a
            href="#platform"
            className="text-base font-medium text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Find K–12 Syllabus Content
          </motion.a>
        </motion.div>

        {/* Scroll Down Arrow */}
        <motion.div
          onClick={() => document.getElementById("platform")?.scrollIntoView({ behavior: 'smooth' })}
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-3xl text-teal-600 dark:text-cyan-400 cursor-pointer"
        >
          ↓
        </motion.div>
      </section>

      {/* === Our Platform Section === */}
<section
  id="platform"
  className="min-h-screen flex flex-col items-center justify-center px-6 bg-background text-foreground pt-36 pb-20"
>
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-10">
      Our platform is for anyone wanting to teach or learn
    </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              title: "1. SEARCH & EXPLORE",
              desc: "Our curated Platform of learning experiences, resources and products from all over the world",
              img: "/images/8.JPG",
              link: "#"
            }, {
              title: "2. LEARN & DISCOVER",
              desc: "New and engaging ways to enrich teaching and learning. Designed for teachers, parents and students",
              img: "/images/6.jpg",
              link: "/resources"
            }, {
              title: "3. FIND & SUPPORT",
              desc: "Schools providing a basic education to students who have limited access to schools. 100% of our profits support grass-roots education, locally and internationally.",
              img: "/images/7.jpg",
              link: "/donate"
            }].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => item.link !== "#" && navigate(item.link)}
                className="bg-muted dark:bg-card p-4 rounded-xl shadow-lg cursor-pointer hover:ring-2 hover:ring-teal-400 transition-all duration-300"
              >
                <img src={item.img} alt={item.title} className="rounded-md mb-4 w-full h-40 object-cover" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
{/* === Map Section === */}
<section className="flex flex-col items-center justify-start text-center px-4 bg-gradient-to-b from-background to-muted/30 dark:to-muted/10 pt-12 pb-28">
  <h2 className="text-2xl font-semibold mb-12">Our Partner Schools</h2>
  <InteractiveMap />
</section>


      {/* === Video Section === */}
      <video
  controls
  autoPlay
  muted
  className="w-full max-w-4xl rounded-lg shadow-lg mx-auto"
>
  <source src="/videos/homepage.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>


      {/* === Global Statistics/other pages === */}
      <GlobalStatistics />

<TestimonialsSection />

<motion.section
  onClick={() => navigate('/impact')}
  whileHover={{ scale: 1.01 }}
  whileTap={{ scale: 0.99 }}
  className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-white to-teal-50 dark:from-gray-900 dark:to-gray-800 text-foreground overflow-hidden rounded-xl shadow-xl cursor-pointer group transition-all duration-300"
>
  {/* Optional background effect */}
  <div className="absolute inset-0 z-0 opacity-10 bg-[url('/images/global-impact.jpg')] bg-cover bg-center blur-sm" />

  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-4 group-hover:text-primary transition">
      🌍 Your Impact
    </h2>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
      Because of your clicks, shares, and support, we’ve already raised:
    </p>
    <div className="text-6xl font-extrabold text-primary tracking-wide mb-4">
      67%
    </div>
    <p className="text-sm text-muted-foreground">
      Click here to explore the full story behind our global impact.
    </p>
  </div>
</motion.section>


<RecommendedResources />

    {/* === FAQ + Ask Section === */}
<section className="py-16 px-4 md:px-8 bg-muted/10 dark:bg-muted/5 text-foreground">
  <div className="max-w-5xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-2">Ask a Question</h2>
    <p className="text-muted-foreground mb-6">Join our forum and share your thoughts.</p>
    <Button
      onClick={() => navigate('/ask')}
      className="bg-primary hover:bg-primary/90 text-white px-6 py-2 text-sm rounded-full shadow-md transition"
    >
      Ask a Question
    </Button>
  </div>

  <div className="max-w-3xl mx-auto text-left space-y-4">
    <h3 className="text-2xl font-semibold text-center mb-6">Frequently Asked Questions</h3>
    {[
      {
        question: "How much does it cost to search on your platform?",
        answer: "It's completely free for users to search and explore resources."
      },
      {
        question: "How do I search?",
        answer: "Use the search bar at the top of the home page to type in topics, keywords, or grade levels."
      },
      {
        question: "How am I assisting in providing access to a basic education?",
        answer: "Every interaction supports our mission—ad revenue and donations go directly to grassroots schools."
      },
      {
        question: "Can I make a donation?",
        answer: "Yes! You can visit the Donate page to support our cause. All donations are tax-deductible."
      },
      {
        question: "Where do the funds go?",
        answer: "100% of profits go to schools in need, especially in low-income and underserved communities."
      },
      {
        question: "Why is access to education still an issue?",
        answer: "Many children globally lack internet access, educational tools, or trained teachers. We're working to change that."
      },
    ].map((faq, idx) => (
      <details key={idx} className="bg-white dark:bg-card rounded-md shadow-sm p-4 cursor-pointer border border-border">
        <summary className="font-medium text-lg">{faq.question}</summary>
        <p className="text-sm text-muted-foreground mt-2">{faq.answer}</p>
      </details>
    ))}
  </div>
</section>

<footer className="bg-gradient-to-t from-teal-400 to-teal-200 dark:from-[#0f172a] dark:to-[#1e293b] text-white dark:text-white/90 py-10 px-6 shadow-inner border-t border-white/20 dark:border-white/10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-6">

    {/* Left logos (larger & dark-safe) */}
    <div className="flex justify-center md:justify-start gap-6">
      <img
        src="/images/uow.png"
        alt="UOW"
        className="h-20 w-auto bg-white rounded-lg p-2 shadow-md border border-white/40 dark:bg-white"
      />
      <img
        src="/images/nsw.png"
        alt="NSW"
        className="h-20 w-auto bg-white rounded-lg p-2 shadow-md border border-white/40 dark:bg-white"
      />
    </div>

    {/* Center text */}
    <div className="text-center text-sm md:text-base leading-relaxed max-w-lg mx-auto">
      <p>
        Elemental Aim (ABN: 32 618 759 390) is a registered charity through the ACNC and endorsed as a Deductible Gift Recipient. Donations over $2 are tax-deductible.
      </p>
      <div className="mt-3 space-x-6 underline underline-offset-4">
        <a href="/contact" className="hover:text-white">Contact Us</a>
        <a href="/privacy-policy" className="hover:text-white">Privacy & Policy</a>
      </div>
    </div>

    {/* Right logo (larger & protected in dark mode) */}
    <div className="flex justify-center md:justify-end">
      <img
        src="/images/3.png"
        alt="Charity Badge"
        className="h-24 w-auto bg-white rounded-full p-2 border border-white/40 shadow-lg dark:bg-white"
      />
    </div>
  </div>
</footer>




  </div>
  );
}

export default HomePage;