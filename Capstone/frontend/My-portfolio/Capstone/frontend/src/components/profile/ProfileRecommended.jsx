
    import React from 'react';
    import { useNavigate } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { ExternalLink, Zap } from 'lucide-react';

    const ProfileRecommended = ({ recommended }) => {
      const navigate = useNavigate();

       const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.4,
          }
        }
      };

      const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 20 } }
      };

      return (
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
         >
            <Card className="bg-gradient-to-br from-secondary/50 via-muted/30 to-secondary/50 shadow-lg border border-border/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-primary"><Zap className="h-5 w-5"/>Recommended For You</CardTitle>
                <CardDescription>Personalized learning suggestions based on your profile.</CardDescription>
              </CardHeader>
              <CardContent>
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {recommended.slice(0, 2).map((rec) => (
                    <motion.div key={rec.id} variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                      <Card className="overflow-hidden hover:shadow-xl transition-shadow bg-card h-full flex flex-col group border border-border/50 hover:border-primary/50">
                        <CardContent className="p-4 flex-grow flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-0.5 rounded font-medium">{rec.subject}</span>
                              <span className="text-xs text-muted-foreground">{rec.grade}</span>
                            </div>
                            <h4 className="font-semibold mb-1 text-base line-clamp-1 group-hover:text-primary transition-colors text-foreground">{rec.title}</h4>
                            <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{rec.summary}</p>
                          </div>
                          <Button variant="outline" size="sm" className="w-full mt-auto text-xs h-8 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            Explore Resource <ExternalLink className="ml-2 h-3 w-3"/>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
              <CardFooter className="justify-center pt-4">
                <Button
                  variant="default"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-sm hover:shadow-glow-md transition-all transform hover:-translate-y-0.5"
                  onClick={() => navigate('/resources')}
                >
                  Discover More Resources
                </Button>
                <Button
  variant="outline"
  className="ml-4 text-teal-600 border-teal-500 hover:bg-muted/30 transition-all"
  onClick={() => navigate('/ask')}
>
  Ask a Question
</Button>

              </CardFooter>
            </Card>
         </motion.div>
      );
    };

    export default ProfileRecommended;
  