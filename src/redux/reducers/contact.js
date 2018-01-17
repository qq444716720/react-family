import {
    GET_CONTACTS_ONE_REQUEST, GET_CONTACTS_ONE_SUCCESS, GET_CONTACTS_ONE_FAIL,
    GET_CONTACTS_LIST_REQUEST, GET_CONTACTS_LIST_SUCCESS, GET_CONTACTS_LIST_FAIL,
    DELETE_CONTACTS_REQUEST, DELETE_CONTACTS_SUCCESS, DELETE_CONTACTS_FAIL
} from '../actions/contact';
import { Toast } from 'antd-mobile';
/*
* 初始化state
 */

const initState = {
    contactsId: '',
    contactsName: '',
    mobile: '',
    contactList: []
};
/*
* reducer
 */
export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_CONTACTS_ONE_REQUEST:
            return {
                ...state
            };
        case GET_CONTACTS_ONE_SUCCESS:
            const data = action.result.data;
            return {
                ...state,
                contactsId: data.contactsId,
                contactsName: data.contactsName,
                mobile: data.mobile
            };
        case GET_CONTACTS_ONE_FAIL:
            return {
                ...state
            };
        case GET_CONTACTS_LIST_REQUEST:
            Toast.loading('Loading...', 0);
            return {
                ...state
            };
        case GET_CONTACTS_LIST_SUCCESS:
            Toast.hide();
            return {
                ...state,
                contactList: action.result.data
            };
        case GET_CONTACTS_LIST_FAIL:
            Toast.hide();
            Toast.fail('联系人列表失败！', 1);
            return {
                ...state
            };
        case DELETE_CONTACTS_REQUEST:
            Toast.loading('正在删除...', 0);
            return {
                ...state
            };
        case DELETE_CONTACTS_SUCCESS:
            Toast.hide();
            return {
                ...state
            };
        case DELETE_CONTACTS_FAIL:
            Toast.hide();
            Toast.fail('删除失败！', 1);
            return {
                ...state
            };
        default:
            return state;
    }
}
