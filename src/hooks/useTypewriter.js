// src/hooks/useTypewriter.js
import { useState, useEffect } from 'react';

export function useTypewriter({ words, loop = true, delay = 50, deleteSpeed = 30 }) {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(delay);

  useEffect(() => {
    const currentWord = words[currentIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setText(currentWord.substring(0, text.length + 1));
        setSpeed(delay);
        
        if (text === currentWord) {
          // Word completed, start deleting after pause
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting
        setText(currentWord.substring(0, text.length - 1));
        setSpeed(deleteSpeed);
        
        if (text === '') {
          setIsDeleting(false);
          // Move to next word or loop
          if (loop || currentIndex < words.length - 1) {
            setCurrentIndex((prev) => (prev + 1) % words.length);
          }
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, currentIndex, isDeleting, speed, words, loop, delay, deleteSpeed]);

  return [text];
}