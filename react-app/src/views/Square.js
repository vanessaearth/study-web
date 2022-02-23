/*
 * @Autor: yangjin
 * @Date: 2021-08-27 16:45:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-27 18:43:13
 * @Description: button
 */
import { Component } from 'react';
class Square extends Component {
    render() {
        return (
            <button
                className="square"
                onClick={() => this.props.onClick()}>
               {this.props.value}
            </button>);
    }
}

export default Square;


// function Square (props){
//     return (
//         <button className="square" onClick={props.onClick}>
//             {props.value}
//         </button>
//     )
// }
