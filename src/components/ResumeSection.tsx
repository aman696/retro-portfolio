import { Briefcase, FileText, Download } from 'lucide-react';

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
      "Designed a scalable backend with Python and MySQL to process user data and deliver tailored fitness recommendations, allowing it to support over 3000 simultaneous users with the help of worker clusters.",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "Custom Browser from Scratch",
    location: "Remote",
    dateRange: "Mar. 2025 – Present",
    details: [
      "Designed and implemented a custom rendering engine using C++ and OpenGL.",
      "Implemented a custom DOM parser using ANTLR and C++.",
      "Created a custom JavaScript engine using C++ and LLVM.",
      "Developed a custom networking stack using C++ and libcurl.",
      "Integrated all the components to create a fully functional browser.",
    ],
    githubLink: "https://github.com/aman696/browser",
  },
];

const ResumeSection = () => {
  return (
    <section id="experience" className="py-16 bg-retro-pink/20 dark:bg-gray-800/30">
      <div className="retro-container">
        <h2 className="section-title">MY EXPERIENCE</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceData.map((exp, index) => (
            <div key={index} className="retro-card transition hover:-translate-y-2 hover:shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="h-6 w-6 text-retro-purple" />
                <h3 className="font-pixel text-xl">{exp.role}</h3>
              </div>

              <div className="border-l-4 border-retro-yellow pl-4 py-2">
                <p className="font-vt323 text-lg">{exp.company}</p>
                <p className="font-vt323 text-sm text-gray-600 dark:text-gray-400">
                  {exp.location} • {exp.dateRange}
                </p>
                {exp.githubLink && (
                  <a
                    href={exp.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-vt323 text-sm text-retro-purple underline hover:no-underline"
                  >
                    View on GitHub
                  </a>
                )}
                <ul className="list-disc list-inside font-vt323 mt-2 ml-2 space-y-1">
                  {exp.details.map((item, idx) => (
                    <li key={idx} className="leading-relaxed text-hero-text/90">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

