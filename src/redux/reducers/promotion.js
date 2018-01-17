import { 
    GET_PROMOTION_BASE_LIST_REQUEST, GET_PROMOTION_BASE_LIST_SUCCESS, GET_PROMOTION_BASE_LIST_FAIL,
    GET_PROMOTION_BASE_INFO_REQUEST, GET_PROMOTION_BASE_INFO_SUCCESS, GET_PROMOTION_BASE_INFO_FAIL
} from '../actions/promotion';

import { Toast } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
/*
* 初始化state
 */

const initState = {
    promotionBaseList: {
        pageList: [],
        pageCount: 0,
    },
    promotionBaseInfo: {},
    banners: []
};
/*
* reducer
 */
export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_PROMOTION_BASE_LIST_REQUEST:
            Toast.loading('Loading...', 0);
            return {
                ...state
            };
        case GET_PROMOTION_BASE_LIST_SUCCESS:
            Toast.hide();
            return {
                ...state,
                promotionBaseList: action.result.data,
            };
        case GET_PROMOTION_BASE_LIST_FAIL:
            Toast.hide();
            Toast.fail('请求失败！', 1);
            return {
                ...state
            };

        case GET_PROMOTION_BASE_INFO_REQUEST:
            return {
                ...state
            };
        case GET_PROMOTION_BASE_INFO_SUCCESS:
            return {
                ...state,
                promotionBaseInfo: action.result.data.promotionBase,
                banners: action.result.data.banners
            };
        case GET_PROMOTION_BASE_INFO_FAIL:
            return {
                ...state
            };
        default:
            return state;
    }
}
