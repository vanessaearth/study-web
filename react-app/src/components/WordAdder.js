/*
 * @Autor: yangjin
 * @Date: 2021-08-24 09:53:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-24 10:13:29
 * @Description: 错误的示范，PureComponent只能进行钱比较
 */
import React from 'react';
class ListOfWords extends React.PureComponent {
    render() {
      return <div>{this.props.words.join(',')}</div>;
    }
  }
  
class WordAdder extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        words: ['marklar']
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      // 这部分代码很糟，而且还有 bug
      const words = this.state.words;
      words.push('marklar222');
      this.setState({words: words});
      //以西代码可以使用
      this.setState(state => ({
        words: state.words.concat(['marklar'])
      }));
    }
  
    render() {
      return (
        <div>
          <button onClick={this.handleClick} >add</button>
          <ListOfWords words={this.state.words} />
        </div>
      );
    }
  }
  export default WordAdder