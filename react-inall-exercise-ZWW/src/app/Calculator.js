import React, { Component } from "react"
import { Link } from 'react-router-dom';
import './Calculator.less';

class Calculator extends Component {
    state = {
        display: '',
        buttonInputOperator: ['+', '-', '×'],
        buttonInputNumber: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'],
    }

    displayInput = (event) => {
        this.setState({
            display: this.state.display + event.target.value.toString(),
        })
    }

    displayCheck = () => {
        const inputRegex = /\d+[\+\-\*]\d+/;
        if (this.state.display.replace(inputRegex, '').length === 0) {
            return true;
        } else {
            return false;
        }
    }

    displayClear = () => {
        this.setState({
            display: '',
        })
    }

    displayOutput = () => {
        if (this.displayCheck()) {
            this.setState({
                display: eval(this.state.display),
            })
        } else {
            this.displayClear();
        }
    }

    render() {
        return (
            <div className="calculator">
                <h1>在线计算器</h1>
                <section>
                    <input type="text" className="display" readOnly={true} value={this.state.display} />
                    {this.state.buttonInputOperator.map((item, index) => <input key={index} type="button" className="inputOperator" value={item} onClick={this.displayInput} />)}
                    {this.state.buttonInputNumber.map((item, index) => <input key={index} type="button" className="inputNumber" value={item} onClick={this.displayInput} />)}
                    <button className="clear" onClick={this.displayClear}>Clear</button>
                    <button className="output" onClick={this.displayOutput}>=</button>
                </section>
                <Link to="/" className='homeLink'>回到主页</Link>
            </div>
        );
    }
}

export default Calculator;
