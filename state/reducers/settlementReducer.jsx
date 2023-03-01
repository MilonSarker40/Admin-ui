const initialState = {}

const settlementReducer = (state = initialState, action) => {
    switch(action.type) {
        case "settlemendIdSet":
            return {
                ...state,
                userSettlementId: action.payload,
            }
        default: 
            return state
    }
}

export default settlementReducer;