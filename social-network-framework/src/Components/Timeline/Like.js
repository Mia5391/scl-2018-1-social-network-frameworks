import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';

class Like extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  likeCounter() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  
  render() {
    return (
      <div>
        <Button onClick={this.likeCounter.bind(this)}>Likes<Icon left>star</Icon> {this.state.counter} </Button>
      </div>
    )
  }

 
}

export default Like;