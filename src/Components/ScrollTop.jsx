import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Enable the browser's default scroll restoration behavior on refresh
    window.history.scrollRestoration = 'auto';

    // Scroll to the top only when navigating within the app, not on refresh
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
