// this is a content script that allows us to modify the page we are on: https://developer.chrome.com/docs/extensions/mv3/content_scripts/

import $ from 'jquery';
import io from 'socket.io-client';
import { API_URL } from './scripts/api';

console.log('content.js injected into webpage');

// dummy example code of seraching for the description HTML element of a YouTube video using JQuery
// const descriptionElement = $('.ytd-watch-metadata');
// console.log('youtube description element: ', descriptionElement);

const videoElements = $('video');
const videoElement = videoElements.length > 0 ? videoElements[0] : undefined;
console.log('video element', videoElement);

/**
 * Connect to our web socket server to listen for real-time updates and send real-time updates
 */

let socket;
let shouldSync = true;
let roomId;

if (videoElement) {
  videoElement.onpause = () => {
    console.log('video paused');
    if (socket) {
      socket.emit('video-update', { roomId, action: 'pause', time: videoElement.currentTime });
    } else {
      console.log('not connected to socket server');
    }
  };

  videoElement.onplay = () => {
    console.log('video played');
    if (socket) {
      socket.emit('video-update', { roomId, action: 'play', time: videoElement.currentTime });
    } else {
      console.log('not connected to socket server');
    }
  };

  videoElement.ontimeupdate = () => {
    console.log('video time stamp updated');
    if (videoElement.paused) {
      if (shouldSync) {
        if (socket) {
          socket.emit('video-update', { roomId, action: 'time-update', time: videoElement.currentTime });
        } else {
          console.log('not connected to socket server');
        }
      } else {
        shouldSync = true;
      }
    }
  };
}

function setupSocketListeners() {
  socket.on('connect', () => {
    console.log('connected to socket server');
    // send some dummy data as an example to our socket server's 'test-channel'
    // const sampleData = { someKey1: 'someValue1', someKey2: 'someValue2' };
    // socket.emit('test-channel', sampleData);
  });

  socket.on('disconnect', () => {
    socket = undefined;
    console.log('disconnected from socket server');
  });

  socket.on('video-update-client', (data) => {
    console.log('got video data: ', data);
    if (videoElement) {
      if (data?.action === 'play') {
        videoElement.play();
        videoElement.currentTime = data.time;
      } else if (data?.action === 'pause') {
        videoElement.pause();
        videoElement.currentTime = data.time;
      } else if (data?.action === 'time-update') {
        videoElement.currentTime = data.time;
        shouldSync = false;
      }
    }
  });

  socket.on('new-user-connected', (data) => {
    ({ roomId } = data);
    console.log('new user connected', roomId);
  });
}

/**
 * Example of a message listener, so popup.js can send messages to us and
 * we can handle it here, then we can send a response back to popup.js with some data
 */
chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    console.log('got message from popup.js');
    if (request.greeting === 'hello') { sendResponse({ farewell: 'goodbye' }); }
    if (request.action === 'connect-to-socket-server') {
      if (socket) {
        console.log('already connected to the socket server');
        sendResponse({ result: 'already connected to the socket server' });
      } else {
        socket = io(API_URL, {
          reconnection: true,
          reconnectionDelay: 1000,
          reconnectionDelayMax: 5000,
          reconnectionAttempts: 1000,
        });

        // Uses 6-digit code as room id
        const roomNum = request.id;
        console.log('room id from content request', roomNum);
        roomId = roomNum;
        socket.emit('join-room', { roomId: roomNum });
        setupSocketListeners();
        sendResponse({ result: 'connected to the socket server' });
      }
    }
  },
);