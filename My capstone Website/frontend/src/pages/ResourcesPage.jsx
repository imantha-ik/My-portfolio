
    import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Input } from '@/components/ui/input';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
    import { Checkbox } from '@/components/ui/checkbox';
    import { Label } from '@/components/ui/label';
    import { Slider } from '@/components/ui/slider';
    import { ScrollArea } from '@/components/ui/scroll-area';
    import { Separator } from '@/components/ui/separator';
    import { Search, Star, Filter, ExternalLink, X as ClearIcon } from 'lucide-react';

    // Dummy Data
     const resources = [
      { id: 1, title: 'Advanced Calculus Techniques', subject: 'Mathematics', rating: 5, type: 'Tutorial', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60' },
      { id: 2, title: 'Intro to Python Programming', subject: 'Programming', rating: 4, type: 'Video Course', image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60' },
      { id: 3, title: 'Cellular Respiration Explained', subject: 'Biology', rating: 5, type: 'Article', image: 'public/images/four.png' },
      { id: 4, title: 'Fundamentals of Graphic Design', subject: 'Design', rating: 4, type: 'Workshop', image: 'public/images/five.jpg' },
       { id: 5, title: 'Linear Algebra Fundamentals', subject: 'Mathematics', rating: 4, type: 'Tutorial', image: 'public/images/six.jpeg' },
       { id: 6, title: 'Building Web Apps with React', subject: 'Programming', rating: 5, type: 'Video Course', image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60' },
       { id: 7, 'title': 'Photosynthesis vs. Respiration', subject: 'Biology', rating: 4, type: 'Article', image: 'public/images/seven.webp' },
       { id: 8, title: 'UI/UX Design Principles', subject: 'Design', rating: 5, type: 'Workshop', image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60' },
    ];

    const ResourcesPage = () => {
      const [searchTerm, setSearchTerm] = useState('');
      const [ratingFilter, setRatingFilter] = useState([0]);
      const [selectedSubjects, setSelectedSubjects] = useState([]);
      const [selectedTypes, setSelectedTypes] = useState([]);

      const filteredResources = resources.filter(resource => {
        const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRating = resource.rating >= ratingFilter[0];
        const matchesSubject = selectedSubjects.length === 0 || selectedSubjects.includes(resource.subject);
        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(resource.type);
        return matchesSearch && matchesRating && matchesSubject && matchesType;
      });

      const subjects = [...new Set(resources.map(r => r.subject))];
      const types = [...new Set(resources.map(r => r.type))];

      const handleSubjectChange = (subject) => {
        setSelectedSubjects(prev =>
          prev.includes(subject) ? prev.filter(s => s !== subject) : [...prev, subject]
        );
      };

      const handleTypeChange = (type) => {
        setSelectedTypes(prev =>
          prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
        );
      };

      const clearFilters = () => {
        setSearchTerm('');
        setRatingFilter([0]);
        setSelectedSubjects([]);
        setSelectedTypes([]);
      };

      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.05 }
        }
      };

      const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } }
      };


      return (
      
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-8"
        >
          {/* Filters Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full lg:w-1/4 xl:w-1/5"
          >
            <Card className="sticky top-24 shadow-lg border border-border/50 bg-card/80 backdrop-blur-sm p-1"> {/* Added padding for inner content */}
              <CardHeader className="pb-4"> {/* Reduced bottom padding */}
                <CardTitle className="flex items-center gap-2 text-lg font-semibold text-primary">
                  <Filter className="h-5 w-5"/> Filter Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 pt-2"> {/* Adjusted spacing and top padding */}
                <div>
                  <Label className="font-semibold text-sm mb-2 block">Minimum Rating</Label>
                   <div className="flex items-center gap-3">
                     <Slider
                       defaultValue={[0]}
                       max={5}
                       step={1}
                       value={ratingFilter}
                       onValueChange={setRatingFilter}
                       className="[&>span:first-child]:h-1.5 [&>span>span]:h-1.5 [&>a]:h-4 [&>a]:w-4 [&>a]:border-primary [&>a]:bg-background" // Adjusted handle style
                     />
                     <span className="text-sm font-medium w-16 text-right text-muted-foreground">{ratingFilter[0]}+ <Star className="h-4 w-4 inline-block text-yellow-400 -mt-1"/></span>
                  </div>
                </div>
                <Separator className="bg-border/30"/>

                <div>
                  <Label className="font-semibold text-sm mb-2 block">Subject</Label>
                  <ScrollArea className="h-48 mt-1 border border-border/30 rounded-md p-3 bg-muted/30 shadow-inner-soft">
                    <div className="space-y-2.5 pr-1">
                      {subjects.map(subject => (
                        <div key={subject} className="flex items-center space-x-2.5">
                          <Checkbox
                            id={`subject-${subject}`}
                            checked={selectedSubjects.includes(subject)}
                            onCheckedChange={() => handleSubjectChange(subject)}
                            className="border-primary/50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground transition-colors rounded" // Softer border, rounded checkbox
                          />
                          <Label htmlFor={`subject-${subject}`} className="text-sm font-normal cursor-pointer flex-1 truncate text-foreground/90">
                            {subject}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
                <Separator className="bg-border/30"/>

                <div>
                  <Label className="font-semibold text-sm mb-2 block">Resource Type</Label>
                   <ScrollArea className="h-36 mt-1 border border-border/30 rounded-md p-3 bg-muted/30 shadow-inner-soft">
                    <div className="space-y-2.5 pr-1">
                      {types.map(type => (
                        <div key={type} className="flex items-center space-x-2.5">
                          <Checkbox
                            id={`type-${type}`}
                            checked={selectedTypes.includes(type)}
                            onCheckedChange={() => handleTypeChange(type)}
                            className="border-primary/50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground transition-colors rounded"
                          />
                          <Label htmlFor={`type-${type}`} className="text-sm font-normal cursor-pointer flex-1 truncate text-foreground/90">
                            {type}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
                 <Separator className="bg-border/30"/>
                 <Button variant="outline" className="w-full hover:border-destructive hover:bg-destructive/10 hover:text-destructive transition-colors" onClick={clearFilters}>
                   <ClearIcon className="mr-2 h-4 w-4"/> Clear All Filters
                 </Button>
              </CardContent>
            </Card>
          </motion.aside>

          {/* Main Content Area */}
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-3/4 xl:w-4/5"
          >
           
            {/* Search Bar */}
<div className="mt-6 mb-8 flex items-center space-x-2 relative">

              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10"/>
              <Input
                type="search"
                placeholder="Search resources by title, subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow text-base pl-12 h-12 rounded-full shadow-inner-soft bg-card/70 focus:bg-card focus:ring-2 focus:ring-primary/50 transition-all border-border/50" // Enhanced style
              />
            </div>

             {/* Results Count */}
              <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.3 }}
                 className="mb-5 text-sm text-muted-foreground"
              >
                  Displaying {filteredResources.length} of {resources.length} resources.
              </motion.div>


            {/* Resource Grid */}
            {filteredResources.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {filteredResources.map((resource) => (
                  <motion.div
                    key={resource.id}
                    variants={itemVariants}
                    // whileHover handled by Card component now
                  >
                    <Card className="overflow-hidden h-full flex flex-col group bg-card/80 backdrop-blur-sm"> {/* Glass effect */}
                       <div className="relative overflow-hidden h-44"> {/* Slightly taller image */}
                          <img
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            alt={resource.title}
                            src={resource.image}
                           />
                            <div className="absolute top-2 right-2 bg-card/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium flex items-center gap-1 shadow border border-border/30">
                                {resource.rating}.0 <Star className="h-3 w-3 text-yellow-400 fill-yellow-400"/>
                            </div>
                            {/* Pulsing glow effect on hover */}
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
                       </div>
                      <CardContent className="p-4 flex-grow flex flex-col">
                        <div className="flex-grow">
                          <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-0.5 rounded font-medium mb-2 inline-block">{resource.subject}</span>
                          <h3 className="font-semibold text-base leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors text-foreground">{resource.title}</h3>
                          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">Type: {resource.type}</p>
                        </div>
                        <Button variant="outline" size="sm" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors h-9 border-primary/30 hover:border-primary">
                          View Resource <ExternalLink className="ml-2 h-3 w-3"/>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2}}
                  className="text-center py-20 text-muted-foreground bg-gradient-to-br from-muted/30 to-secondary/20 rounded-lg shadow-inner border border-border/30"
              >
                 <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: 'spring' }}>
                    <Search className="mx-auto h-16 w-16 mb-6 text-primary/50"/>
                 </motion.div>
                 <p className="font-semibold text-xl text-foreground/80">No resources found</p>
                 <p className="text-sm mt-2">Try adjusting your search terms or filters.</p>
                  <Button variant="link" className="mt-6 text-primary hover:text-primary/80" onClick={clearFilters}>Clear Filters</Button>
               </motion.div>
            )}
             {/* Add Pagination Component Here if needed */}
          </motion.main>
        </motion.div>
      );
    };

    export default ResourcesPage;
  