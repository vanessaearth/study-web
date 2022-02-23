/*
 * @Autor: yangjin
 * @Date: 2021-08-26 09:27:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-26 09:29:13
 * @Description: 实时显示鼠标位置
 */
import React from 'react'

class MouseTracker extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
          <h1>移动鼠标!</h1>
          <p>当前的鼠标位置是 ({this.state.x}, {this.state.y})</p>
        </div>
      );
    }
  }
  export default MouseTracker