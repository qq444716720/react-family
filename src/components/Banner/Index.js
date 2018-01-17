import React, { Component } from 'react'
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;

export default class Index extends Component {
    render() {
        return (
            <BannerAnim autoPlay style={{height: 158}}>
                <Element key="demo1">
                    <TweenOne animation={{ y: 30, opacity: 0, type: 'from' }}>
                        <img style={{width: '100%', height: 158}} src="http://ylxbucket.oss-cn-shanghai.aliyuncs.com/images/bg/formal/homepage/1515397464184lzyvh1.png" alt=""/>
                    </TweenOne>
                </Element>
                <Element key="demo2">
                    <TweenOne animation={{ y: 30, opacity: 0, type: 'from' }}>
                        <img style={{width: '100%', height: 158}} src="http://ylxbucket.oss-cn-shanghai.aliyuncs.com/images/bg/formal/homepage/1515397717258vl9xk6.png" alt=""/>
                    </TweenOne>
                </Element>
                <Element key="demo3">
                    <TweenOne animation={{ y: 30, opacity: 0, type: 'from' }}>
                        <img style={{width: '100%', height: 158}} src="http://ylxbucket.oss-cn-shanghai.aliyuncs.com/images/bg/formal/homepage/1515397769034c852jl.png" alt=""/>
                    </TweenOne>
                </Element>
            </BannerAnim>
        )
    }
}
