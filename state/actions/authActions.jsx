export const postLogin = (userData) => {
    return {
        type: "postLogin",
        payload: userData
    }
}

export const authLogin = (userData) => {
    return {
        type: "authLogin",
        payload: userData
    }
}

export const loggedStatus = () => {
    return {
        type: "loggedStatus"
    }
}

export const authLogout = (data) => {
    return {
        type: "authLogout",
        payload: []
    }
}

export const settlementIdSet = (uid) => {
    return {
        type: "settlemendIdSet",
        payload: uid
    }
}

export const agentReportIdSet = (uid) => {
    return {
        type: "agentReportIdSet",
        payload: uid
    }
}

export const apiIdSet = (aid) => {
    return {
        type: "apiIdSet",
        payload: aid
    }
}

export const setTrxId = (tid) => {
    return {
        type: "setTrxId",
        payload: tid
    }
}

export const dealerIdSet = (did) => {
    return {
        type: "dealerIdSet",
        payload: did
    }
}

export const subDealerIdSet = (sid) => {
    return {
        type: "subDealerIdSet",
        payload: sid
    }
}

export const orderHistoryIdSet = (oid) => {
    return {
        type: "orderHistoryIdSet",
        payload: oid
    }
}

export const salesIdSet = (sid) => {
    return {
        type: "salesIdSet",
        payload: sid
    }
}

export const trxUserIdSet = (tid) => {
    return {
        type: "trxUserIdSet",
        payload: tid
    }
}

export const userListIdSet = (uid) => {
    return {
        type: "userListIdSet",
        payload: uid
    }
}