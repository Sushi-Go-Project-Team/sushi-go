// import { Server } from 'socket.io';

// /**
//  * Create a web socket server clients can connect to
//  * @param {object} httpServer http server to attach socket server to
//  */
// const createServer = (httpServer) => {
//   const io = new Server(httpServer, {
//     cors: {
//       origin: '*',
//       methods: ['GET', 'POST'],
//     },
//   });

//   io.on('connection', (client) => {
//     console.log('client connected:', client.id);

//     client.on('disconnect', () => {
//       console.log('client disconnected:', client.id);
//     });

//     client.on('test-channel', (data) => {
//       console.log('received socket data from client:', JSON.stringify(data));
//     });

//     client.on('video-update', (data) => {
//       const { roomId, action, time } = data;
//       const newData = { action, time };
//       console.log('room id', roomId);
//       console.log('video update data', data);
//       client.to(roomId).emit('video-update-client', newData);
//     });

//     client.on('join-room', (data) => {
//       const { roomId } = data;
//       console.log(roomId);
//       client.join(roomId);
//       client.to(roomId).emit('new-user-connected', data);
//     });
//   });
// };

// const socket = {
//   createServer,
// };

// export default socket;