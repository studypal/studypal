import React, { Component } from 'react';

class ProfileMessageBoxes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="messageBox">
        <p>Username</p>
        <p>Message</p>
      </div>
    );
  }
}

export default ProfileMessageBoxes;
