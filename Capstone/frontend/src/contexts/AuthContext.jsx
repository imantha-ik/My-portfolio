
    import React, { createContext, useState, useContext, useEffect } from 'react';

    const AuthContext = createContext(null);

    export const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        try {
          const storedUser = localStorage.getItem('elementalUser');
          if (storedUser) {
            setUser(JSON.parse(storedUser));
          }
        } catch (error) {
          console.error("Failed to parse user from localStorage", error);
          localStorage.removeItem('elementalUser');
        } finally {
           setLoading(false);
        }
      }, []);

      const login = (userData) => {
        const loggedInUser = {
          id: Date.now(),
          name: userData.name || 'Demo User',
          email: userData.email,
          role: userData.role || 'Student',
          avatarUrl: userData.avatarUrl || null,
          impactClicks: 10,
        };
        localStorage.setItem('elementalUser', JSON.stringify(loggedInUser));
        setUser(loggedInUser);
      };

      const signup = (userData) => {
        const newUser = {
          id: Date.now(),
          name: userData.fullName,
          email: userData.email,
          role: userData.occupation,
          avatarUrl: null,
          impactClicks: 0,
        };
        localStorage.setItem('elementalUser', JSON.stringify(newUser));
        setUser(newUser);
      };

      const logout = () => {
        localStorage.removeItem('elementalUser');
        setUser(null);
      };

      const updateUser = (updatedData) => {
        if (user) {
          const updatedUser = { ...user, ...updatedData };
          try {
            localStorage.setItem('elementalUser', JSON.stringify(updatedUser));
            setUser(updatedUser);
          } catch (error) {
             console.error("Failed to save user to localStorage", error);
             // Optionally revert state or show an error to the user
          }
        }
      };

      if (loading) {
        return null;
      }

      return (
        <AuthContext.Provider value={{ user, login, logout, signup, updateUser, loading }}>
          {children}
        </AuthContext.Provider>
      );
    };

    export const useAuth = () => {
      return useContext(AuthContext);
    };
  