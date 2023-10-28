import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../App.css';

function ScrollAnimationText() {
  const controls = useAnimation();
  const [elementTop, setElementTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY + window.innerHeight >= elementTop) {
        controls.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.8, ease: 'easeOut' }
        });
      }
    };

    // Устанавливаем начальное значение для анимации
    controls.set({ x: -80, opacity: 0 });

    // Получаем позицию элемента относительно верха страницы
    const element = document.getElementById('animated-text');
    setElementTop(element.offsetTop);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [controls]);

  return (
    <motion.div id="animated-text" animate={controls}>
      Плавно анимированный текст сбоку!
    </motion.div>
  );
}

export default ScrollAnimationText;