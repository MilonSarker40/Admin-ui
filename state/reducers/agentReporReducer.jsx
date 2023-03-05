const initialState = {}

const agentReportReducer = (state = initialState, action) => {
    switch(action.type) {
        case "agentReportIdSet":
            return {
                ...state,
                agentId: action.payload,
            }
        default: 
            return state
    }
}

export default agentReportReducer;