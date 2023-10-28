import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function TypingEffect({ text }) {
  const [visibleChars, setVisibleChars] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let timer;

    if (hovering) {
      timer = setInterval(() => {
        setVisibleChars((chars) => {
          if (chars < text.length) {
            return chars + 1;
          } else {
            clearInterval(timer);
            return chars;
          }
        });
      }, 50); // значение для увеличения/уменьшения скорости.
    } else {
      setVisibleChars(0);
    }

    return () => clearInterval(timer);
  }, [hovering, text]);

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {Array.from(text).map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index < visibleChars ? 1 : 0, fontSize: '20px'}}
          transition={{ duration: 0.5 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}

export default TypingEffect;
