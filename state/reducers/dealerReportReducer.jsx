const initialState = {}

const dealerReportReducer = (state = initialState, action) => {
    switch(action.type) {
        case "dealerIdSet":
            return {
                ...state,
                dealerId: action.payload,
            }
        default: 
            return state
    }
}

export default dealerReportReducer;