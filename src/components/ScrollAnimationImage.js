import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

import picture from '../images/picture.png';

function ScrollAnimationImage() {
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

    // начальное значение для анимации
    controls.set({  x: '100%', opacity: 0 });

    // Получаем позицию элемента относительно верха страницы
    const element = document.getElementById('animated-image');
    setElementTop(element.offsetTop);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [controls, elementTop]);

  return (
    <motion.img
      id="animated-image"
      animate={controls}
      src={picture}
      alt="Your image description"
      style={{ width: '200px', height: '200px',display: 'block' }}
    />
  );
}

export default ScrollAnimationImage;
