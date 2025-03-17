"use client"
import { useState } from "react"

interface Project {
  title: string
  tech: string
  year: string
  details: string[]
  image: string
}

const projectsData: Project[] = [
  {
    title: "AI Image Detector",
    tech: "Python, FastAPI, TensorFlow, React",
    year: "2024",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details: [
      "Developed an AI-powered image classification system with a 4.2M parameter Vision Transformer (ViT) and ResNet-50 to detect images generated by diffusion models like Stable Diffusion, DALL-E, and MidJourney.",
      "Achieved an F1-score of 0.94 and precision-recall AUC of 0.96 on a dataset of 1.5 million images across 20 generative AI models.",
    ]
  },
  {
    title: "Resume Generator",
    tech: "Python, FastAPI, React, Mistral API, NLP",
    year: "2024",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details: [
      "Engineered an AI-powered resume generator designed to support up to 15,000 concurrent users, delivering dynamic resume customizations for over 300 targeted companies with an average response time of 180ms.",
      "Implemented advanced NLP models, including a fine-tuned BERT variant, to extract and rank up to 500 job-specific keywords with a 92% precision rate, ensuring highly tailored resume content.",
    ]
  },
  {
    title: "Automation Portfolio",
    tech: "Python, Selenium, BeautifulSoup, UI Path",
    year: "2024",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details: [
      "Developed an automation pipeline that converts YouTube videos into interactive H5P videos with embedded quizzes in under 5 minutes.",
      "Built a Python-based script that extracts video links from an Excel sheet and automates the entire processing workflow.",
    ]
  }
]

const ProjectSection = () => {
  return (
    <section id="projects" className="py-16 bg-retro-teal/20">
      <div className="retro-container">
        <h2 className="section-title font-pixel text-retro-pink text-3xl lg:text-5xl">MY PROJECTS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 retro-grid">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="retro-card transform transition hover:-translate-y-2 hover:shadow-lg border-2 border-black"
            >
              {/* Project Image */}
              <div className="relative mb-4 border-b-2 border-black overflow-hidden" style={{ height: '200px' }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="font-pixel text-white text-lg lg:text-2xl">{project.title}</h3>
                  <p className="text-xs lg:text-sm text-gray-300 mt-1">
                    {project.tech} • {project.year}
                  </p>
                </div>
              </div>
              
              {/* Project Details */}
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base lg:text-lg ml-4 mt-4">
                {project.details.slice(0, 2).map((item, idx) => (
                  <li 
                    key={idx} 
                    className="leading-relaxed font-vt323"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection

