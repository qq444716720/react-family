import React from 'react';
import { Tabs } from 'antd-mobile';
import Banner from 'components/Banner';

require('pages/common/main.css');
require('./Index.css');
let changeImg = require('./images/change.png');

const tabs = [
    { title: '火车票' },
    { title: '飞机票' },
    { title: '酒店' }
];

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-page">
                <div>
                    <Tabs tabs={tabs} initalPage={'t2'}>
                        <div className="index-page">
                            <Banner />
                        </div>
                        <div className="index-page">
                            <Banner />
                            <div className="fix-content">
                                <div className="fix-content-item">
                                    <div className="content-item-left">武汉</div>
                                    <div className="content-item-img">
                                        <img src={changeImg} />
                                    </div>
                                    <div className="content-item-right">武汉</div>
                                </div>
                            </div>
                        </div>
                        <div className="index-page">
                            <Banner />
                        </div>
                    </Tabs>
                </div>
            </div>
        )
    }
}