import React from 'react';
import ProjectSummary from "./ProjectSummary";
const ProjectList = ({projects})=>{
    return (
        <div className="project-list section">
        {/* projects &&.. to provide null if there is no projects at the start */}
            { projects && projects.map(project=>{
                return (
                    <ProjectSummary project={project} key={project.id} />
                )
            }) }
        </div>
    )
}
export default ProjectList;