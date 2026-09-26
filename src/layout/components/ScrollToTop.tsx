import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // A hash means the target page scrolls itself to an anchor on the same
    // 500ms timer. Scrolling to top as well would race it.
    if (hash) return;

    const scrollToTopWithDelay = () => {
      const timeoutId = setTimeout(() => {
        window.scrollTo(0, 0);
      }, 500);

      return () => clearTimeout(timeoutId);
    };

    const cleanup = scrollToTopWithDelay();

    return cleanup;
  }, [pathname, hash]);
  return null;
};

export default ScrollToTop;
