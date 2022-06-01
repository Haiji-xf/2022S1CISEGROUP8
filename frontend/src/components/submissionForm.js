
import React, { Component } from "react";

import axios from 'axios';

class SubmissionForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      source: '',
      year: '',
      doi: '',
      claimed: '',
      evidence: '',
      moderated: false,
      analyzed: false,
      practice: '',
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    //Give value to each attribute
    const data = {
      title: this.state.title,
      author: this.state.author,
      source: this.state.source,
      year: this.state.year,
      doi: this.state.doi,
      practice: this.state.practice,
      claimed: this.state.claimed,
      evidence: this.state.evidence,
      moderated: this.state.moderated,
      analyzed: this.state.analyzed,
    };
    //Post the data using axios
    axios.post("/api/article/", data)
      .then(res => {
        this.setState({
          title: '',
          author: '',
          source: '',
          year: '',
          doi: '',
          claimed: '',
          evidence: '',
          moderated: false,
          analyzed: false,
          practice: '',
        })
      })
      .catch(error => {
        console.log(error);
        console.log("Error in submission");
      })

  };
  render() {

    return (
      //Create a form to submit
      <form noValidate onSubmit={this.onSubmit}>
        <div className="group">
          <input
            type='text'
            name='title'
            placeholder="title"
            value={this.state.title}
            onChange={this.onChange}>
          </input>
          <br />
        </div>

        <div className="group">
          <input
            type='text'
            name='author'
            placeholder="author"
            value={this.state.author}
            onChange={this.onChange}>
          </input>
          <br />
        </div>

        <div className="group">
          <input
            type='text'
            name='source'
            placeholder="source"
            value={this.state.source}
            onChange={this.onChange}>
          </input>
          <br />
        </div>

        <div className="group">
          <input
            type='text'
            name='year'
            placeholder="year"
            value={this.state.year}
            onChange={this.onChange}>
          </input>
          <br />
        </div>

        <div className="group">
          <input
            type='text'
            name='doi'
            placeholder="doi"
            value={this.state.doi}
            onChange={this.onChange}>
          </input>
          <br />
        </div>

        <div className="group">
          <input
            type='text'
            name='practice'
            placeholder="practice"
            value={this.state.practice}
            onChange={this.onChange}>
          </input>
          <br />
        </div>


        <div className="group">
          <input
            type='text'
            name='claimed'
            placeholder="claimed"
            value={this.state.claimed}
            onChange={this.onChange}>
          </input>
          <br />
        </div>

        <div className="group">
          <input
            type='text'
            name='evidence'
            placeholder="evidence"
            value={this.state.evidence}
            onChange={this.onChange}>
          </input>
          <br />
        </div>
        <input
          type="submit"
        />
      </form>
    );
  }
}

export default SubmissionForm;