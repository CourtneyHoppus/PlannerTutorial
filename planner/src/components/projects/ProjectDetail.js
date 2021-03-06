import React from 'react'

const ProjectDetail = (props) => {
  const id = props.match.params.id;
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title - { id }</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div>Posted be me, Courtney</div>
          <div>2021-04-20</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail;
