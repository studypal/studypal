import React, { Component } from "react";

class Checkbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input className="checkbox" type="checkbox" value="Math" />
        {/* <span className="interest">Math</span> */}
      </div>
    );
  }
}

export default Checkbox;
