import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText =
    "Hi, I'm Aman Chaturvedi. I'm highly adaptable and thrive on tackling complex challenges, including building a web browser from scratch. I’m quick to learn and comfortable working across different domains, always eager to push boundaries and explore new solutions. If there’s a tough problem to solve, I’m ready to take it on!";

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
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center relative bg-retro-pink/20 dark:bg-gray-800/30">
      <div className="retro-container relative">
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Terminal Window */}
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
                <span className="inline-block bg-black border border-retro-teal px-2 py-1">Javascript</span>
                <span className="inline-block bg-black border border-retro-teal px-2 py-1">HTML/CSS</span>
                <span className="inline-block bg-black border border-retro-teal px-2 py-1">Github</span>
                <span className="inline-block bg-black border border-retro-teal px-2 py-1">C++</span>
                <span className="inline-block bg-black border border-retro-teal px-2 py-1">Machine Learning</span>
                <span className="inline-block bg-black border border-retro-teal px-2 py-1">Technology Geek</span>
              </p>
            </div>
          </div>

          {/* Pixel Border Section */}
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
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="pixel-button">
                  CONTACT ME
                </button>
                <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="pixel-button">
                  SEE WORK
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Down Arrow Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={scrollToAbout}
            className="absolute left-1/2 transform -translate-x-1/2 translate-y-[calc(100%+1rem)] animate-bounce"
          >
            <ChevronDown className="h-10 w-10 text-retro-purple" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
