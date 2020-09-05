const initState = {
    authError: null
}

const authReducer = (state = initState, action) =>{
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log("Login successful")
            return {
                ...state,
                authError:null
            };

        case 'LOGIN_ERROR':
            console.log("Login Error", action.err)
            return {
                ...state,
                authError: "Login failed"
            };
        
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state

        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return {
                ...state,
                authError: null
            }

        case 'SIGNUP_ERROR':
            console.log('signup error', action)
            return {
                ...state,
                authError: action.err.message
            }

        default:
            return state;
    }
}
export default authReducer