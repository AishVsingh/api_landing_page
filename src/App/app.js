// import axios from "axios";
import React from "react";
import Home from "../home/home";

function getHome(user) {
  if (window.innerWidth > 600) {
    return <Home/>;
  } else {
    return <div></div>;
  }
}

export default class App extends React.Component {
  state = {
  };

  render() {
    return (
      <div id="world-container">
        {getHome({ token: this.state.token, username: this.state.username })}
      </div>
    );
  }
}
