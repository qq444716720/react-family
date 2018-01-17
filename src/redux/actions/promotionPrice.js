export const GET_PROMOTION_PRICE_REQUEST = "promotionPrice/GET_PROMOTION_PRICE_REQUEST";
export const GET_PROMOTION_PRICE_SUCCESS = "promotionPrice/GET_PROMOTION_PRICE_SUCCESS";
export const GET_PROMOTION_PRICE_FAIL = "promotionPrice/GET_PROMOTION_PRICE_FAIL";
export const ADD_ADULT_NUM = "promotionPrice/ADD_ADULT_NUM";
export const SUB_ADULT_NUM = "promotionPrice/SUB_ADULT_NUM";
export const ADD_CHILDREN_NUM = "promotionPrice/ADD_CHILDREN_NUM";
export const SUB_CHILDREN_NUM = "promotionPrice/SUB_CHILDREN_NUM";

export function getPromotionPrice(goodsPromotionId, priceDate) {
    if(!priceDate){
        priceDate = '';
    }
    return {
        types: [GET_PROMOTION_PRICE_REQUEST, GET_PROMOTION_PRICE_SUCCESS, GET_PROMOTION_PRICE_FAIL],
        promise: client => client.post(`http://106.15.94.49:8088/sale/promotion/price_getPromotionPriceOne.do?goodsPromotionId=${goodsPromotionId}&priceDate=${priceDate}`)
    }
}


export function addAdultNum() {
    return {type: ADD_ADULT_NUM}
}

export function subAdultNum() {
    return {type: SUB_ADULT_NUM}
}

export function addChildrenNum() {
    return {type: ADD_CHILDREN_NUM}
}

export function subChildrenNum() {
    return {type: SUB_CHILDREN_NUM}
}
