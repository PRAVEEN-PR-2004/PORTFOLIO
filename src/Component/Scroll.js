import  { useEffect } from 'react';
import "./Scroll.css"
const ScrollTransition = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-transition');
      elements.forEach((element) => {
        const positionFromTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null; // No visible component, just logic
};

export default ScrollTransition;
