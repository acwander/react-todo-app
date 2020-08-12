import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

class App extends Component {
  // this state goes in top level component so it can be passed down to other components
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Take out the trash",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Dinner with wife",
        completed: false,
      },
      {
        id: uuidv4(),
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

  // add todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
