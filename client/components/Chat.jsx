import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import '../stylesheets/chat.css';
import TextContainer from './TextContainer.jsx';
import Messages from './Messages.jsx';
import InfoBar from './InfoBar.jsx';
import Input from './Input.jsx';

let socket;

const Chat = ({ location }) => {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState('');
  const ENDPOINT = 'localhost:3000';

  useEffect(() => {
    const { room, username } = queryString.parse(location.search);
    socket = io(ENDPOINT);

    setRoom(room);
    console.log('in chat username:', username);
    setUsername(username);

    socket.emit('join', { username, room }, error => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages([...messages, message]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.emit('disconnect');

      socket.off();
    };
  }, [messages]);

  const sendMessage = event => {
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };
  console.log(message, messages);
  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} username={username} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
