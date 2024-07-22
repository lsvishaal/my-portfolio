import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import ProjectsCard from './Components/Projects/Projects';


const App = () => {
  const typedElement = useRef(null);
  // Remove the unused variable
  useState('#FFFFFF');

  const skills = [
    // Frontend Technologies
    { name: 'HTML', logo: 'src/assets/HTML5.svg', color: '#E34F26' },
    { name: 'CSS', logo: 'src/assets/css.svg', color: '#1572B6' },
    { name: 'JavaScript', logo: 'src/assets/Javascript.svg', color: '#F7DF1E' },
    { name: 'React', logo: 'src/assets/react.svg', color: '#61DAFB' },
    { name: 'Tailwind CSS', logo: 'src/assets/Tailwindcss.svg', color: '#38B2AC' },
    { name: 'Bootstrap', logo: 'src/assets/Bootstrap5.svg', color: '#7952B3' },
  
    // Backend Technologies
    { name: 'Node.js', logo: 'src/assets/nodejs.svg', color: '#339933' },
    { name: 'Python', logo: 'src/assets/python-logo.svg', color: '#FFD43B' },
    { name: 'MySQL', logo: 'src/assets/mysql.svg', color: '#4479A1' },
  
    // Version Control
    { name: 'Git', logo: 'src/assets/git.svg', color: '#F05032' },
  ];
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my projects and skills.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      image: 'src/assets/portfolio-website.png',
      link: 'https://example.com/my-portfolio'
    },
  
    // Add more projects as needed
  ];

  useEffect(() => {
    const options = {
      strings: [
        'I am a Web Developer',
        'I am a Software Engineer',
        'I am a Creative Thinker',
        'I am a Problem Solver',
        'I am a Team Player',
        'I am Passionate About Technology',
        'I am Always Learning',
        'I am Ready to Make an Impact'
      ],
      typeSpeed: 30,
      backSpeed: 10,
      loop: false,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white outline-5">
      <header className="flex items-center justify-center h-screen bg-gradient-to-r from-purple via-violet-500 to-purple">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-yellow-300">
            <span ref={typedElement}></span>
          </h1>
        </div>
      </header>
      <main className="p-8 mx-11">
        <section>
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4">
            I am a passionate web developer with experience in building modern and responsive web applications. My skills include React, TailwindCSS, and other cutting-edge technologies.
          </p>
        </section>

        {/* Projects Section*/}
        <ProjectsCard />

        {/* Skills-Section */}
        <Skills />

        <section className="mt-8">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-4">
            Feel free to <a href="mailto:your-email@example.com" className="text-purple underline">get in touch</a> with me for any project collaborations or inquiries.
          </p>
        </section>
      </main>
      </div>
  );
};

export default App;
