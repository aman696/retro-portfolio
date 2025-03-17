import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-black text-white border-t-4 border-retro-purple">
      <div className="retro-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-vt323 text-retro-teal text-xl text-center">
            <p>© {new Date().getFullYear()} Aman Chaturvedi. All Rights Reserved.</p>
            <p className="animate-blink">Ready. Press any key to continue _</p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/aman696" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-retro-teal transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/aman-chaturvedi-690922229" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-retro-teal transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-retro-teal transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
