import React, { useState } from 'react';
import Project from './project';

function Portfolio() {
  const projects = [
    {
      image: require('../images/the19thHole.png'),
      title: 'The 19th Hole',
      description: 'Description of project',
      link: 'https://github.com/mcamarco/the-19th-hole',
      id: 1
    },
    {
      image: require('../images/Portfoli-Yo Img.png'),
      title: 'Portfoli-Yo',
      description: 'Description of project',
      link: 'https://github.com/mcamarco/portfoli-yo',
      id: 2
    },
    {
      image: require('../images/SQL_Employee_Tracker.png'),
      title: 'SQL Employee Tracker',
      description: 'A comprehensive employee management system built using SQL, allowing businesses to efficiently organize and track their workforce. It provides features like employee records, departments, roles, and more.',
      link: 'https://github.com/mcamarco/SQL_Employee_Tracker',
      id: 3
    },
    {
      image: require('../images/weather dashboard.png'),
      title: 'Weather Dashboard',
      description: 'An intuitive web application that provides real-time weather updates and forecasts for any location. Users can search for specific cities and view detailed weather information including temperature, humidity, wind speed, and more. ',
      link: 'https://github.com/mcamarco/Weather-Dashboard',
      id: 4
    },
    {
      image: require('../images/svgLogoMaker.png'),
      title: 'SVG Logo Maker',
      description: 'This project offers a simple yet powerful tool for creating and editing SVG logos. Users can design unique logos by leveraging various shapes, colors, and text.',
      link: 'https://github.com/mcamarco/SVG_Logo_Maker',
      id: 5
    },
    {
       image: require('../images/textEditor.png'),
      title: 'PWA: Text Editor',
      description: 'A progressive web application (PWA) that functions as a feature-rich text editor. It provides a user-friendly interface with essential editing tools and supports offline access.',
      link: 'https://github.com/mcamarco/Text_Editor',
      id: 6
    },

  ]

  return (
    <div className="container">
      <div className='row cardDiv'>
        {projects.map(function (project) {
          return (
            <div className="col-md-4 mb-4 col-sm-12">
              <Project image={project.image} title={project.title} description={project.description} link={project.link} id={project.id} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Portfolio;