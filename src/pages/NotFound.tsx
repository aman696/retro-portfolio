
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "../components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="terminal-window max-w-lg w-full text-center p-8">
          <h1 className="text-retro-pink text-6xl font-press-start mb-6">404</h1>
          <p className="text-retro-yellow text-xl font-vt323 mb-6">
            ERROR: FILE_NOT_FOUND
          </p>
          <p className="text-retro-teal text-xl font-vt323 mb-8">
            The page you are looking for does not exist or has been moved to another dimension.
          </p>
          <div className="animate-blink">
            <p className="text-white font-vt323 text-lg">
              Press <span className="bg-white text-black px-2">HOME</span> to return
            </p>
          </div>
          <Link 
            to="/" 
            className="pixel-button mt-8 inline-block"
          >
            RETURN HOME
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
