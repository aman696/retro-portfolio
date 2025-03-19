import { Briefcase, Github, ExternalLink } from 'lucide-react';

const experienceData = [
  {
    role: "Software Developer Intern",
    company: "Quant Scientist",
    location: "Remote",
    dateRange: "Feb. 2024 – Nov. 2024",
    details: [
      "Developed and debug a video streaming platform with embedded quizzes and gamified features to boost user retention.",
      "Enhanced series creation with real-time analytics, progress tracking, and advanced content management for paid/free content.",
      "Integrated AI-powered accessibility tools (speech-to-text, sign-language interpreters), increasing inclusivity by 30%.",
      "Automated H5P workflows using Python and UI Path, cutting manual video production effort by 80%.",
      "Collaborated with cross-functional teams to deliver scalable, user-focused solutions under tight deadlines.",
    ],
  },
  {
    role: "Freelance Software Developer",
    company: "AI Gym Tool Project",
    location: "Remote",
    dateRange: "Dec. 2024 – Feb. 2025",
    details: [
      "Created an AI Gym Tool to track exercise form, provide personalized diet plans, and generate workout routines.",
      "Utilized computer vision and machine learning to analyze real-time exercise form, improving accuracy by 25%.",
      "Designed a scalable backend with Python and MySQL to process user data and deliver tailored fitness recommendations, allowing it to support over 3000 simultaneous users with the help of worker clusters.This is just a replica demo link.",
    ],
    liveLink: "https://formfitai.netlify.app/",
  },
  {
    role: "Open Source Contributor",
    company: "Custom Browser from Scratch",
    location: "Remote",
    dateRange: "Mar. 2025 – Present",
    details: [
      "Set up a custom networking stack using C++ and libcurl.",
      "Developing a custom DOM engine following the HTML5 guidelines.",
    ],
    githubLink: "https://github.com/aman696/browser",
  },
];

const ResumeSection = () => {
  return (
    <section id="experience" className="py-16 bg-retro-pink/20 dark:bg-gray-800/30">
      <div className="retro-container">
        {/* Section Title */}
        <h2 className="section-title font-pixel text-retro-pink text-3xl md:text-4xl lg:text-6xl mb-10">
          MY EXPERIENCE
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceData.map((exp, index) => (
            <div key={index} className="retro-card transition hover:-translate-y-2 hover:shadow-lg border-2 border-black p-5 rounded-lg relative">
              
              {/* Header with Briefcase Icon */}
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="h-6 w-6 text-retro-purple" />
                <h3 className="font-pixel text-xl md:text-2xl lg:text-4xl text-retro-teal">
                  {exp.role}
                </h3>
              </div>

              {/* Experience Content */}
              <div className="border-l-4 border-retro-yellow pl-4 py-2">
                <p className="font-vt323 text-lg text-gray-800 dark:text-gray-300">
                  {exp.company}
                </p>
                <p className="font-vt323 text-sm text-gray-600 dark:text-gray-400">
                  {exp.location} • {exp.dateRange}
                </p>
                
                {/* Experience Details */}
                <ul className="list-disc list-inside font-vt323 mt-2 ml-2 space-y-2 text-sm md:text-base lg:text-xl">
                  {exp.details.map((item, idx) => (
                    <li key={idx} className="leading-relaxed text-hero-text/90">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Links Container */}
              <div className="flex flex-wrap gap-3 mt-4 justify-end">
                {/* GitHub Button */}
                {exp.githubLink && (
                  <a 
                    href={exp.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#6E59A5] hover:bg-[#8B5CF6] text-white 
                    font-vt323 px-4 py-2 rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] 
                    transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] 
                    hover:translate-y-[-2px] border-2 border-black"
                  >
                    <Github className="h-5 w-5" />
                    <span className="text-sm md:text-base">View on GitHub</span>
                  </a>
                )}
                
                {/* Live Project Button */}
                {exp.liveLink && (
                  <a 
                    href={exp.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#F97316] hover:bg-[#FDBA74] text-white
                    font-vt323 px-4 py-2 rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] 
                    transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] 
                    hover:translate-y-[-2px] border-2 border-black"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span className="text-sm md:text-base">View Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
