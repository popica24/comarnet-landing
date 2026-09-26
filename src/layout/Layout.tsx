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
      {/* initial={false}: the first page is prerendered HTML and must be visible
          without JavaScript, so only route changes animate. */}
      <AnimatePresence mode="wait" initial={false}>
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
