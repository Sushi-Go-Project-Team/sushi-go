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
  // socket.on('event1', (data) => {
  //   console.log(data);
  //   io.to('room1').emit('event1', data);
  // });

 // used to create/join room with room code
 socket.on('join', (roomId, id)=>{
  socket.join(roomId);
  io.to(roomId).emit('join', id);
});

socket.on('switch-cards')

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


function sumPointTotal(array) {
  points = 0;
  eggs = 0; //x2 = 5
  bokChoy = 0; //x3 = 10
  gyoza = 0; //1 3 6 10 15
  maki = 0;//narutomaki 1, 2, 3 for the rolls thing
  tonkatsu = 0; //2 by itself, 6 with nori
  tofu = 0 //3 by itself, 9 with nori
  spicy = 0 //1 by itself, 3 with nori
  mochi = 0 //6 split between the top, -6 split between the least
  nori = 0 // wasabi. It will be hard coded to add the most amount of points to a roll, so it will pick a tofu over a spicy
  //chopsticks score nothing

  

for (i = 0; i < array.length; i++) {
  switch(i) {
    case "Soy Sauce Eggs":
      eggs++;
    break;
    case "Bok Choy":
      bokChoy++;
    break;
    case "Gyoza":
      gyoza++;
    break;
    case "Narutomaki 1":
      maki++;
    break;
    case "Narutomaki 2":
      maki += 2;
    break;
    case "Narutomaki 3":
      maki += 3;
    break;
    case "Tonkatsu Ramen":
      tonkatsu++;
    break;
    case "Tofu Ramen":
      tofu++;
    break;
    case "Spicy Ramen":
      spicy++;
    break;
    case "Mochi":
      mochi++;
    break;
    case "Nori":
      nori++;
    break;
    default:
      break;
  }
}
points += (eggs / 2) * 5;
points += (bokChoy / 3) * 10;
if (gyoza == 1) {
  points++;
} else if (gyoza == 2) {
  points += 3;
} else if (gyoza == 3) {
  points += 6;
} else if (gyoza == 4) {
  points += 10;
} else {
  points += 15;
}
/**
 * If Maki highest among players, split 6 points evenly among the top
 * then split 3 points evenly among 2nd
 */
points += (tonkatsu) * 2;
points += (tofu) * 3;
points += (spicy) * 1;
/**
 * If Mochi highest among players, split 6 points evenly among the top
 * then split -6 points evenly among the bottom
 */
while (nori > 0) {
  if (tofu > 0) {
    points += 6;
    tofu--;
    nori--;
  } else if (tonkatsu > 0) {
    points += 4;
    tonkatsu--;
    nori--;
  } else if (spicy > 0) {
    points += 2;
    spicy--;
    nori--;
  }
}
  return points;
}

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;