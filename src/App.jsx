import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/SignUpPage';
import ProfilePage from '@/pages/ProfilePage';
import ResourcesPage from '@/pages/ResourcesPage';
import ContactPage from '@/pages/ContactPage';
import AskQuestionPage from '@/pages/AskQuestionPage';
import DonatePage from '@/pages/DonatePage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import AboutUsPage from '@/pages/AboutUsPage';
import GetInvolvedPage from '@/pages/GetInvolvedPage';
import FilmResourcesPage from '@/pages/FilmResourcesPage';
import ImpactPage from '@/pages/ImpactPage';
import { Toaster } from '@/components/ui/toaster';
import { AnimatePresence, motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';
import EducatorsPage from '@/pages/EducatorsPage';
import IndividualsPage from '@/pages/IndividualsPage';
import TrainPlatformSchoolsPage from '@/pages/TrainPlatformSchoolsPage';
import MobileSchoolsPage from '@/pages/MobileSchoolsPage';
import FloatingSchoolsPage from '@/pages/FloatingSchoolsPage';



function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return user ? children : <Navigate to="/login" replace />;
}

function AnimatedRoutes() {
  const location = useLocation();
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };
  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><HomePage /></motion.div>} />
        <Route path="/login" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><LoginPage /></motion.div>} />
        <Route path="/signup" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><SignUpPage /></motion.div>} />
        <Route path="/profile" element={<ProtectedRoute><motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><ProfilePage /></motion.div></ProtectedRoute>} />
        <Route path="/contact" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><ContactPage /></motion.div>} />
        <Route path="/donate" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><DonatePage /></motion.div>} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        <Route path="/film" element={<FilmResourcesPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/ask" element={<AskQuestionPage />} />
        <Route path="/resources" element={<ProtectedRoute><motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><ResourcesPage /></motion.div></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/how-it-works/educators" element={<EducatorsPage />} />
        <Route path="/how-it-works/individuals" element={<IndividualsPage />} />
        <Route path="/partner-schools/train" element={<TrainPlatformSchoolsPage />} />
        <Route path="/partner-schools/mobile" element={<MobileSchoolsPage />} />
        <Route path="/partner-schools/floating" element={<FloatingSchoolsPage />} />


      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  return (
    <Layout>
      <AnimatedRoutes />
    </Layout>
  );
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <AppContent />
          <Toaster
            toastOptions={{
              className: 'rounded-md bg-background text-foreground shadow-lg',
            }}
            position="top-right"
            richColors
          />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;










