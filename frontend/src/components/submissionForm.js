//Done all together 
import React, { Component } from "react";
//import { useForm } from "react-hook-form";
//import { useForm } from "react-hook-form";
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

    const data = {
      title: this.state.title,
      author: this.state.author,
      source: this.state.source,
      year: this.state.year,
      doi: this.state.doi,
      claimed: this.state.claimed,
      evidence: this.state.evidence,
      moderated: this.state.moderated,
      analyzed: this.state.analyzed,
      practice: this.state.practice,
    };

    axios.post("http://localhost:5555/api/article/", data)
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
        this.props.history.push('/');
      })
      .catch(error => {
        console.log("Error in submission");
      })

  };
  render() {

    return (
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