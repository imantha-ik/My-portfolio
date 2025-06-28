
    import React, { createContext, useContext, useEffect, useState } from 'react';

    const ThemeContext = createContext({
      theme: 'dark',
      toggleTheme: () => {},
    });

    export const useTheme = () => useContext(ThemeContext);

    export const ThemeProvider = ({ children }) => {
      const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        // Check system preference if no theme is stored
        if (!storedTheme) {
          return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return storedTheme;
      });

      useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
      }, [theme]);

      const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      };

      return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    };
  