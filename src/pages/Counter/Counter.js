import React from 'react';
import {increment, decrement, reset} from 'actions/counter';
import {connect} from 'react-redux';

@connect(
    state=>({counter: state}),
    {increment, decrement, reset}
)
class Counter extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <div>当前计数为{this.props.counter.counter.count}</div>
                <button onClick={() => this.props.increment()}>自增
                </button>
                <button onClick={() => this.props.decrement()}>自减
                </button>
                <button onClick={() => this.props.reset()}>重置
                </button>
            </div>
        )
    }
}

export default Counter;