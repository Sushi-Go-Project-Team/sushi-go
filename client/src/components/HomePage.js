import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roomCode: '',
    };
  }

  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <input
          type="text"
          value={this.state.roomCode}
          onChange={(event) => this.setState({ roomCode: event.target.value })}
        />
        <Link to={`/room/${this.state.roomCode}`}>Join Room</Link>
      </div>
    );
  }
}

export default HomePage;