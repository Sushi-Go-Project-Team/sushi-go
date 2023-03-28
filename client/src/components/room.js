import React, { Component } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

class RoomPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roomCode: '',
    };
  }
 

  componentDidMount() {
    const roomCode = this.props.match.params.code;
    this.setState({ roomCode });

    socket.emit('joinRoom', roomCode);
    socket.on('message', (message) => {
      console.log(`Received message in room ${roomCode}: ${message}`);
    });
  }

  render() {
    return (
      <div>
        <h1>Room {this.state.roomCode}</h1>
        {/* <input
          type="text"
          value={this.state.roomCode}
          onChange={(event) => this.setState({ roomCode: event.target.value })}
        /> */}
      </div>
    );
  }
}

export default RoomPage;