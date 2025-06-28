import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const Dropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const openMenu = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 120); 
  };

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      <Button
        variant="ghost"
        className="text-muted-foreground hover:text-foreground px-3"
      >
        {label}
      </Button>

      {isOpen && (
        <div className="absolute left-0 mt-2 z-50 w-56 rounded-lg border border-border/20 shadow-xl backdrop-blur-sm bg-gradient-to-br from-green-50 via-emerald-50 to-white dark:from-muted dark:to-muted/70 px-3 py-2 transition-opacity duration-200">
          {items.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              className="block px-2 py-1 text-sm rounded-md hover:bg-emerald-100 dark:hover:bg-muted/60 transition"
            >
              {item.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const HeaderNav = () => {
  return (
    <nav className="hidden md:flex items-center gap-1 relative z-50">
      <Dropdown
        label="How It Works"
        items={[
          { href: '/how-it-works/educators', text: 'For Educators' },
          { href: '/how-it-works/individuals', text: 'For Individuals' },
        ]}
      />
      <Dropdown
        label="Film & Resources"
        items={[
          { href: '/film', text: 'Film' },
          { href: '/resources', text: 'Resources Page' },
        ]}
      />
      <Dropdown
  label="Partner Schools"
  items={[
    { href: '/partner-schools/train', text: 'Train Platform Schools' },
    { href: '/partner-schools/mobile', text: 'Mobile Schools' },
    { href: '/partner-schools/floating', text: 'Floating Schools' },
  ]}

      />
      <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground hover:bg-muted/50 px-3">
        <Link to="/get-involved">Get Involved</Link>
      </Button>
      <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground hover:bg-muted/50 px-3">
        <Link to="/about">About Us</Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="sm"
        className="ml-2 border-accent/50 text-accent hover:bg-accent/10 hover:text-accent/90 rounded-full px-3"
      >
        <Link to="/donate">
          <Heart className="mr-1.5 h-4 w-4 fill-current" />
          Donate
        </Link>
      </Button>
    </nav>
  );
};

export default HeaderNav;



