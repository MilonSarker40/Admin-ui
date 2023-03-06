const initialState = {}

const trxReducer = (state = initialState, action) => {
    switch(action.type) {
        case "setTrxId":
            return {
                ...state,
                trxId: action.payload,
            }
        default: 
            return state
    }
}

export default trxReducer;