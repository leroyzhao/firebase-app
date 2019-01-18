import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur aperiam nihil aliquid hic odit error magnam, ab et debitis culpa? Officia dolorum, ex non facilis quia ipsam vero exercitationem.</p>
        </div>
        <div className="card-action lighten-4 grey-text">
          <div>Posted by LZ</div>
          <div>Jan 18, 11:50am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails