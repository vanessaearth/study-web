/*
 * @Autor: yangjin
 * @Date: 2021-08-27 16:45:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-27 18:29:52
 * @Description: 9个方块
 */

import React from 'react';
import Square from './Square'
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />)
    }
    render() {
        console.log('prop',this.props)
        return (

            <div>
                <div>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

            </div>

        )
    }
}

export default Board