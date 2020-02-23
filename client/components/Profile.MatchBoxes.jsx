import React, { Component } from "React";

class ProfileMatchBoxes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="matchBox" >
                <p>Username</p>
                <p>Interests:</p>
                    <ul>
                        <li>Math</li>
                        <li>Computer Science</li>
                        <li>Liberal Arts</li>
                    </ul>
                <button className="center">Message</button>
            </div>
        )
    }
}

export default ProfileMatchBoxes;