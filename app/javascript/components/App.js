// Path : app/javascript/components/GreetUser.js
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
class AppTodos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, text: "todo1" },
        { id: 2, text: "todo2x2k" },
        { id: 3, text: "todo1" }
      ],
      textValue: ""
    };
  }

  handleChangeText = (e) => {
    this.setState({textValue: e.target.value})
  }

  handleAddTodos = (e) => {
    e.preventDefault();
    const id = this.state.todos.length + 1
    this.setState({todos: [...this.state.todos, {id: id, text: this.state.textValue}]})
  }

  render() {
    console.log(this.state.todos)
    return (
      <div>
        <div>
          {this.state.todos.map((data, index) => {
            return <div key={index}>{data.text}</div>;
          })}
        </div>
        <form action="">
          <input type="text" value={this.state.value} onChange={(e) => this.handleChangeText(e)}/>
          <button onClick={(e) => this.handleAddTodos(e)}>追加</button>
        </form>
      </div>
    );
  }
}

export default AppTodos