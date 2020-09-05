import React from 'react'
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment'

// export default function ProjectDetails(props) {
//     const id = props.match.params.id;
//     return (
//         <div className="container section project-details">
//             <div className="card z-depth-0">
//                 <div className="card-body">
//                     <p className="card-title">ProjectTitle - {id}</p>
//                     <p className="card-text">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//                         Dolorem ex asperiores nam consequatur, nobis error cumque 
//                         iste blanditiis, sint eius repellat recusandae quaerat facilis, 
//                         culpa id voluptatem similique vel. Quidem!
//                     </p>
//                 </div>
//                 <div className="card-footer ">
//                     <div className="card-text mx-2 d-inline-block">Posted By TheNetNinja</div>
//                     <div className="card-text mx-2 d-inline-block">Sept 1, 2020</div>
//                 </div>
//             </div>
//         </div>
//     )
// }

const ProjectDetails = (props)=>{
        const id = props.match.params.id;
        console.log(props)
        const { project, auth } = props
        if(!auth.uid) return <Redirect to="/signin"/>
        if (project) {
            return (
                <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div className="card-body">
                            <h4 className="card-title">{project.title} - {id}</h4>
                            <p className="card-text">{project.content}</p>
                        </div>
                        <div className="card-footer ">
                            <div className="card-text mx-2 d-inline-block">Posted By {project.authorFirstName} {project.authorLastName}</div>
                            <div className="card-text mx-2 d-inline-block">{moment(project.createdAt.toDate()).calendar()}</div>
                        </div>
                    </div>
                </div>
                    
                )
            }
            else{
                return(
                    <div className="container">
                        <p>Loading Project...</p>
                    </div>
                )
            }
    }

const mapStateToProps = (state, ownProps)=>{
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project,
        auth:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection:"projects"}]),
)(ProjectDetails)