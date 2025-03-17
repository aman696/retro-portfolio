import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText =
    "Hi, I'm Aman Chaturvedi. I transform complex challenges into elegant AI-driven solutions. Specializing in PyTorch, FastAPI, and React, I build intelligent systems that automate workflows and deliver meaningful insights.";

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [text, fullText]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative bg-retro-pink/20 dark:bg-gray-800/30">
      <div className="retro-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="terminal-window shadow-lg min-h-[300px]">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-3 w-3 rounded-full bg-retro-pink"></div>
              <div className="h-3 w-3 rounded-full bg-retro-yellow"></div>
              <div className="h-3 w-3 rounded-full bg-retro-teal"></div>
              <span className="ml-2 text-white">terminal - aman@portfolio ~ </span>
            </div>
            <div className="text-xl md:text-2xl mt-4">
              <p className="text-retro-yellow">$ whoami</p>
              <p className="text-retro-teal">
                {text}
                {showCursor && <span className="animate-blink">_</span>}
              </p>
              <p className="text-retro-yellow mt-4">$ skills</p>
              <p className="text-retro-teal flex flex-wrap gap-2 mt-2">
                <span className="inline-block bg-black border border-retro-teal px-2 py-1">Python</span>
                <span className="inline-block bg-black border border-retro-teal px-2 py-1">FastAPI</span>
                <span className="inline-block bg-black border border-retro-teal px-2 py-1">PyTorch</span>
                <span className="inline-block bg-black border border-retro-teal px-2 py-1">React</span>
                <span className="inline-block bg-black border border-retro-teal px-2 py-1">Machine Learning</span>
                <span className="inline-block bg-black border border-retro-teal px-2 py-1">AI Solutions</span>
              </p>
            </div>
          </div>

          <div className="pixel-border p-6 bg-retro-purple">
            <div className="text-center">
              <h1 className="font-press-start text-white text-3xl md:text-4xl mb-4">
                AMAN CHATURVEDI
              </h1>
              <div className="bg-retro-yellow p-4 border-4 border-black mb-4">
                <h2 className="font-pixel text-black text-xl md:text-2xl">Backend Developer</h2>
                <h2 className="font-pixel text-black text-xl md:text-2xl">Machine Learning Enthusiast</h2>
              </div>
              <div className="flex justify-center gap-4">
                <a href="/#contact" className="pixel-button">
                  CONTACT ME
                </a>
                <a href="/#projects" className="pixel-button">
                  SEE WORK
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="h-10 w-10 text-retro-purple" />
      </button>
    </section>
  );
};

export default HeroSection;

