
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
    import { ScrollArea } from '@/components/ui/scroll-area';
    import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
    import { Button } from '@/components/ui/button';
    import { User as UserIcon, MessageSquare } from 'lucide-react';

    const ProfileConnections = ({ connections }) => {

      const getInitials = (name) => {
        if (!name) return 'U';
        const names = name.split(' ');
        return names.map((n) => n[0]).join('').toUpperCase();
      };

      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.08, // Faster stagger
            delayChildren: 0.2,
          }
        }
      };

      const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 250, damping: 20 } }
      };

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-1"
        >
          <Card className="h-full shadow-lg border border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-primary"><UserIcon className="h-5 w-5"/>Connections</CardTitle>
              <CardDescription>People you're connected with.</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-80 pr-1"> {/* Adjusted padding */}
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-3 pr-3">
                  {connections.map((conn) => (
                    <motion.div
                      key={conn.id}
                      variants={itemVariants}
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/50 transition-colors duration-200 cursor-pointer"
                    >
                      <Avatar className="h-10 w-10 border-2 border-primary/30">
                        <AvatarImage src={conn.avatar} alt={conn.name} />
                        <AvatarFallback className="bg-secondary text-sm">{getInitials(conn.name)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 overflow-hidden">
                        <p className="font-medium text-sm truncate text-foreground">{conn.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{conn.role}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="ml-auto text-primary/70 hover:text-primary hover:bg-primary/10 h-8 w-8 flex-shrink-0">
                         <MessageSquare className="h-4 w-4"/>
                      </Button>
                    </motion.div>
                  ))}
                </motion.div>
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="text-primary p-0 h-auto text-sm hover:text-primary/80">View All Connections</Button>
            </CardFooter>
          </Card>
        </motion.div>
      );
    };

    export default ProfileConnections;
  