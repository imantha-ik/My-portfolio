import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileConnections from '@/components/profile/ProfileConnections';
import ProfileBookmarks from '@/components/profile/ProfileBookmarks';
import ProfileRecommended from '@/components/profile/ProfileRecommended';
import { Heart, MessageCircle, BookOpen, Activity } from 'lucide-react';

const dummyData = {
  connections: [
    { id: 1, name: 'Jimmy Neutron', role: 'Parent', avatar: 'https://i.pravatar.cc/150?u=jimmy' },
    { id: 2, name: 'Ali Wong', role: 'Student', avatar: 'https://i.pravatar.cc/150?u=aliw' },
    { id: 3, name: 'Betty Boop', role: 'Teacher', avatar: 'https://i.pravatar.cc/150?u=bettyb' },
    { id: 4, name: 'Ely Smith', role: 'Student', avatar: 'https://i.pravatar.cc/150?u=elys' },
    { id: 5, name: 'Jacob Marley', role: 'Teacher', avatar: 'https://i.pravatar.cc/150?u=jacobm' },
  ],
  bookmarks: [
    {
      id: 1,
      title: 'Advanced Calculus Techniques',
      description: 'Explore integration by parts and series convergence.',
      rating: 5.0,
      status: 'saved',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 2,
      title: 'Linear Algebra Fundamentals',
      description: 'Understand vector spaces, matrices, and eigenvalues.',
      rating: 4.0,
      status: 'completed',
      image: '/images/three.jpeg'
    },
    {
      id: 3,
      title: 'Cellular Respiration Explained',
      description: 'Deep dive into glycolysis, Krebs cycle, and oxidative phosphorylation.',
      rating: 4.8,
      status: 'liked',
      image: '/images/four.png'
    },
  ],
  recommended: [
    { id: 1, title: 'Intro to Quantum Physics', summary: 'Uncover the strange world of quantum mechanics.', grade: '12', subject: 'Physics' },
    { id: 2, title: 'Organic Chemistry Basics', summary: 'Learn about carbon compounds and reactions.', grade: '11', subject: 'Chemistry' },
    { id: 3, title: 'World History: The Renaissance', summary: 'Explore the rebirth of art, science, and culture.', grade: '10', subject: 'History' },
  ],
  activities: [
    { id: 1, icon: BookOpen, name: 'Jimmy Neutron', action: 'bookmarked', target: 'Calculus Techniques', time: '2h ago' },
    { id: 2, icon: MessageCircle, name: 'Betty Boop', action: 'asked a question', target: '', time: '5h ago' },
    { id: 3, icon: Heart, name: 'Ali Wong', action: 'liked', target: 'Intro to Quantum Physics', time: '1d ago' },
  ]
};

const ProfilePage = () => {
  const { user, updateUser } = useAuth();

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const transition = { type: 'spring', stiffness: 50, duration: 0.5 };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={transition}
      className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white dark:bg-gradient-backdrop text-foreground transition-colors duration-300"
    >
      <ProfileHeader user={user} updateUser={updateUser} />

      <div className="container mx-auto py-8 md:py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side: Connections + Recent Activity */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div custom={0} initial="hidden" animate="visible" variants={sectionVariants}>
              <ProfileConnections connections={dummyData.connections} />
            </motion.div>

            <motion.div custom={1} initial="hidden" animate="visible" variants={sectionVariants}>
            <div className="bg-card/80 backdrop-blur-md border border-border/30 shadow-lg rounded-xl overflow-hidden">

                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4 text-primary flex items-center">
                    <Activity className="w-6 h-6 mr-2" />
                    Recent Activity
                  </h2>
                  <ul className="space-y-4">
                    {dummyData.activities.map((activity) => (
                      <li key={activity.id} className="flex items-start space-x-3 p-3 rounded-md hover:bg-muted/30 transition-colors duration-200">
                        <div className="flex-shrink-0 mt-1 text-primary">
                          <activity.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-foreground">
                            <span className="font-medium">{activity.name}</span> {activity.action}{' '}
                            {activity.target && (
                              <span className="font-medium text-primary hover:underline cursor-pointer">
                                {activity.target}
                              </span>
                            )}
                          </p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side: Bookmarks + Recommended */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div custom={2} initial="hidden" animate="visible" variants={sectionVariants}>
              <ProfileBookmarks bookmarks={dummyData.bookmarks} />
            </motion.div>
            <motion.div custom={3} initial="hidden" animate="visible" variants={sectionVariants}>
              <ProfileRecommended recommended={dummyData.recommended} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfilePage;

  