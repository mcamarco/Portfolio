import React, { useState } from 'react';
import Project from './project';

function Portfolio() {
  const projects = [
    {
      // TODO: CHANGE DESCRIPTION
      image: require('../images/the19thHole.png'),
      title: 'The 19th Hole',
      description: 'Description of project',
      githublink: 'https://github.com/mcamarco/the-19th-hole',
      id: 1
    },
    // {
    //   // TODO: CHANGE DESCRIPTION
    //   image: require('../images/Portfoli-Yo Img.png'),
    //   title: 'Portfoli-Yo',
    //   description: 'Description of project',
    //   link: 'https://github.com/mcamarco/portfoli-yo',
    //   id: 2
    // },
    // {
    //   // TODO: CHANGE DESCRIPTION
    //   image: require('../images/SQL_Employee_Tracker.png'),
    //   title: 'SQL Employee Tracker',
    //   description: 'Description of project',
    //   link: 'https://github.com/mcamarco/SQL_Employee_Tracker',
    //   id: 3
    // },
    // {
    //   // TODO: CHANGE DESCRIPTION
    //   // image: require('../images/the19thHole.png'),
    //   title: 'Project Name',
    //   description: 'Description of project',
    //   // link: 'https://github.com/mcamarco/the-19th-hole',
    //   id: 4
    // },
    // {
    //   // TODO: CHANGE DESCRIPTION
    //   // image: require('../images/the19thHole.png'),
    //   title: 'Project Name',
    //   description: 'Description of project',
    //   // link: 'https://github.com/mcamarco/the-19th-hole',
    //   id: 5
    // },
    // {
    //   // TODO: CHANGE DESCRIPTION
    //   // image: require('../images/the19thHole.png'),
    //   title: 'Project Name',
    //   description: 'Description of project',
    //   // link: 'https://github.com/mcamarco/the-19th-hole',
    //   id: 6
    // },

  ]

  return (
    <div className="container">
      <div className='row cardDiv'>
        {projects.map(function (project) {
          return (
            <div className= 'col-3'>
              <Project image={project.image} title={project.title} description={project.description} link={project.githublink} id={project.id} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Portfolio;