export const GET_ROUTE_BASE_INFO_REQUEST = "routeBaseInfo/GET_ROUTE_BASE_INFO_REQUEST";
export const GET_ROUTE_BASE_INFO_SUCCESS = "routeBaseInfo/GET_ROUTE_BASE_INFO_SUCCESS";
export const GET_ROUTE_BASE_INFO_FAIL = "routeBaseInfo/GET_ROUTE_BASE_INFO_FAIL";

export function getRouteBaseIfo(goodsRouteId) {
    return {
        types: [GET_ROUTE_BASE_INFO_REQUEST, GET_ROUTE_BASE_INFO_SUCCESS, GET_ROUTE_BASE_INFO_FAIL],
        promise: client => client.get(`http://106.15.94.49:8088/sale/route/route_baseInfo.do?goodsRouteId=${goodsRouteId}`)
    }
}
