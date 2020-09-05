const initState = {
    projects: [
        {id: '1', title: 'Help me find Yoshi', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
        {id: '2', title: 'Collect all the stars', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
        {id: '3', title: 'Egg Hunt with Yoshi', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
      ]
}

const projectReducer = (state = initState, action) =>{
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log("Created Project", action.project)
            return state;

        case 'CREATE_PROJECT_ERROR':
            console.log("Create Project Error", action.err)
            return state;
    
        default:
            return state;
    }
}
export default projectReducer