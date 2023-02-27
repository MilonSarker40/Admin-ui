const initialState = {
    isLoggedin : false,
}

const authReducers = (state = initialState, action) => {
    switch(action.type) {
        case "postLogin" : 
            return {
                ...state,
                loginData: action.payload,
                isLoggedin: true,
            }
        case "authLogin" :
            return {
                ...state,
                loginData: action.payload,
                isLoggedin: true,
            }
        case "loggedStatus" : 
            return {
                ...state
            }
        case "authLogout":
            return {
                ...state,
                loginData: [],
                isLoggedin: false,
            }
        default:
            return state
    }
}

export default authReducers;