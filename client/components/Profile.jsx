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
    console.log('in profile', props);
    // loadChats();
    loadMatches(); //find matched users
  }, []);

  //   const loadChats = async () => {
  //     const res = await fetch(`/msg/${props.username}`);
  //     const allChats = await res.json();
  //     setChats(allChats);
  //   };
    const loadMatches = () => {
        console.log('loadMatches called')

        fetch(`/users/matches/${props.username}`)
          .then(resp => resp.json())
        //   .then((result) => { //user validation result
        //     if(result) { //successful
        //       this.props.onLoginSubmit(username); //send username info back + update state in App.jsx
        //       this.setState({...this.state, verified: true}); //update state
        //     }
        //     else { //unsuccessful
        //       this.setState({...this.state, input: 'invalid'});
        //     }
        //   })
          .catch(err => console.log('Profile fetch /users/matches/username: ERROR: ', err));
    //   const res = await fetch(`/users/matches/${props.username}`);
    //   const matchList = await res.json();
    //   setMatches(matchList);
    };

  return (
    <div>
      <ProfileMessages chats={chats} username={props.username} />
      {/* <ProfileMatches /> */}
    </div>
  );
};

export default Profile;
