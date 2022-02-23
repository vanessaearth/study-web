/*
 * @Autor: yangjin
 * @Date: 2021-08-27 16:45:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-27 18:46:53
 * @Description: 棋盘
 */
import { Component } from 'react';
import Board from './Board'
class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true
        }
    }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        const current = history[history.length - 1]
        // slice() 方法创建了数组的一个副本
        const squares = current.squares.slice()
        if (calculateWinner(squares) || squares[i]) {
            return
        }
        squares[i] = this.state.XIsNext ? 'X' : 'O'
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            XIsNext: !this.state.XIsNext
        })

    }
    jumpTo(i) {
        this.setState({
            stepNumber: i,
            XIsNext: (i % 2) === 0
        })
    }
    render() {
        const history = this.state.history
        const current = history[this.state.stepNumber]
        console.log('cur', this.state.history, current)
        const winner = calculateWinner(current.squares);
        const moves = history.map((v, i) => {
            const desc = i ? 'go to ' + i : 'go to start'
            return (
                <li key={i}>
                    <button onClick={() => this.jumpTo(i)}>{desc}</button>
                </li>
            )
        })

        let status
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.XIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
export default Game;
