import { useState } from 'react';
import { motion } from 'framer-motion';

function ImageTextCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="animation6">
      <div
        style={{
          width: "200px",
          height: "200px",
          perspective: "1000px",
          cursor: "pointer"
        }}
      >
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            paddingTop: "10px",
            transformStyle: "preserve-3d",
            position: "relative"
          }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Передняя сторона с изображением */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: `url(/picture2.webp) center/cover no-repeat`,
              backfaceVisibility: "hidden"
            }}
          ></div>

          {/* Задняя сторона с текстом */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "white",
              color: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "16px",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)"
            }}
          >
            Текст на задней стороне
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ImageTextCard;
