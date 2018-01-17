import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { subChildrenNum, addChildrenNum, subAdultNum, addAdultNum, getPromotionPrice } from 'actions/promotionPrice';
import { connect } from 'react-redux';
import Contact from 'pages/Member/Contact/Index';
import Tourist from 'pages/Member/Tourist/Index';

require('./Index.css');

@connect(
	state => ({ data: state.promotionPrice }),
	{ subChildrenNum, addChildrenNum, subAdultNum, addAdultNum, getPromotionPrice }
)
export default class Index extends Component {
    constructor(props){
        super(props);
        let { goodsPromotionId, priceDate } = this.props.match.params;
        this.props.getPromotionPrice(goodsPromotionId, priceDate);
    }

    handlerChange(e){
		// this.setState({
		// 	[e.target.name]: e.target.value
		// });
	}

	handleSubmit(){
		// let selectChildrenNum = parseInt(localStorage.getItem('selectChildrenNum'));
		// let selectAdultNum = parseInt(localStorage.getItem('selectAdultNum'));
		// if(this.state.adultNum != selectAdultNum || this.state.childrenNum != selectChildrenNum){
		// 	Toast.info(`请选择${this.state.adultNum}位成人${this.state.childrenNum}位儿童`, 2);
		// 	return;
		// }
		// let contactsId = localStorage.getItem('selectedContactsId');
		// let touristIds = localStorage.getItem('selectedTouristIds');
		// fetch('http://rap.taobao.org/mockjs/30890/order/orderItemRoute_saveRouteOrder.do', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		// 	body: 'adultNum=' + this.state.adultNum + '&childNum=' + this.state.childrenNum +
		// 	'&useTime=' + this.state.date + '&contactsId=' + contactsId + '&touristString=' + touristIds
		// }).then(response => response.json()).then(json => {
		// 	Toast.hide();
		// 	if(json.success){
		// 		Toast.success(json.msg, 2);
		// 		window.location.href = 'http://wx.yjylx.com/travelPayment/'+ json.orderItemId +'_4.html'
		// 	}else {
		// 		Toast.fail(json.msg, 2);
		// 	}
		// });
		
		// useTimeTmp=date
		// goodsRouteId=goodsId
	}

    render() {
        const { adultNum, childrenNum, adultPriceNew, childrenPriceNew, singlePriceNew, totalPrice, promotionName, priceDate, sold, goodsPromotionId } = this.props.data;
        return (
            <div className="submitRouteOrder">
                <div className="warpper">
                    <div className="content-top">
                        <div className="content-name">
                            <span dangerouslySetInnerHTML={{ __html: `${promotionName}` }}></span>
                        </div>
                        <div className="content-price">
                            <span className="price-left"><i>￥</i>{totalPrice}</span>
                            <span className="price-msg">(此价格不包含租车，拼车价格)</span>
                            <span className="price-right"><i>{sold}</i>份已售</span>
                        </div>
                        <div className="out-date">
                            <span>出行日期</span>
                            <Link to={`/calendarPrice/${goodsPromotionId}`}><input type="text" readOnly="readOnly" value={priceDate} /></Link>
                            <i>&gt;</i>
                        </div>
                    </div>

                    <div className="person-num">
                        <div className="num-item">
                            <span>成人</span>
                            <span className="aduprc"><i>￥</i>{adultPriceNew}元</span>
                            <div className="adult-num">
                                <div className="des-num" onClick={() => this.props.subAdultNum()}>-</div>
                                <input type="text" value={adultNum} />
                                <div className="add-num" onClick={() => this.props.addAdultNum()}>+</div>
                            </div>
                        </div>
                        <div className="num-item">
                            <span>儿童</span>
                            <span className="aduprc"><i>￥</i>{childrenPriceNew}元</span>
                            <div className="adult-num">
                                <div className="des-num" onClick={() => this.props.subChildrenNum()}>-</div>
                                <input type="text" value={childrenNum} />
                                <div className="add-num" onClick={() => this.props.addChildrenNum()}>+</div>
                            </div>
                        </div>
                        <div className="num-item">
                            <span>单房差</span>
                            <span className="aduprc"><i>￥</i>{singlePriceNew}元</span>
                        </div>
                    </div>

                    <div className="person-num">
                        <Contact />
                        <Tourist />
                    </div>

                    <div className="submit-order" onClick={this.handleSubmit.bind(this)}>立即购买</div>
                </div>
            </div>
        )
    }
}
