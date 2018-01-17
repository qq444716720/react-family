import {combineReducers} from "redux";

import promotion from 'reducers/promotion';
import routeBaseInfo from 'reducers/routeBaseInfo';
import promotionPrice from 'reducers/promotionPrice';
import contact from 'reducers/contact';
import tourist from 'reducers/tourist';
import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';


export default combineReducers({
    promotion,
    routeBaseInfo,
    promotionPrice,
    contact,
    tourist,
    counter,
    userInfo
});