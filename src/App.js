import React, { Component } from "react";
import ReactPlayer from "react-player";

import "./App.css";

import User from "./User.js";

// Our first React COMMPONENT
// (a class that extends from React's Component class and defines some content)

class App extends Component {
  constructor(props) {
    // you need this or you'll get error
    // (super calls React's Component constructor)
    super(props);

    // set the initial state when the component is first created
    // (each key-value pair is a difference piece of state)
    this.state = {
      userInfo: {
        firstName: "Pablo",
        lastName: "Perez",
        address: {
          street1: "24 rue Blah",
          zipcode: 75001
        },
        emails: ["blah@blah.com", "pablo@perez.com"],
        avatarUrl: "https://media.giphy.com/media/xUPOqE6SS9j405QhDq/giphy.gif"
      },
      colorScheme: "purple-scheme",
      schemeChangeCount: 0
    };
  }
  handleClick() {
    alert("It's Weird AF");
  }

  changeScheme(color) {
    const schemeClass = color + "-scheme";
    // use React's built-in setState() method to change the state
    // (it will cause React to RENDER the component again)
    this.setState({
      colorScheme: schemeClass,
      schemeChangeCount: ++this.state.schemeChangeCount
    });
  }

  randomScheme(color) {
    const colors = ["orange", "purple", "green", "red"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    this.changeScheme(colors[randomIndex]);
  }

  updateName() {
    const newFirstName = prompt("First Name");
    const newLastName = prompt("Last Name");
    const user = this.state.userInfo;
    user.firstName = newFirstName;
    user.lastName = newLastName;
    // use React's built-in setState() method to change the state
    // (it will cause React to RENDER the component again)
    this.setState({ userInfo: user });
  }

  addEmail() {
    const newEmail = prompt("New Email");
    const user = this.state.userInfo;
    user.emails.push(newEmail);
    this.setState({ userInfo: user });
  }
  // every component class needs a render() method
  // (defines the component's content with the return)

  render() {
    // render() returns the HTML of this component's content
    // (use parenthesis when returning multiple lines of HTML)
    const { userInfo, colorScheme, schemeChangeCount } = this.state;
    const cssClassList = `App container ${colorScheme}`;
    return (
      // use "className" instead of "class" for styling
      <div className={cssClassList}>
        <h2 onClick={() => this.handleClick()}>JSX is Weird</h2>
        <p>This is App component.</p>

        <p>You have changed your color scheme {schemeChangeCount} times.</p>

        <button onClick={() => this.changeScheme("orange")}>
          Change to Orange
        </button>
        <button onClick={() => this.changeScheme("red")}>Change to Red</button>
        <button onClick={() => this.changeScheme("green")}>
          Change to Green
        </button>
        <button onClick={() => this.changeScheme("purple")}>
          Change to Purple
        </button>
        <button onClick={() => this.randomScheme()}>Random Color</button>

        {/* display User and send the "firstName" prop */}
        <User
          firstName={userInfo.firstName}
          lastName={userInfo.lastName}
          email={userInfo.emails[0]}
          photo={userInfo.avatarUrl}
        />
        <button onClick={() => this.updateName()}>Change My Name</button>
        <button onClick={() => this.addEmail()}>Add An Email</button>

        {/* display User and send the "firstName" prop */}
        <User
          firstName="Picasso"
          lastName="Pitusa"
          email="blah@blah.com"
          // photo=""
        />

        <ReactPlayer url="https://vimeo.com/channels/top/22439234" />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
          // playing
          volume="0.5"
          controls
        />
      </div>
    );
  }
}

// export your component CLASS so that you can display in other files
// (this is like module.exports in Node.js)
export default App;
