import React from 'react'

function ProjectsCard() {


  return (
    <div>
      <section className="mt-8">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="p-4 bg-purple rounded-lg">
              <h3 className="text-xl font-bold">Project 1</h3>
              <p className="mt-2">A brief description of the project.</p>
            </div>
            <div className="p-4 bg-purple rounded-lg">
              <h3 className="text-xl font-bold">Project 2</h3>
              <p className="mt-2">A brief description of the project.</p>
            </div>
            <div className="p-4 bg-purple rounded-lg">
              <h3 className="text-xl font-bold">Project 3</h3>
              <p className="mt-2">A brief description of the project.</p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default ProjectsCard
