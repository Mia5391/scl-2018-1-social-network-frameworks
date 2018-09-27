import React, { Component } from 'react';
import './Timeline.css';
import NavBar from './NavBar';
import Comments from './Comments';




class Timeline extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div>
        <div>
          <NavBar/>
        </div>
        <div>
          <Comments/>
        </div>
      </div>
    )
  }
}

export default Timeline;