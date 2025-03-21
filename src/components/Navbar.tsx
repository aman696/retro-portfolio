import { useState } from "react";
import { Download, Menu, X, Monitor } from "lucide-react";
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Smooth scrolling handler
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // Common navigation links
  const navLinks = (
    <>
      <button
        onClick={() => handleScroll("hero")}
        className="font-press-start text-sm md:text-base uppercase text-black hover:text-retro-purple transition-colors dark:text-white dark:hover:text-retro-teal"
      >
        Home
      </button>
      <button
        onClick={() => handleScroll("projects")}
        className="font-press-start text-sm md:text-base uppercase text-black hover:text-retro-purple transition-colors dark:text-white dark:hover:text-retro-teal"
      >
        Projects
      </button>
      <button
        onClick={() => handleScroll("contact")}
        className="font-press-start text-sm md:text-base uppercase text-black hover:text-retro-purple transition-colors dark:text-white dark:hover:text-retro-teal"
      >
        Contact
      </button>
      <a
        href="/Aman_Resume.pdf"
        download
        className="flex items-center gap-1 border border-black text-black px-3 py-1 font-press-start text-sm uppercase rounded-md hover:bg-retro-purple hover:text-white transition-colors dark:border-white dark:text-white dark:hover:bg-retro-teal"
      >
        Download CV <Download className="h-4 w-4" />
      </a>
    </>
  );

  return (
    <header className="w-full sticky top-0 z-50 bg-retro-yellow border-b-4 border-black dark:bg-gray-800 dark:border-gray-600">
      <div className="retro-container flex items-center justify-between py-3">
        {/* Logo aligned to the left */}
        <div className="flex items-center">
          <button onClick={() => handleScroll("hero")} className="flex items-center gap-2">
            <Monitor className="h-6 w-6" />
            <span className="font-press-start text-lg md:text-xl dark:text-retro-yellow">
              AMAN.EXE
            </span>
          </button>
        </div>

        {/* Desktop Navigation + Theme Toggle aligned to the right */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6">
            {navLinks}
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle aligned to the right */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-black dark:text-white"
            onClick={toggleMenu}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-retro-yellow border-t-4 border-black dark:bg-gray-800 dark:border-gray-600">
          <div className="retro-container py-4 flex flex-col">
            <button
              onClick={() => handleScroll("hero")}
              className="font-press-start text-sm uppercase text-black hover:text-retro-purple py-2 border-b-2 border-dashed border-black last:border-0 dark:text-white dark:hover:text-retro-teal dark:border-gray-600"
            >
              Home
            </button>
            <button
              onClick={() => handleScroll("projects")}
              className="font-press-start text-sm uppercase text-black hover:text-retro-purple py-2 border-b-2 border-dashed border-black last:border-0 dark:text-white dark:hover:text-retro-teal dark:border-gray-600"
            >
              Projects
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="font-press-start text-sm uppercase text-black hover:text-retro-purple py-2 border-b-2 border-dashed border-black last:border-0 dark:text-white dark:hover:text-retro-teal dark:border-gray-600"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
