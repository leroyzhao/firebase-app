import React from 'react'

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-4 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="crd-title">{project.title}</span>
        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
        <p className="grey-text">Jan 18, 11:30am</p>
      </div>
  </div>
  )
}

export default ProjectSummary