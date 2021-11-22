import React, { Component } from 'react';
import TodoFetch from "./component/TodoFetch";


export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: `Home`
    }
  }
  changeStateData = () => {
    this.setState({
      userName: this.state.userName === `Home` ? `Work` : `Home`,
    });
  };
  render = () => (
  <div style={{textAlign:"center", border:"2px solid black"}}>

        <h2 >{this.state.userName} To do list</h2>

        <TodoFetch/>
        <button style={{backgroundColor:"blue", color:"white", marginBottom:"10px"}} onClick={this.changeStateData}>
          Change
        </button>




  </div>
  );


}
