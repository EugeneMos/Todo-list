import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList.js";
import todosData from "./todosData.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const renderedItems = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: renderedItems
      };
    });
  }

  render() {
    const todoComponents = this.state.todos.map(todo => {
      return (
        <TodoList
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          handleChange={this.handleChange}
        />
      );
    });
    return <div>{todoComponents}</div>;
  }
}

export default App;
