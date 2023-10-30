import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <motion.div initial={{ backgroundColor: '#3baef1' }}
                  whileHover={{ backgroundColor: '#85d6fc' }}
                  onClick={() => setIsOpen(!isOpen)}>
        {title}
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 20, opacity: 0 }}
            animate={{ height: 100, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Accordion;
