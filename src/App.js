import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
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
        completed: false,
      },
      {
        id: 3,
        title: "Feed the dog",
        completed: false,
      },
    ],
  };

  // toggle completed
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          // toggle true/false
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // delete todo
  delTodo = (id) => {
    this.setState({
      // copy everything already in state by using the spread operator (...)
      // filter for each todo, return any todo where the id !== id we passed selected
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
