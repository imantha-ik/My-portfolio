
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import HeaderNav from '@/components/layout/HeaderNav';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, LogOut, User, Settings, BarChart, Heart, Search, Home, BookOpen, Users, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext'; // Import theme context


const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Get theme state and toggle function

  const getInitials = (name) => {
    if (!name) return '?';
    const names = name.split(' ');
    return names.map((n) => n[0]).join('').toUpperCase();
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { label: 'Our Platform', href: '#', icon: Home },
    { label: 'Platform Categories', href: '/resources', icon: BookOpen },
    { label: 'Our Impact', href: '#', icon: BarChart },
    { label: 'Community', href: '#', icon: Users },
    { label: 'Contact Us', href: '#', icon: Mail },
  ];

  const sheetVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { x: '-100%', transition: { ease: 'easeInOut' } }
  };

  const backdropVariants = {
     hidden: { opacity: 0 },
     visible: { opacity: 1 },
     exit: { opacity: 0 }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        {/* Left Side: Hamburger Menu & Logo */}
        <div className="flex items-center gap-4">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-foreground/80 hover:text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <AnimatePresence>
             {isSheetOpen && (
                <>
                  <motion.div
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed inset-0 bg-black/60 z-40 md:hidden"
                    onClick={() => setIsSheetOpen(false)}
                  />
                  <SheetContent side="left" asChild className="p-0 z-50 w-72 border-r border-border/60 bg-secondary">
                    <motion.div
                      variants={sheetVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="flex flex-col h-full"
                    >
                      <div className="flex items-center justify-between p-4 border-b border-border/40">
                        <Link to="/" className="flex items-center gap-2" onClick={() => setIsSheetOpen(false)}>
                          {/* Removed E badge */}
                          <span className="font-bold text-lg text-foreground">Elemental AIM</span>
                        </Link>
                        <Button variant="ghost" size="icon" onClick={() => setIsSheetOpen(false)}>
                          <X className="h-5 w-5" />
                        </Button>
                      </div>
                      <nav className="flex-grow p-4 space-y-2">
                        {navItems.map((item) => (
                          <Button
                            key={item.label}
                            variant="ghost"
                            className="w-full justify-start text-base font-normal text-muted-foreground hover:text-foreground hover:bg-muted"
                            asChild
                          >
                            <Link to={item.href} onClick={() => setIsSheetOpen(false)}>
                              <item.icon className="mr-3 h-5 w-5" />
                              {item.label}
                            </Link>
                          </Button>
                        ))}
                        {/* Add theme toggle inside sheet as well */}
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-base font-normal text-muted-foreground hover:text-foreground hover:bg-muted"
                          onClick={() => { toggleTheme(); setIsSheetOpen(false); }}
                        >
                          {theme === 'light' ? <Moon className="mr-3 h-5 w-5" /> : <Sun className="mr-3 h-5 w-5" />}
                          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                        </Button>
                      </nav>
                    </motion.div>
                  </SheetContent>
                </>
              )}
            </AnimatePresence>
          </Sheet>

          {/* Logo for Desktop */}
          <Link to="/" className="hidden md:flex items-center gap-2">
            {/* Removed E badge */}
            <span className="font-bold text-xl text-foreground">Elemental AIM</span>
          </Link>
        </div>

        {/* Center Navigation (Desktop) */}
<HeaderNav />





        {/* Right Side: Auth Buttons or User Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button - Moved to Profile page, but keep option here too */}
           <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-muted-foreground hover:text-primary hidden sm:inline-flex">
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              <span className="sr-only">Toggle Theme</span>
            </Button>

          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 focus:outline-none"
                >
                  <Avatar className="h-9 w-9 border-2 border-primary/50 hover:border-primary transition-colors">
                    <AvatarImage src={user.avatarUrl || ''} alt={user.name} />
                    <AvatarFallback className="bg-gradient-to-br from-primary/30 to-accent/30 text-primary font-semibold">
                      {getInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-card border-border/60 shadow-xl backdrop-blur-sm">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none text-foreground">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="cursor-pointer hover:bg-muted/50">
                  <Link to="/profile"><User className="mr-2 h-4 w-4" /> Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-muted/50">
                  <Settings className="mr-2 h-4 w-4" /> Settings
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer hover:bg-muted/50">
  <Link to="/contact">
    <Mail className="mr-2 h-4 w-4" /> Contact Us
  </Link>
</DropdownMenuItem>
<DropdownMenuItem asChild className="cursor-pointer hover:bg-muted/50">
  <Link to="/privacy-policy">
    <Shield className="mr-2 h-4 w-4" /> Privacy Policy
  </Link>
</DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive hover:!bg-destructive/20 hover:!text-destructive focus:bg-destructive/20 focus:text-destructive">
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground hover:bg-muted/50 px-3">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 sm:px-5 shadow-glow-sm hover:shadow-glow-md transition-all text-sm sm:text-sm h-9 sm:h-10">
                <Link to="/signup">Sign Up</Link>
              </Button>
               
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;