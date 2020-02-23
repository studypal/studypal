import React, { Component } from "React";
import ProfileMessageBoxes from "./Profile.MessageBoxes.jsx";

class ProfileMessages extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="profileMessages">
                <h3>Messages</h3>
                <ProfileMessageBoxes/>
                <ProfileMessageBoxes/>
                <ProfileMessageBoxes/>
                <ProfileMessageBoxes/>
                <br></br>
                <ProfileMessageBoxes/>
                <ProfileMessageBoxes/>
                <ProfileMessageBoxes/>
                <ProfileMessageBoxes/>
            </div>
        )
    }
}

export default ProfileMessages;