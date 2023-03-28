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

  socket.on('disconnect', () => {
    console.log('client disconnected:', socket.id);
  });

  socket.on('test-channel', (data) => {
    console.log('received socket data from client:', JSON.stringify(data));
  });

  socket.on('room-code', (data) => {
    console.log('received room code', JSON.stringify(data));
  });

  socket.emit('test-channel', "another test message")

})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
