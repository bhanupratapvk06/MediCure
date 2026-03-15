import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Spinner from './components/ui/Spinner';
import { ThemeProvider } from './theme';

// Lazy load all page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const Medication = lazy(() => import('./pages/Medication'));
const NavEmergencyRequest = lazy(() => import('./pages/NavEmergencyRequest'));
const RequestRareInjection = lazy(() => import('./pages/RequestRareInjection'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Lazy load additional pages
const PriorityEmergencyHandling = lazy(() =>
  import('./pages/Additionals').then((module) => ({
    default: module.PriorityEmergencyHandling,
  }))
);
const RareInjectionAssistance = lazy(() =>
  import('./pages/Additionals').then((module) => ({
    default: module.RareInjectionAssistance,
  }))
);
const SecurePrescriptionUpload = lazy(() =>
  import('./pages/Additionals').then((module) => ({
    default: module.SecurePrescriptionUpload,
  }))
);
const VerifiedSuppliers = lazy(() =>
  import('./pages/Additionals').then((module) => ({
    default: module.VerifiedSuppliers,
  }))
);

// Loading fallback component
const PageLoader = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
    }}
  >
    <Spinner size="lg" />
  </div>
);

const App = () => {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <ToastContainer position="top-right" autoClose={3000} />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/medication" element={<Medication />} />
            <Route path="/verified-suppliers" element={<VerifiedSuppliers />} />
            <Route
              path="/upload-prescription"
              element={<SecurePrescriptionUpload />}
            />
            <Route
              path="/emergency-requests"
              element={<PriorityEmergencyHandling />}
            />
            <Route
              path="/rare-injections"
              element={<RareInjectionAssistance />}
            />
            <Route
              path="/new-emergency-request"
              element={<NavEmergencyRequest />}
            />
            <Route
              path="/request-rare-injection"
              element={<RequestRareInjection />}
            />
            <Route path="/order-tracking" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
