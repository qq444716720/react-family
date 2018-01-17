import React from 'react'
import { getContactsOne } from 'actions/contact';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
require('./Index.css')

@connect(
    state => ({ contact: state.contact }),
    { getContactsOne }
)
export default class Index extends React.Component {
    constructor(props) {
        super(props);
        let contactsId = localStorage.getItem('selectedContactsId');
        if(!contactsId){
            contactsId = '';
        }
        this.props.getContactsOne(contactsId);
    }

    render() {
        let { contactsName, mobile } = this.props.contact;
        return (
            <div className="contact">
                <div className="top">
                    <div className="title">联系人</div>
                    <Link to={'/selectContact'}><div className="select">选择联系人</div></Link>
                </div>
                <div className="item">
                    <span>姓名：</span>
                    <input type="text" readOnly className="person-name" value={contactsName} />
                </div>
                <div className="item">
                    <span>手机：</span>
                    <input type="text" readOnly className="person-name" value={mobile} />
                </div>
            </div>
        )
    }
}