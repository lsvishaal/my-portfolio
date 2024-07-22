
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my projects and skills.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    image: 'src/assets/portfolio-website.png',
    link: 'https://example.com/my-portfolio'
  },
  // Add more projects here
];

function ProjectCards() {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} className="project-image" />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul className="technologies-list">
            {project.technologies.map((tech, techIndex) => (
              <li key={techIndex}>{tech}</li>
            ))}
          </ul>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  );
}

export default ProjectCards;