


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Bookmark, ExternalLink } from 'lucide-react';

const ProfileBookmarks = ({ bookmarks }) => {
  const [activeTab, setActiveTab] = useState('saved');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 250, damping: 20 }
    }
  };

  const filteredBookmarks = bookmarks.filter((_, i) => {
    if (activeTab === 'saved') return i % 3 === 0;
    if (activeTab === 'completed') return i % 3 === 1;
    if (activeTab === 'liked') return i % 3 === 2;
    return true;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="shadow-lg border border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2 text-primary">
            <Bookmark className="h-5 w-5" /> My Bookmarks
          </CardTitle>
          <CardDescription>Your saved learning resources.</CardDescription>
        </CardHeader>

        <CardContent>
          {/* Tabs */}
          <div className="flex gap-2 mb-4">
            {['saved', 'completed', 'liked'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-full text-sm capitalize font-medium ${
                  activeTab === tab
                    ? 'bg-primary text-white'
                    : 'bg-muted/20 text-muted-foreground hover:bg-muted'
                } transition-all`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Bookmark Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {filteredBookmarks.map((bookmark) => (
              <motion.div
                key={bookmark.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="flex flex-col sm:flex-row gap-4 p-4 border border-border/50 rounded-lg hover:shadow-md transition-all bg-muted/30 hover:border-primary/30"
              >
                <img
                  className="w-full sm:w-36 h-24 object-cover rounded-md flex-shrink-0 border border-border/30"
                  alt={bookmark.title}
                  src={bookmark.image}
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold mb-1 line-clamp-1 text-foreground">
                      {bookmark.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                      {bookmark.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < bookmark.rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-muted-foreground/30'
                          }`}
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">
                        ({bookmark.rating}.0)
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="text-xs h-8">
                      View <ExternalLink className="ml-1.5 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>

        <CardFooter>
          <Button variant="link" className="text-primary p-0 h-auto text-sm hover:text-primary/80">
            View All Bookmarks
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProfileBookmarks;








  