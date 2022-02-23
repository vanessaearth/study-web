/*
 * @Autor: yangjin
 * @Date: 2021-08-27 16:38:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-27 16:38:04
 * @Description: 
 */
import React from 'react'

class ShoppingList extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }
  export default ShoppingList