// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    _addArticle: article => dispatch(addArticle(article))
  };
}

class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      author: ""
    };

    this.inputRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("id : " + event.target.id + " | value: " + event.target.value);
    this.setState({ [event.target.id]: event.target.value });
    if (event.target.value === 'error') {
      throw new Error("error...");
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
    const { title, author } = this.state;
    const id = uuidv1();
    this.props._addArticle({ title, author, id });
    this.setState({ title: "", author: "" });
  }

  componentDidMount() {
    this.inputRef.current.focus(); // focus on title textbox
  }

  render() {
    const { title, author } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
            ref={this.inputRef}
          />
          <label htmlFor="author">Author</label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={author}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
