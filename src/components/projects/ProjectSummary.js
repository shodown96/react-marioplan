import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ProjectSummary = ({project})=>{
    // const id = Math.floor(Math.random()*10)
    // console.log(id)
    return (
            <div className="card z-depth-0 mb-4 project-summary">
                <div className="card-body">
                    <Link to={"/project/"+project.id}><h5 className="card-title">{project.title}</h5></Link>
                    <p className="card-text mb-0">Posted by {project.authorFirstName} {project.authorLastName}</p>
                    <p className="card-text mb-0">{moment(project.createdAt.toDate()).calendar()}</p>
                </div>
            </div>
    )
}
export default ProjectSummary;