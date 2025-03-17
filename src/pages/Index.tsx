
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import ResumeSection from '../components/ResumeSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ResumeSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
