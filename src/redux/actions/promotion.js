export const GET_PROMOTION_BASE_LIST_REQUEST = "promotion/GET_PROMOTION_BASE_LIST_REQUEST";
export const GET_PROMOTION_BASE_LIST_SUCCESS = "promotion/GET_PROMOTION_BASE_LIST_SUCCESS";
export const GET_PROMOTION_BASE_LIST_FAIL = "promotion/GET_PROMOTION_BASE_LIST_FAIL";

export function getPromotionBaseList() {
    return {
        types: [GET_PROMOTION_BASE_LIST_REQUEST, GET_PROMOTION_BASE_LIST_SUCCESS, GET_PROMOTION_BASE_LIST_FAIL],
        promise: client => client.post(`http://106.15.94.49:8088/sale/promotion/promotion_getPromotionBaseList.do`)
    }
}

export const GET_PROMOTION_BASE_INFO_REQUEST = "promotion/GET_PROMOTION_BASE_INFO_REQUEST";
export const GET_PROMOTION_BASE_INFO_SUCCESS = "promotion/GET_PROMOTION_BASE_INFO_SUCCESS";
export const GET_PROMOTION_BASE_INFO_FAIL = "promotion/GET_PROMOTION_BASE_INFO_FAIL";

export function getPromotionBaseInfo(goodsPromotionId, goodsType) {
    return {
        types: [GET_PROMOTION_BASE_INFO_REQUEST, GET_PROMOTION_BASE_INFO_SUCCESS, GET_PROMOTION_BASE_INFO_FAIL],
        promise: client => client.post(`http://106.15.94.49:8088/sale/promotion/promotion_getPromotionBaseInfo.do?goodsPromotionId=${goodsPromotionId}&goodsType=${goodsType}`)
    }
}
