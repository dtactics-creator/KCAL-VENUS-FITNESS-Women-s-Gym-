import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FloatingActions, Footer, Navbar, Preloader, ScrollProgress } from "./components/Chrome";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Transformation from "./pages/Transformation";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function PageFade({ children, k }: { children: React.ReactNode; k: string }) {
  return (
    <motion.main
      key={k}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}

function AnimatedRoutes() {
  const loc = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={loc} key={loc.pathname}>
        <Route path="/" element={<PageFade k="home"><Home /></PageFade>} />
        <Route path="/about" element={<PageFade k="about"><About /></PageFade>} />
        <Route path="/programs" element={<PageFade k="programs"><Programs /></PageFade>} />
        <Route path="/transformation" element={<PageFade k="trans"><Transformation /></PageFade>} />
        <Route path="/contact" element={<PageFade k="contact"><Contact /></PageFade>} />
        <Route path="*" element={<PageFade k="home"><Home /></PageFade>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const done = useCallback(() => setLoading(false), []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-ink text-ivory antialiased">
        <AnimatePresence>{loading && <Preloader done={done} />}</AnimatePresence>
        <ScrollToTop />
        <ScrollProgress />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <FloatingActions />
      </div>
    </BrowserRouter>
  );
}
