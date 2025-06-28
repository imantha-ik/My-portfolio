import React from 'react';
import { Button } from '@/components/ui/button';
import { HeartHandshake, Coins, HelpingHand } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const DonatePage = () => {
  const { theme } = useTheme();

  const stripeLink = "https://buy.stripe.com/test_dR602Bd6ubqCf1S144";

  return (
    <div
      className={`min-h-screen px-4 py-20 transition-colors duration-300 ${
        theme === 'light'
          ? 'bg-gradient-to-br from-green-50 via-emerald-50 to-white'
          : 'bg-gradient-backdrop'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Support the Mission 💜
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Help us empower learners around the world. Every contribution fuels free, accessible education for all.
        </motion.p>

        {/* Donation Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              icon: <HeartHandshake className="h-8 w-8 text-pink-500" />,
              title: 'Supporter',
              amount: '$5',
              description: 'Covers server costs for a day.',
            },
            {
              icon: <Coins className="h-8 w-8 text-amber-500" />,
              title: 'Sponsor',
              amount: '$25',
              description: 'Helps us add new learning resources.',
            },
            {
              icon: <HelpingHand className="h-8 w-8 text-purple-500" />,
              title: 'Champion',
              amount: '$50+',
              description: 'Drives innovation & impact across schools.',
            },
          ].map((tier, i) => (
            <motion.div
              key={i}
              className="bg-white/70 dark:bg-white/10 backdrop-blur-md border border-border/30 shadow-xl rounded-xl p-6 flex flex-col items-center text-center h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              {tier.icon}
              <h3 className="text-xl font-semibold text-foreground mt-2">{tier.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>
              <div className="mt-auto w-full">
                <a
                  href={stripeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button className="w-full">{tier.amount} Donate</Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Amount */}
        <div className="mt-12 max-w-md mx-auto bg-white/70 dark:bg-white/10 backdrop-blur-md border border-border/30 shadow-lg p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-foreground mb-2">Enter Custom Amount</h2>
          <div className="flex items-center gap-3">
            <input
              type="number"
              placeholder="$10"
              className="flex-grow rounded-lg px-4 py-2 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button
              onClick={() => window.open(stripeLink, "_blank")}
            >
              Donate
            </Button>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-10 text-sm text-muted-foreground">
          Elemental AIM is a mission-driven initiative. All donations go toward building accessible education for everyone.
        </p>
      </div>
    </div>
  );
};

export default DonatePage;








