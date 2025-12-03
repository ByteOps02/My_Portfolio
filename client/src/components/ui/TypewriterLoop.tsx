import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterLoopProps {
  words: string[];
  className?: string;
}

export default function TypewriterLoop({ words, className = "" }: TypewriterLoopProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt((Math.random() * 350).toString())));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className={`${className} inline-flex items-center`}>
      {words[index].substring(0, subIndex)}
      <motion.span
        animate={{ opacity: blink ? 1 : 0 }}
        className="ml-1 inline-block w-[2px] h-[1.2em] bg-primary"
      />
    </span>
  );
}
