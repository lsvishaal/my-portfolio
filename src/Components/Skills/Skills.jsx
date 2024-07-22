
function Skills() {

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

  return (
    <div>
        <section className="mt-8">
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="relative"
                onMouseLeave={() => setBloomColor('#FFFFFF')}
                onMouseEnter={() => {}} // Define the onMouseEnter event handler
              >
                <img src={skill.logo} alt={skill.name} className="w-16 h-16 mx-auto bloom-effect" />
                <p className="mt-2 text-center font-bold">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>
    </div>
  )
}

export default Skills
