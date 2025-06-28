import React from 'react';

const imagePaths = [
  '/images/aboutus/animation/1.jpg',
  '/images/aboutus/animation/2.jpg',
  '/images/aboutus/animation/3.jpg',
  '/images/aboutus/animation/4.jpg',
  '/images/aboutus/animation/5.jpeg',
  '/images/aboutus/animation/6.jpeg',
  '/images/aboutus/animation/7.jpg',
  '/images/aboutus/animation/8.jpg',
  '/images/aboutus/animation/9.jpeg',

  
];

const AboutGallery = () => {
  return (
    <div className="overflow-hidden bg-black py-6 group">
      <div className="whitespace-nowrap flex items-center gap-8 animate-slide group-hover:[animation-play-state:paused]">
        {[...imagePaths, ...imagePaths].map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Gallery"
            className="h-48 md:h-64 w-auto inline-block rounded-md object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default AboutGallery;
