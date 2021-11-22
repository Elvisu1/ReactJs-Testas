import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: `Elvinas`
    }
  }
  render = () => (
  <div >
    <div >
      <div >
        <h2 >{this.state.userName} To do list</h2>


      </div>
    </div>

  </div>
  );


}
