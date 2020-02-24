import React, { Component, useState, useEffect } from 'react';
import ProfileMatches from './Profile.Matches.jsx';
import ProfileMessages from './Profile.Messages.jsx';
// import ProfileMatchBoxes from "./Profile.MatchBoxes.jsx"
// import ProfileMessages from "./Profile.Messages.jsx"
// import ProfileMessageBoxes from "./Profile.MessageBoxes.jsx"

const Profile = props => {
  const [chats, setChats] = useState([]);
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    console.log('in profile', props.username);
    // loadChats();
    // loadMatches();
  }, []);
  //   const loadChats = async () => {
  //     const res = await fetch(`/msg/${props.username}`);
  //     const allChats = await res.json();
  //     setChats(allChats);
  //   };
  //   const loadMatches = async () => {
  //     const res = await fetch(`/users/matches/${props.username}`);
  //     const matchList = await res.json();
  //     setMatches(matchList);
  //   };

  return (
    <div>
      <ProfileMessages chats={chats} username={props.username} />
    </div>
  );
};

export default Profile;
