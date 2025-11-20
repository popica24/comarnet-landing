import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const scrollToTopWithDelay = () => {
      const timeoutId = setTimeout(() => {
        window.scrollTo(0, 0);
      }, 500);

      return () => clearTimeout(timeoutId);
    };

    const cleanup = scrollToTopWithDelay();

    return cleanup;
  }, [pathname]);
  return null;
};

export default ScrollToTop;
