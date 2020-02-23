import React, { Component } from "React";
import ProfileMatchBoxes from "./Profile.MatchBoxes.jsx";

class ProfileMatches extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="profileMatches">
                <h3>StudyPal Matches</h3>
                <ProfileMatchBoxes />
                <ProfileMatchBoxes />
                <ProfileMatchBoxes />
                <ProfileMatchBoxes />
            </div>
        )
    }
}

export default ProfileMatches;