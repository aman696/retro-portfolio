
import React from 'react';
import { BookOpen, Code, Monitor, Globe } from 'lucide-react';
import ProfilePic from '../assets/profile-pic.jpeg';
const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-retro-teal/20">
      <div className="retro-container">
        <h2 className="section-title">ABOUT ME</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="pixel-border  p-4">
              <img 
                src={ProfilePic} 
                alt="Aman Chaturvedi" 
                className="w-full h-auto pixelated" 
                style={{ imageRendering: 'pixelated' }}
              />
              <div className="mt-4 font-vt323 text-center">
                <p className="text-xl">STATUS: AVAILABLE FOR HIRE</p>
                <p className="text-xl">LEVEL: UNDERGRADUATE</p>
                <p className="text-xl">LOCATION: INDIA</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 font-vt323 text-xl">
            <div className="terminal-window mb-6">
              <p className="text-retro-pink">/* about.txt */</p>
              <p className="mt-2 leading-relaxed">
                I'm currently pursuing a B.Tech in Information Technology at Acropolis Institute of Technology and Research, Indore.
              </p>
              <p className="mt-2 leading-relaxed">
                My journey in programming started during my high school days, and since then, I've been exploring various domains of computer science.
                I've been on an adventure, exploring all kinds of technologies. I've built websites, web apps, desktop applications, 
                machine learning models, compiler, interpreters, and even a browser and an operating system.
              </p>
              <p className="mt-2 leading-relaxed">
                In addition to coding, I enjoy solving challenging problems, learning new technologies, 
                and contributing to open-source projects.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="retro-card">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-6 w-6 text-retro-purple" />
                  <h3 className="font-pixel text-lg">Education</h3>
                </div>
                <p>B.Tech in IT</p>
                <p>Acropolis Institute of Technology and Research</p>
                <p>2021 - 2025</p>
              </div>
            
              
              <div className="retro-card">
                <div className="flex items-center gap-2 mb-2">
                  <Monitor className="h-6 w-6 text-retro-purple" />
                  <h3 className="font-pixel text-lg">Development</h3>
                </div>
                <p>Frontend: React, Next.js</p>
                <p>Backend: Node.js, Express</p>
                <p>Database: MongoDB, MySQL</p>
              </div>
              
              <div className="retro-card">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="h-6 w-6 text-retro-purple" />
                  <h3 className="font-pixel text-lg">Languages</h3>
                </div>
                <p>C++</p>
                <p>JavaScript/TypeScript</p>
                <p>Python</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
