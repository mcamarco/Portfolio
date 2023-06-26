import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Project from './project';

function Portfolio() {
  const projects = [
    {
      // image: require('../images/the19thHole.png'),
      title: 'The 19th Hole',
      description: "The 19th Hole is a web application that caters to golf enthusiasts and liquor lovers by providing a seamless solution for finding golf courses and liquor stores based on the user's zip code. With an intuitive interface, users can quickly access the top golf courses and nearby liquor distributors, saving them time and effort. The project meets the requirements of using a CSS framework other than Bootstrap, being deployed to GitHub Pages, incorporating server-side APIs, utilizing client-side storage, ensuring a responsive design, and maintaining a polished user interface.",
      link: 'https://github.com/mcamarco/the-19th-hole',
      deployedLink: 'https://mcamarco.github.io/the-19th-hole/',
      id: 1
    },
    {
      // image: require('../images/Portfoli-Yo Img.png'),
      title: 'Portfoli-Yo',
      description: 'Portfoli-Yo is a user-friendly platform designed for professionals to easily connect and expand their networks. It allows users to create personalized profiles with an "About Me" section, headshot, and social media links. The platform generates QR codes for convenient mobile use and enables users to post events and interact with other attendees. Built using Node.js, Express.js, MySQL, and Sequelize ORM, Portfoli-Yo meets the project requirements of a full-stack application. With its polished UI, responsiveness, and interactive features, Portfoli-Yo empowers professionals to showcase their portfolios and forge valuable connections in their industry.',
      link: 'https://github.com/mcamarco/portfoli-yo',
      deployedLink: 'https://mcamarco.github.io/Portfoli-Yo/',
      id: 2
    },
    {
      // image: require('../images/CamarcoConsultingLogo.png'),
      title: 'Consulting Website',
      description: "Camarco Consulting LLC is a MERN stack single-page application that serves as an interactive platform for clients to access consulting services and solutions. The website showcases Camarco Consulting's expertise, industry knowledge, and commitment to helping businesses achieve sustainable growth. With a clean and polished user interface, the website allows clients to explore services, learn about the company's capabilities, and engage with the consulting team. Built using React, GraphQL, Node.js, Express.js, MongoDB, and Mongoose ODM, the project meets the requirements of a MERN stack application. It emphasizes a polished UI, responsiveness, interactivity, and includes authentication using JWT for secure access.",
      link: 'https://github.com/mcamarco/consulting-website',
      deployedLink: 'http://www.camarcoconsulting.com',
      id: 3
    },
    {
      // image: require('../images/SQL_Employee_Tracker.png'),
      title: 'SQL Employee Tracker',
      description: "SQL Employee Tracker is a command-line application built using Node.js, Inquirer, and MySQL. It serves as a content management system (CMS) for managing a company's employee database. The application allows business owners to view and manage departments, roles, and employees, providing them with an organized and efficient way to plan, organize, and make informed decisions about their workforce. With its intuitive interface and seamless integration with the database, SQL Employee Tracker simplifies employee management, enabling businesses to streamline their operations and optimize resource allocation.",
      link: 'https://github.com/mcamarco/SQL_Employee_Tracker',
      // deployedLink: '',
      id: 4
    },
    {
      // image: require('../images/weather dashboard.png'),
      title: 'Weather Dashboard',
      description: "The Weather Dashboard is a browser-based application that allows travelers to conveniently access weather information for multiple cities. By searching for a city, users are presented with the current and future weather conditions for that location. The application utilizes the OpenWeather API to retrieve weather data and stores persistent data using localStorage. With a clean and polished user interface, the Weather Dashboard provides an intuitive and visually appealing experience for planning trips and staying informed about weather conditions.",
      link: 'https://github.com/mcamarco/Weather-Dashboard',
      // deployedLink: '',
      id: 5
    },
    {
      // image: require('../images/svgLogoMaker.png'),
      title: 'SVG Logo Maker',
      description: "SVG Logo Maker is a Node.js command-line application that empowers freelance web developers to create custom logos for their projects. The application prompts users to enter text, choose a color and shape, and generates an SVG file representing the logo. With SVG Logo Maker, developers can quickly and affordably generate professional logos without the need for a graphic designer. The application utilizes Inquirer for user input and Jest for unit testing, providing a seamless and efficient logo creation experience.",
      link: 'https://github.com/mcamarco/SVG_Logo_Maker',
      // deployedLink: '',
      id: 6
    }
  ];

 
  return (
    <div className="container">
      <div className="row cardDiv">
        {projects.map((project) => (
          <div className="col-md-4 mb-4 col-sm-12" key={project.id}>
            <Project
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              deployedLink={project.deployedLink}
              id={project.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;