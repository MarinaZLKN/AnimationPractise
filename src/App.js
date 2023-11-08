import React, {useEffect, useState} from 'react';
import './App.css';
import { motion } from 'framer-motion';
import ScrollAnimationText from "./components/ScrollAnimationText";
import ScrollFadeText from "./components/ScrollFadeText";
import TypingEffect from "./components/TypingEffect";
import MorphingText from "./components/MorphingText";
import ScrollAnimationImage from "./components/ScrollAnimationImage";
import ImageTextCard from "./components/ImageTextCard";
import Accordion from "./components/Accordion";
import MapYandex from "./components/MapYandex";
import PhoneNumber from "./components/PhoneNumber";
import GeolocationYandexMap from "./components/GeolocationYandexMap";

function App() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAnimatingBtn, setIsAnimatingBtn] = useState(false);
  const [visibleChars, setVisibleChars] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const text = "Это эффект печатной машинки!";

  useEffect(() => {
    if (visibleChars < text.length) {
      const timer = setTimeout(() => {
        setVisibleChars((prevValue) => prevValue + 1);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [visibleChars, text]);


  return (
    <div className="App">
        <header className="header">
            <div className="animations_level1">
                <div className="animation1">
                    <motion.h1
                      initial={{ fontSize: 24, color: '#6e3cff', rotateZ: 0 }}
                      animate={isAnimating ? {  color: '#ff2994', rotateZ: 360, scale: 1.5 } : {}}
                      onClick={() => setIsAnimating(!isAnimating)}
                    >
                        Вращаем
                    </motion.h1>
                </div>
                <div className="animation2">
                    <motion.button className="btn"
                    initial={{ scale: 1, background: '#a1ff2f', borderRadius: '50%', width: '200px', height:'50px' }}
                    whileHover={{ scale: 1.3, background: '#b274fc', boxShadow: "0px 0px 8px rgba(189, 138, 255, 0.8)" }}
                    animate={isAnimatingBtn? { scale: 0.9,  borderRadius: '10px', width: '160px', }: {}}
                    onClick={() => setIsAnimatingBtn(!isAnimatingBtn)}
                    transition={{ duration: 0.5 }}>
                        Меняем форму
                    </motion.button>
                </div>
                <div className="animation3">
                    неведи курсор
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1, fontSize: '22px' }}
                      transition={{ duration: 2 }}
                    >
                      При наведении
                    </motion.div>

                </div>
                <div className="animation4">

                </div>
                <div className="animation5">
                    <motion.div
                      style={{
                        width: "200px",
                        height: "200px",
                        background: "linear-gradient(to right, #ff416c, #ff4b2b)",
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "24px",
                        perspective: "600px",
                        cursor: "pointer"
                      }}
                      whileHover={{
                        rotateY: 60,
                        rotateX: 20
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      3D наклон
                    </motion.div>
                </div>
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
                      transformStyle: "preserve-3d",
                      position: "relative"
                    }}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => setIsFlipped(!isFlipped)}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(to right, #ff416c, #ff4b2b)",
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "24px",
                        backfaceVisibility: "hidden"
                      }}
                    >
                      Передняя стр
                    </div>

                    <div
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(to right, #ff4b2b, #ff416c)",
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "24px",
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)"
                      }}
                    >
                      Задняя стр
                    </div>
                  </motion.div>
                </div>
            </div>
            </div>
        </header>
        <main>
            <div className="animations_level2">
                <div className="animation11">
                    <MorphingText />
                </div>
                <div className="animation16">
                    <PhoneNumber/>
                </div>
                <div className="animation10">
                    <div>
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

                        <TypingEffect text="Это тоже эффект печатноц машинки, но работает при наведении" />

                    </div>
                </div>
                <div className="animation12">
                    <ImageTextCard/>
                </div>
                <div className="animation8">

                    <div style={{ padding: '20px' }}>
                      <div style={{ height: '155px', background: '#ece0fa' }}></div>
                        <ScrollAnimationText />
                        <ScrollAnimationImage />
                      <div style={{ height: '15px', background: '#ece0fa' }}></div>
                    </div>
                </div>
                <div className="animation13">
                    <div>
                      <Accordion title="Вкладка 1" content="Информация 1" />
                      <Accordion title="Вкладка 2" content="Информация 2" />
                      <Accordion title="Вкладка 3" content="Информация 3" />
                    </div>
                </div>
                <div className="animation9">
                    <div style={{ padding: '20px' }}>
                      <div style={{ height: '50px', background: '#ece0fa' }}></div>
                      <ScrollFadeText />
                      <div style={{ height: '250px', background: '#ece0fa' }}></div>
                    </div>
                </div>

                <div className="animation15">
                    {/*< MapYandex />*/}
                    <GeolocationYandexMap />
                </div>



            </div>
        </main>

    </div>
  );
}

export default App;
