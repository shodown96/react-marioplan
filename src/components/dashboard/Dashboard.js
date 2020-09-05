import React, { Component } from 'react';
import  Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'


class Dashboard extends Component {
    render(){
        const { projects, auth, notifications } = this.props;
        // console.log(auth.uid);
        if (!auth.uid) return <Redirect to="/signin"/>
        return (
            <div className="dashboard container mb-4">
                <div className="row">
                    <div className="col-sm-12 col-md-8">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        // state.project because we combined 2 reducers auth, project.
        // projects:state.project.projects
        projects:state.firestore.ordered.projects,
        auth:state.firebase.auth,
        notifications:state.firestore.ordered.notifications
    }
}
export default compose(
    firestoreConnect([
        {collection:"projects", orderBy:['createdAt', 'desc']},
        {collection:"notifications", limit: 3, orderBy:['time', 'desc']}
    ]),
    connect(mapStateToProps),
)(Dashboard);

// export default compose(
//     firestoreConnect(() => ['projects', 'notifications']),
//     connect(mapStateToProps)
//     )(Dashboard)