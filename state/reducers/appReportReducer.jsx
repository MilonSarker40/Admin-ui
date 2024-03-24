const initialState = {}

const appReportReducer = (state = initialState, action) => {
    switch(action.type) {
        case "orderHistoryIdSet":
            return {
                ...state,
                orderHistoryId: action.payload,
            }
        case "salesIdSet":
            return{
                ...state,
                salesId: action.payload
            }
        case "trxUserIdSet":
            return{
                ...state,
                trxUserId: action.payload
            }
        case "userListIdSet":
            return{
                ...state,
                userListId: action.payload
            }
        default: 
            return state
    }
}

export default appReportReducer;