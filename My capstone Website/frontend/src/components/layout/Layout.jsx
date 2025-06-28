
import React from 'react';
import Header from '@/components/layout/Header';
import { useTheme } from '@/contexts/ThemeContext'; 

const Layout = ({ children }) => {
  const { theme } = useTheme(); 


  const lightGradient = 'bg-gradient-to-br from-blue-50 via-cyan-50 to-white';
  const darkGradient = 'bg-gradient-backdrop'; 

  return (

    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${theme === 'light' ? lightGradient : darkGradient}`}>
      <Header />

      <main className="flex-grow">
        {children}
      </main>
      {/* Footer could go here */}
       {/* <footer className="text-center py-4 text-muted-foreground text-sm border-t border-border/10 mt-12">
         © {new Date().getFullYear()} Elemental AIM. All rights reserved.
       </footer> */}
    </div>
  );
};

export default Layout;