import React, { Component } from "React";

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
        )
    }
}

export default ProfileMessageBoxes;