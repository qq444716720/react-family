import { GET_ROUTE_BASE_INFO_REQUEST, GET_ROUTE_BASE_INFO_SUCCESS, GET_ROUTE_BASE_INFO_FAIL } from 'actions/routeBaseInfo';
import { Toast } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

const initState = {
    routeBaseIfo: {
        routeFeatureListPart: [],
        routeTripAssisListPart: [],
        routeContainPart: {
            trafficFlg: 0
        },
        routeContainNoPart: {
            childTicketType: 0
        }
    }
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_ROUTE_BASE_INFO_REQUEST:
        Toast.loading('Loading...', 0);
            return {
                ...state
            };
        case GET_ROUTE_BASE_INFO_SUCCESS:
            Toast.hide();
            return {
                ...state,
                routeBaseIfo: action.result.data,
            };
        case GET_ROUTE_BASE_INFO_FAIL:
            Toast.hide();
            Toast.fail('请求失败！', 1);
            return {
                ...state
            };
        default:
            return state;
    }
}