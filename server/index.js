const express = require('express');
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
var router = express.Router()

const server = app.listen(4000, () => {
  console.log('Server is running on port 4000!')
});

io = require('socket.io')(server, {
  cors:{
    origin:"*"
  }
});

const adapter = io.of("/").adapter.on;

io.on("connection", (socket) => {
  console.log("Connected & Socket Id is ", socket.id)

  socket.on('test-channel', (data) => {
    console.log(data);
  });

  socket.join('room1');

  socket.on('join', (data) => {
    console.log(data);
  });
  
  // handle room-specific events
  socket.on('event1', (data) => {
    console.log(data);
    // broadcast event to all users in room
    io.to('room1').emit('event1', data);
  });

  socket.emit('other-test-channel', { hello: 'world' })

  socket.on('disconnect', () => {
    console.log('client disconnected:', socket.id);
  });
})

io.of("/").adapter.on('created-room', (room) => {
  console.log(`room ${room} was created`);
});

io.of("/").adapter.on('joined-room', (room, id) => {
  console.log(`socket ${id} has joined room ${room}`);
});

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;