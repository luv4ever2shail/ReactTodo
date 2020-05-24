import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onchange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  onsubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onsubmit} style={{ display: "flex" }} action="">
        <input
          style={{ flex: "10", padding: "5px" }}
          type="text"
          name="title"
          placeholder="Add Todo ...."
          value={this.state.title}
          onChange={this.onchange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
