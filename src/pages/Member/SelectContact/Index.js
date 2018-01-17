import React from 'react'
import { NavBar, Icon , SwipeAction , List, Radio, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
import { Link } from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';
import { getContactsList, deleteContacts } from 'actions/contact';
import { connect } from 'react-redux';

const RadioItem = Radio.RadioItem;

@connect(
    state => ({ contactList: state.contact.contactList }),
    { getContactsList, deleteContacts }
)
export default class Index extends React.Component {

    constructor(props) {
        super(props);
        this.props.getContactsList();
        this.state = {
            value: localStorage.getItem('selectedContactsId')
        }
    }

    onChange = (value) => {
        this.setState({
          value
        })
    };

    render() {
        return (
            <div className="select-contact">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.goBack()}
                    rightContent={[
                        <div onClick={() => {
                            if(!this.state.value){
                                Toast.info('请选择联系人', 1);
                            }else{
                                localStorage.setItem('selectedContactsId', this.state.value);
                                this.props.history.goBack();
                            }
                        }}>完成</div>
                    ]}
                >选择联系人</NavBar>
                <List renderHeader={() => '请选择联系人'}>
                    <QueueAnim delay={300} className="queue-simple">
                    {
                        this.props.contactList.map((item, index) => (
                            <SwipeAction key={index}
                                style={{ backgroundColor: 'gray' }}
                                autoClose
                                right={[
                                    {
                                        text: '删除',
                                        onPress: () => {
                                            if(item.contactsId === localStorage.getItem('selectedContactsId')){
                                                localStorage.setItem('selectedContactsId', '');
                                                this.setState({
                                                    value: ''
                                                });
                                            }
                                            this.props.deleteContacts(item.contactsId);
                                            location.reload();
                                        },
                                        style: { backgroundColor: '#F4333C', color: 'white' }
                                    },
                                    {
                                        text: '编辑',
                                        onPress: () => {
                                            localStorage.setItem('editorContact', JSON.stringify(item));
                                            this.props.history.push('/updateContact/update');
                                        },
                                        style: { backgroundColor: '#108EE9', color: 'white' }
                                    }
                                ]}
                                >
                                <RadioItem checked={this.state.value == item.contactsId} onChange={() => this.onChange(item.contactsId)}>
                                    <div>{item.contactsName}</div>
                                    <div>{item.mobile}</div>
                                </RadioItem>
                            </SwipeAction>
                        ))
                    }
                    <WhiteSpace />
                    <WhiteSpace />
                    <WhiteSpace />
                    <WingBlank>
                        <Link to={'/updateContact/add'}><Button type="primary">新增联系人</Button></Link>
                    </WingBlank>
                    </QueueAnim>
                </List>
            </div>
        )
    }
}