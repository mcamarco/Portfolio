import React, { useState } from 'react';
import Project from './project';

function Portfolio() {
  const projects = [
    {
      // image: require('../images/the19thHole.png'),
      title: 'The 19th Hole',
      description: 'Description of project',
      link: 'https://github.com/mcamarco/the-19th-hole',
      id: 1
    },
    {
      // image: require('../images/Portfoli-Yo Img.png'),
      title: 'Portfoli-Yo',
      description: 'Description of project',
      link: 'https://github.com/mcamarco/portfoli-yo',
      id: 2
    },
    {
      // image: require('../images/SQL_Employee_Tracker.png'),
      title: 'SQL Employee Tracker',
      description: 'Description of project',
      link: 'https://github.com/mcamarco/SQL_Employee_Tracker',
      id: 3
    },
    {
      // image: require('../images/the19thHole.png'),
      title: 'Text Editor',
      description: 'Description of project',
      link: 'https://github.com/mcamarco/text_editor',
      id: 4
    },
    {
      // image: require('../images/the19thHole.png'),
      title: 'Project Name',
      description: 'Description of project',
      // link: 'https://github.com/mcamarco/the-19th-hole',
      id: 5
    },
    {
       // image: require('../images/the19thHole.png'),
      title: 'Project Name',
      description: 'Description of project',
      // link: 'https://github.com/mcamarco/the-19th-hole',
      id: 6
    },

  ]

  return (
    <div className="container">
      <div className='row cardDiv'>
        {projects.map(function (project) {
          return (
            <div className="col-md-4 mb-4 col-sm-12">
              <Project image={project.image} title={project.title} description={project.description} link={project.githublink} id={project.id} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Portfolio;