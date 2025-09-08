import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Use setTimeout to ensure DOM is ready
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }, 0);
  }, [location]);

  return null;
};

export default ScrollToTop;
