export const createProject = (project)=>{
    // return{
    //     type:"ADD_PROJECT",
    //     project:project
    // }
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        })
        .then(()=>{
            dispatch({type:"CREATE_PROJECT", project})
        })
        .catch((err)=>{
            dispatch({type:"CREATE_PROJECT_ERROR", err})
        })
        // add async call to db
        // dispatch({type:"CREATE_PROJECT", project})
    }
}