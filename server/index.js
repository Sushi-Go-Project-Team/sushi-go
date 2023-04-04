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

io.on("connection", (socket) => {
  console.log("Connected & Socket Id is ", socket.id)
  
  // example for handling room-specific events
  socket.on('event1', (data) => {
    console.log(data);
    io.to('room1').emit('event1', data);
  });

  // used to create/join room with room code
  socket.on('join', (roomId, id)=>{
    console.log(roomId);
    socket.join(roomId);
    io.to(roomId).emit('join', id);
  });

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