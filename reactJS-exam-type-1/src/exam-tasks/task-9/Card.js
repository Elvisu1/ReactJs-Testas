import React, { Component } from 'react';
import TodoFetch from "./component/TodoFetch";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: `Elvinas`
    }
  }
  changeStateData = () => {
    this.setState({
      userName: this.state.userName === `Elvinas` ? `Tomas` : `Elvinas`,
    });
  };
  render = () => (
  <div >
    <div >
      <div >
        <h2 >{this.state.userName} To do list</h2>
        <TodoFetch/>
        <button onClick={this.changeStateData}>
          Change
        </button>


      </div>
    </div>

  </div>
  );


}
