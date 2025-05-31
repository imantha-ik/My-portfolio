import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import resources from '@/data/resources'; // 🔥 Import shared resource array

const RecommendedResources = () => {
  const navigate = useNavigate();

  const topResources = [...resources]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3); // top 3 rated

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-100 dark:from-[#0f172a] dark:to-[#1e293b] text-foreground">
      <h2 className="text-3xl font-bold text-center mb-10">Recommended Resources</h2>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-6xl mx-auto">
        {topResources.map((resource, index) => (
          <motion.div
            key={resource.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="w-full md:w-1/3"
          >
            <Card className="flex overflow-hidden bg-white dark:bg-muted rounded-xl shadow-lg border dark:border-white/10">
              <img src={resource.image} alt={resource.title} className="w-32 h-auto object-cover" />
              <CardContent className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">Type: {resource.type}</p>
                  <div className="flex text-teal-500">
                    {[...Array(resource.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-teal-500" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button
          onClick={() => navigate('/resources')}
          className="px-6 py-2 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90"
        >
          See All Resources
        </Button>
      </div>
    </section>
  );
};

export default RecommendedResources;

