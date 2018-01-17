import { GET_PROMOTION_PRICE_REQUEST, GET_PROMOTION_PRICE_SUCCESS, GET_PROMOTION_PRICE_FAIL, ADD_ADULT_NUM, SUB_ADULT_NUM, ADD_CHILDREN_NUM, SUB_CHILDREN_NUM } from 'actions/promotionPrice';
import { Toast } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import moment from 'moment';

const initState = {
    adultNum: 2,
    childrenNum: 0,
    adultPrice: 150,
    adultPriceNew: 300,
    totalPrice: 300,
    childrenPrice: 50,
    childrenPriceNew: 0,
    singlePrice: 60,
    singlePriceNew: 0,
    promotionName: '',
    goodsPromotionId: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_PROMOTION_PRICE_REQUEST:
        Toast.loading('Loading...', 0);
            return {
                ...state
            };
        case GET_PROMOTION_PRICE_SUCCESS:
            Toast.hide();
            const promotionPrice = action.result.data.promotionPrice;
            const promotionBase = action.result.data.promotionBase;
            return {
                ...state,
                adultPrice: promotionPrice.promotionPrice,
                adultPriceNew: promotionPrice.promotionPrice*2,
                childrenPrice: promotionPrice.kidPrice,
                singlePrice: promotionPrice.singleRoomPrice,
                goodsPromotionId: promotionPrice.goodsPromotionId,
                promotionName: promotionBase.promotionName,
                sold: promotionBase.promotionCount - promotionBase.surplusPromotion,
                priceDate: moment(promotionPrice.priceDate).format('YYYY-MM-DD')
            };
        case GET_PROMOTION_PRICE_FAIL:
            Toast.hide();
            Toast.fail('请求失败！', 1);
            return {
                ...state
            };
        case ADD_ADULT_NUM:
            return {
                ...state,
                adultNum: state.adultNum + 1,
                singlePriceNew: (state.adultNum + 1) % 2 > 0 ? state.singlePrice : 0,
                adultPriceNew: state.adultPrice * (state.adultNum + 1),
                totalPrice: ((state.adultNum + 1) % 2 > 0 ? state.singlePrice : 0) + (state.adultPrice * (state.adultNum + 1)) + state.childrenPriceNew
            };
        case SUB_ADULT_NUM:
            return {
                ...state,
                adultNum: state.adultNum - 1 < 1 ? 1 : state.adultNum - 1,
                singlePriceNew: (state.adultNum - 1 < 1 ? 1 : state.adultNum - 1) % 2 > 0 ? state.singlePrice : 0,
                adultPriceNew: state.adultPrice * (state.adultNum - 1 < 1 ? 1 : state.adultNum - 1),
                totalPrice: ((state.adultNum - 1 < 1 ? 1 : state.adultNum - 1) % 2 > 0 ? state.singlePrice : 0) + (state.adultPrice * (state.adultNum - 1 < 1 ? 1 : state.adultNum - 1)) + state.childrenPriceNew
            };
        case ADD_CHILDREN_NUM:
            return {
                ...state,
                childrenNum: state.childrenNum + 1,
                childrenPriceNew: state.childrenPrice * (state.childrenNum + 1),
                totalPrice: (state.childrenPrice * (state.childrenNum + 1)) + state.singlePriceNew + state.adultPriceNew
            };
        case SUB_CHILDREN_NUM:
            return {
                ...state,
                childrenNum: state.childrenNum - 1 < 0 ? 0 : state.childrenNum - 1,
                childrenPriceNew: state.childrenPrice * (state.childrenNum - 1 < 0 ? 0 : state.childrenNum - 1),
                totalPrice: (state.childrenPrice * (state.childrenNum - 1 < 0 ? 0 : state.childrenNum - 1)) + state.singlePriceNew + state.adultPriceNew
            };
        default:
            return state;
    }
}