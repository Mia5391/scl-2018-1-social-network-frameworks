import React, { Component } from 'react';
import Like from './Like';
import { Row } from 'react-materialize';


class Post extends Component {
  render() {
    return (
      <div>
        {this.props.items.map(item => (
          <Row>
            <div>
              <h6 key={item.id}>{item.text}</h6>
              < Like/>
            </div>
          </Row>
        ))}
      </div>
    );
  }
}

export default Post;