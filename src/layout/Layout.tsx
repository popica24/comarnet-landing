import { useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AnimatedOutlet from "./components/AnimatedOutlet";
import ScrollToTop from "./components/ScrollToTop";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Navigation />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <AnimatedOutlet />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Layout;
