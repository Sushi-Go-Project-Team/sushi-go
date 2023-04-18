const express = require('express');
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
var router = express.Router()

const socketRooms = new Map();
let picked = 0;

const server = app.listen(4000, () => {
  console.log('Server is running on port 4000!')
});

const io = require('socket.io')(server, {
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
 socket.on('join', (roomId, id, user)=>{
  if (!socketRooms.has(roomId)) {
    socketRooms.set(roomId, {users: [user]})
    // console.log(socketRooms.get(roomId));
  } else {
    socketRooms.get(roomId).users = [...socketRooms.get(roomId).users, user];
    // console.log(socketRooms.get(roomId));
  }
  socket.join(roomId);
  io.to(roomId).emit('join', socketRooms.get(roomId).users);
});

socket.on('picked-card', (code, name, card, cards) => {
  for (let i = 0; i < socketRooms.get(code).users.length; i++) {
    if (socketRooms.get(code).users[i].name == name) {
      socketRooms.get(code).users[i].cardsPicked = [...socketRooms.get(code).users[i].cardsPicked, card];
      console.log(socketRooms.get(code).users[i].cardsPicked);
      break;
    }
  }
  socket.emit('updated-card', socketRooms.get(code).users);
})

socket.on('end-game', (roomId) => {
  console.log(roomId);
  console.log(socketRooms);
  console.log(socketRooms.get(roomId));
  const players = socketRooms.get(roomId).users
  const score1 = sumPointTotal(players[0].currentHand);
  console.log(players[0].currentHand)
  const score2 = sumPointTotal(players[1].currentHand);
  console.log(score1);
  console.log(score2);
  if (score1 >= score2) {
    socket.emit('winner', players[0].name, score1, players[1].name, score2);
  } else if (score1 < score2) {
    socket.emit('winner', players[1].name, score2, players[0].name, score1);
  }
});

// socket.on('switch-cards')

  socket.on('disconnect', () => {
    console.log('client disconnected:', socket.id);
  });
})


function sumPointTotal(cardArray) {
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

  

for (let i = 0; i < cardArray.length; i++) {
  switch(cardArray[i]) {
    case "SSE":
      eggs++;
    break;
    case "BC":
      bokChoy++;
    break;
    case "Gy":
      gyoza++;
    break;
    case "Nar-1":
      maki++;
    break;
    case "Nar-2":
      maki += 2;
    break;
    case "Nar-3":
      maki += 3;
    break;
    case "Ton":
      tonkatsu++;
    break;
    case "Tof":
      tofu++;
    break;
    case "Spi":
      spicy++;
    break;
    case "Moc":
      mochi++;
    break;
    case "Nor":
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