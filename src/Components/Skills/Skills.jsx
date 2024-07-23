

function Skills() {

    const skills = [
        // Frontend Technologies
        { name: 'HTML', logo: '/Images/HTML5.svg', color: '#E34F26' },
        { name: 'CSS', logo: '/Images/CSS.svg', color: '#1572B6' },
        { name: 'JavaScript', logo: '/Images/Javascript.svg', color: '#F7DF1E' },
        { name: 'React', logo: '/Images/react.svg', color: '#61DAFB' },
        { name: 'Tailwind CSS', logo: '/Images/TailwindCSS.svg', color: '#38B2AC' },
        { name: 'Bootstrap', logo: '/Images/Bootstrap5.svg', color: '#7952B3' },
        { name: 'Node.js', logo: '/Images/NodeJS.svg', color: '#339933' },
        { name: 'Python', logo: '/Images/python-logo.svg', color: '#FFD43B' },
        { name: 'MySQL', logo: '/Images/MySQL.svg', color: '#4479A1' },
        { name: 'Git', logo: '/Images/GIT.svg', color: '#F05032' },
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
                onMouseLeave={() => ('#FFFFFF')}
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
