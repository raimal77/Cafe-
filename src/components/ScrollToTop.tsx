import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        window.requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        });
      } else {
        window.requestAnimationFrame(() => {
          window.scrollTo(0, 0);
        });
        setTimeout(() => {
          window.requestAnimationFrame(() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return null;
}
