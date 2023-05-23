import React, { useState } from 'react';
import Project from './project';

function Portfolio() {
  const projects = [
    {
      // TODO: CHANGE IMAGE
      image: require('../images/logo.png'),
      title: 'Project 1',
      description: 'Description of project 1',
      link: 'https://github.com/mcamarco',
      id: 1
    },
    {
      // TODO: CHANGE IMAGE
      image: require('../images/MickeysHeadshot.jpg'),
      title: 'Project 2',
      description: 'Description of project 2',
      link: 'https://github.com/mcamarco/portfoli-yo',
      id: 2
    }
  ]
   
  return (
    <div>
      {projects.map(function (project) {
        return (
          <div>
            <Project image={project.image}title={project.title} description={project.description} link={project.link} id={project.id} />
          </div>
        )
      })}
     
    </div>
  );
}

export default Portfolio;