import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function ScrollFadeText() {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        controls.start({ y: (1 - scrollPercent) * 100, opacity: scrollPercent });
      }
    };

    controls.start({ y: 100, opacity: 0 });
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.div ref={ref} initial={{ y: 100, opacity: 0 }} animate={controls}>
      На самом краю леса стоял деревянный домик. Жил в нем старик Иван. Хотя многие из горожан боялись леса, считая
        его местом обитания духов и неизведанных существ, Иван чувствовал себя там как дома. Однажды, в темную ночь,
        к двери домика стукнули. Иван, недоумевая, открыл дверь, и перед ним стояла крошечная девочка с золотыми
        волосами и крыльями. "Я – лесная фея," – прошептала она.
        Фея рассказала, что ее магический камень был украден злыми существами. Без него, она не могла вернуться домой.
        Иван, не колеблясь, предложил помощь. Следующие дни они проникали все глубже в лес, преодолевая опасности и
        разгадывая загадки. Их сражения со злыми существами были напряженными, но команда старика и феи оказалась
        непобедимой. В конце концов, они вернули камень, а фея, в благодарность, превратила домик Ивана в волшебное
        место, где время текло медленнее, а цветы никогда не увядали. С тех пор, горожане начали приходить к Ивану за
        мудрыми советами и лекарствами, и лес перестал быть для них местом страха.
    </motion.div>
  );
}

export default ScrollFadeText;
