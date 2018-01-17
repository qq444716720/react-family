import {
    GET_TOURIST_REQUEST, GET_TOURIST_SUCCESS, GET_TOURIST_FAIL,
    DELETE_TOURIST_REQUEST, DELETE_TOURIST_SUCCESS, DELETE_TOURIST_FAIL
} from '../actions/tourist';
import { Toast } from 'antd-mobile';
/*
* 初始化state
 */

const initState = {
    touristList: []
};
/*
* reducer
 */
export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_TOURIST_REQUEST:
            return {
                ...state
            };
        case GET_TOURIST_SUCCESS:
            return {
                ...state,
                touristList: action.result.data
            };
        case GET_TOURIST_FAIL:
            return {
                ...state
            };
        case DELETE_TOURIST_REQUEST:
            Toast.loading('正在删除...', 0);
            return {
                ...state
            };
        case DELETE_TOURIST_SUCCESS:
            Toast.hide();
            return {
                ...state
            };
        case DELETE_TOURIST_FAIL:
            Toast.hide();
            Toast.fail('删除失败！', 1);
            return {
                ...state
            };
        default:
            return state;
    }
}
