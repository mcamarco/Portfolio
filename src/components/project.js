import React from 'react';

function Project(props) {
  return (
    <div>
      <div className="card">
        {/* <img src={props.image} className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.link} className="btn btn-primary">GitHub</a>
          {props.deployedLink && (
            <a href={props.deployedLink} className="btn btn-primary">Deployed Site</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
