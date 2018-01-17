export const GET_TOURIST_REQUEST = "tourist/GET_TOURIST_REQUEST";
export const GET_TOURIST_SUCCESS = "tourist/GET_TOURIST_SUCCESS";
export const GET_TOURIST_FAIL = "tourist/GET_TOURIST_FAIL";
export function getTourist(touristIds) {
    return {
        types: [GET_TOURIST_REQUEST, GET_TOURIST_SUCCESS, GET_TOURIST_FAIL],
        promise: client => client.post(`http://106.15.94.49:8088/member/tourist/tourist_getTourist.do?touristId=${touristIds}`)
    }
}


export const DELETE_TOURIST_REQUEST = "tourist/DELETE_TOURIST_REQUEST";
export const DELETE_TOURIST_SUCCESS = "tourist/DELETE_TOURIST_SUCCESS";
export const DELETE_TOURIST_FAIL = "tourist/DELETE_TOURIST_FAIL";
export function deleteTourist(touristId) {
    return {
        types: [DELETE_TOURIST_REQUEST, DELETE_TOURIST_SUCCESS, DELETE_TOURIST_FAIL],
        promise: client => client.post(`http://106.15.94.49:8088/member/tourist/tourist_deleteTourist.do?touristId=${touristId}`)
    }
}
