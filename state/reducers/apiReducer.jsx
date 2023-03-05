const initialState = {}

const apiReducer = (state = initialState, action) => {
    switch(action.type) {
        case "apiIdSet":
            return {
                ...state,
                apiId: action.payload,
            }
        default: 
            return state
    }
}

export default apiReducer;