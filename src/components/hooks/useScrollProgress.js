import { useEffect, useState } from 'react';

const useScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const winHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / winHeight) * 100;
      setScroll(scrolled);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return scroll;
};

export default useScrollProgress;
