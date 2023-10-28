import React, { useState } from 'react';
import { motion } from 'framer-motion';

function MorphingText() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div onClick={() => setIsToggled(!isToggled)}>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isToggled ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {!isToggled && 'Текст номер 1'}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isToggled ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isToggled && 'Совершенно другой тест'}
      </motion.div>
    </div>
  );
}

export default MorphingText;
