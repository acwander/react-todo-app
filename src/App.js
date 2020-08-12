import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";

class App extends Component {
  // this state goes in top level component so it can be passed down to other components
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "Dinner with wife",
        completed: true,
      },
      {
        id: 3,
        title: "Feed the dog",
        completed: false,
      },
    ],
  };

  render() {
    return (
      <div className="App">
        {/* passes state to the todos component as a prop */}
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
