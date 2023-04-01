import React from "react"
import io from "socket.io-client"
import Form from "./components/UsernameForm";
import Chat from "./components/Chat";
import immer from "immer"
import {Routes, Route} from "react-router-dom"
import Card from "./components/Card"
import Game from "./pages/Game"
import Instructions from "./pages/Instructions"
import Join from "./pages/Join"
import NewCode from "./pages/NewCode"
import Results from "./pages/Results";
import Login from "./pages/Login";
import '../src/style.css'

const initialMessagesState = {
  general: [],
  random: [],
  jokes: [],
  javascript: []
};



export default function App() {
  const [username, setUsername] = useState("");
  const [connected, setConnected] = useState(false);
  const [currentChat, setCurrentChat] = useState({isChannel: true, chatName: "general", receiverId: ""});
  const [connectedRooms, setConectedRooms] = useState(["general"]);
  const [allUsers, setAllUsers] = useState([]);
  const [messages, setMessages] = useState(initialMessagesState);
  const [message, setMessage] = useState("");
  const socketRef = useRef();

function handleMessageChange(e) {
  setMessage(e.target.value);
}

function sendMessage() {
  const payload = {
    content: message,
    to: currentChat.isChannel ? currentChat.chatNAme : currentChat.receiverId,
    sender: username,
    chatName: currentChat.chatName,
    isChannel: currentChat.isChannel
  };
  socketRef.current.emit("send message", payload);
  const newMessages = immer(messages, draft => {
    draft[currentChat.chatName].push({
      sender: username,
      content: message
    });
  });
  setMessages(newMessages);
}

  let body;
  if (connected) {
    body = (
      <Chat
        message = {message}
        handleMesageChange = {sendMessage}
        yourId = {socketRef.current ? socketRef.current.id : ""}
        allUsers = {allUsers}
        joinRoom = {joinRoom}
        connectedRooms = {connectedRooms}
        currentChat = {currentChat}
        toggleChat = {toggleChat}
        messages = {messages[currentChat.chatName]}
        />
    );
  } else {
    body = (
      <Form username = {username} onChange = {handleChange} connect = {connect}/>
    );
  }

  const socket = io.connect("http://localhost:4000")
  socket.emit('test-channel', "a test message")
  socket.on('other-test-channel', (data) => {
    console.log('received socket data from server:', JSON.stringify(data));
  });

  return (
    <div className="App">
    <Routes>
      <Route path="/game" element={<Game />}></Route>
      <Route path="/instructions" element={<Instructions />}></Route>
      <Route path="/join" element={<Join />}></Route>
      <Route path="/results" element={<Results />}></Route>
      <Route path="/newcode" element={<NewCode />}></Route>
      <Route path="/" element={<Login />}></Route>
    </Routes>
    </div>
  );
}
