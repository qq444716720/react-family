import React from 'react';
// import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { getPromotionBaseInfo } from 'actions/promotion';
import { connect } from 'react-redux';

import Banner from 'components/Banner';
// import 'antd/dist/antd.css';
// import Carousel from 'antd/lib/carousel';
// import 'antd/lib/carousel/style/css';
import Timing from 'components/Timing';
import RouteDetail from './subpage/RouteDetail';
// import TicketDetail from '../ticket/TicketDetail';

require('./Index.css');

let clockImage = require('./images/time_20171205143720.png');
let kefuImage = require('./images/kefu_20171205143725.png');

@connect(
	state => ({ promotionBaseInfo: state.promotion.promotionBaseInfo }),
	{ getPromotionBaseInfo }
)
export default class Index extends React.Component {

	constructor(props) {
		super(props);
		const { goodsPromotionId, goodsType } = this.props.match.params;
		this.props.getPromotionBaseInfo(goodsPromotionId, goodsType);
		this.state = {
			timeoutFlg: true
		}
	}


	componentDidMount() {
		
		// fetch('http://106.15.94.49:8088/sale/promotion/promotion_getPromotionBaseInfo.do', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		// 	body: 'goodsPromotionId=' + goodsPromotionId + '&goodsType=' + goodsType
		// }).then(response => response.json()).then(json => {
		// 	this.setState({
		// 		promotionBase: json.promotionBase,
		// 		banners: json.banners
		// 	});
		// });

		// fetch('http://106.15.94.49:8088/sale/promotion/price_getPromotionPriceList.do', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		// 	body: 'goodsPromotionId=' + goodsPromotionId
		// }).then(response => response.json()).then(json => {
		// 	localStorage.setItem('datePriceJson', JSON.stringify(json));
		// });
	}

	handleTime() {
		this.setState({
			timeoutFlg: false
		});
	}


	render() {
		const { goodsType, goodsId } = this.props.match.params;
		const baseInfo = this.props.promotionBaseInfo;
		let content = '';
		if(goodsType === '4') {
			content = <RouteDetail goodsId={goodsId} />
		}else if(goodsType === '1') {
			// content = <TicketDetail goodsId={goodsId} />
		}

		return (
			<div className="producttDetail">
				<div>
					<Banner />
					<div className="pdiv">
						<div className="price-container">
							<div className="dwell">
								<img src={clockImage} alt="clock" />
								<span className="price">
									<span className="medium">￥</span>
									{baseInfo.promotionPrice}
									<span className="medium">元/人</span>
								</span>
							</div>
							<div className="original">
								<div>
									<div><s className="original-title">原价：</s></div>
									<div>
										<s className="original-price">
											<span className="small">￥</span>{baseInfo.promotionOldPrice}<span className="small">元/人</span>
										</s>
									</div>
								</div>
							</div>
						</div>
						<div className="time-container">
							<Timing handleTime={this.handleTime.bind(this)} time={baseInfo.promotionToDate} />
						</div>
					</div>
					<div className="route-name">
						<span dangerouslySetInnerHTML={{ __html: `${baseInfo.promotionName}` }}></span>
					</div>
					{content}
					<div className="foot">
						<div className="left">
							<div><img src={kefuImage} alt="" /></div>
							<div><span>咨询</span></div>
						</div>
						{
							this.state.timeoutFlg
								?
								<Link to={`/orderRoute/${baseInfo.goodsPromotionId}`}><div className="right">立即购买</div></Link>
								:
								<div className="timeoutBuy">已结束</div>
						}
					</div>
				</div>
			</div>

		);
	}
}