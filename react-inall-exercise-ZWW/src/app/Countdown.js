import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Countdown.less'

class Countdown extends Component {
    state = {
        input: null,
        buttonClick: false,
        displayNum: -parseInt(Number.MAX_VALUE),
        display: 'Start',
        timer: null,
    }

    componentWillUnmount() {
        clearInterval(this.state.timer)
    }

    countdownInput = (event) => {
        this.setState({
            input: event.target.value,
        })
    }

    countdownStart = () => {
        const inputNum = parseInt(this.state.input);
        if (inputNum < 1) {
            this.setState({
                displayNum: -parseInt(Number.MAX_VALUE),
                display: 'Error ' + parseInt(this.state.input).toString(),
            })
        } else {
            if (inputNum === 1) {
                this.setState({
                    displayNum: parseInt(this.state.input),
                    display: parseInt(this.state.input).toString() + ' Second',
                })
            } else {
                this.setState({
                    displayNum: parseInt(this.state.input),
                    display: parseInt(this.state.input).toString() + ' Seconds',
                })
            }
            this.state.timer = setInterval(this.countdownDisplay, 1000);
        }
    }

    countdownDisplay = () => {
        if (this.state.displayNum === 2) {
            this.setState({
                displayNum: this.state.displayNum - 1,
                display: (this.state.displayNum - 1).toString() + ' Second',
            })
        } else if (this.state.displayNum > 2) {
            this.setState({
                displayNum: this.state.displayNum - 1,
                display: (this.state.displayNum - 1).toString() + ' Seconds',
            })
        } else {
            this.setState({
                displayNum: -parseInt(Number.MAX_VALUE),
                display: 'End',
            })
            clearInterval(this.state.timer)
        }
    }

    render() {
        return (
            <div className="countdown">
                <h1>在线倒计时器</h1>
                <section className="content">
                    <section className="leftHalf">
                        <label>设置时间</label>
                        <input className="input" type="text" value={this.state.input} onChange={this.countdownInput} />
                        <button className='buttonClick' onClick={this.countdownStart} disabled={this.state.displayNum !== -parseInt(Number.MAX_VALUE)}>Start</button>
                    </section>
                    <section className="rightHalf">
                        <input className="display" type="text" readOnly={true} value={this.state.display} />
                    </section>
                </section>
                <Link to="/" className='homeLink'>回到主页</Link>
            </div>
        )
    };
}

export default Countdown;
