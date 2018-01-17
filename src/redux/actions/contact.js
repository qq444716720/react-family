export const GET_CONTACTS_ONE_REQUEST = "contact/GET_CONTACTS_ONE_REQUEST";
export const GET_CONTACTS_ONE_SUCCESS = "contact/GET_CONTACTS_ONE_SUCCESS";
export const GET_CONTACTS_ONE_FAIL = "contact/GET_CONTACTS_ONE_FAIL";
export function getContactsOne(contactsId) {
    return {
        types: [GET_CONTACTS_ONE_REQUEST, GET_CONTACTS_ONE_SUCCESS, GET_CONTACTS_ONE_FAIL],
        promise: client => client.post(`http://106.15.94.49:8088/member/contacts/contacts_getContactsOne.do?contactsId=${contactsId}`)
    }
}

export const GET_CONTACTS_LIST_REQUEST = "contact/GET_CONTACTS_LIST_REQUEST";
export const GET_CONTACTS_LIST_SUCCESS = "contact/GET_CONTACTS_LIST_SUCCESS";
export const GET_CONTACTS_LIST_FAIL = "contact/GET_CONTACTS_LIST_FAIL";
export function getContactsList() {
    return {
        types: [GET_CONTACTS_LIST_REQUEST, GET_CONTACTS_LIST_SUCCESS, GET_CONTACTS_LIST_FAIL],
        promise: client => client.post(`http://106.15.94.49:8088/member/contacts/contacts_getContactsList.do`)
    }
}

export const DELETE_CONTACTS_REQUEST = "contact/DELETE_CONTACTS_REQUEST";
export const DELETE_CONTACTS_SUCCESS = "contact/DELETE_CONTACTS_SUCCESS";
export const DELETE_CONTACTS_FAIL = "contact/DELETE_CONTACTS_FAIL";
export function deleteContacts(contactsId) {
    return {
        types: [DELETE_CONTACTS_REQUEST, DELETE_CONTACTS_SUCCESS, DELETE_CONTACTS_FAIL],
        promise: client => client.post(`http://106.15.94.49:8088/member/contacts/contacts_deleteContacts.do?contactsId=${contactsId}`)
    }
}

