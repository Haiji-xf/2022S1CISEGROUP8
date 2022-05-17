//Done all together 
import React, { Component } from "react";
//import { useForm } from "react-hook-form";
//import { useForm } from "react-hook-form";
import axios from 'axios';

class SubmissionForm extends Component{
  constructor()
{ 
  super();
  this.state = {
    title: '',
    author: '',
    source: '',
    year:'',
    doi:'',
    practice:'',
    claimed: ''
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
      description: this.state.description,
      published_date: this.state.published_date,
      publisher: this.state.publisher,
      claimed: this.state.claimed
    };

    axios.post("http://localhost:5555/api/article/", data)
    .then(res => {
      this.setState({
        title: '',
        author: '',
        source: '',
        year:'',
        doi:'',
        practice:'',
        claimed: ''
      })
      this.props.history.push('/');
    })
    .catch(error => {
      console.log("Error in submission");
    })

  };
  render () {

  return(
    <form noValidate onSubmit= {this.onSubmit}>
      <div className="group">
        <input 
        type='text' 
        name = 'title' 
        placeholder = "title" 
        value={this.state.title} 
        onChange = {this.onChange}>
        </input>
        <br />
      </div>

      <div className="group">
        <input 
        type='text' 
        name = 'author' 
        placeholder = "author" 
        value={this.state.author} 
        onChange = {this.onChange}>
        </input>
        <br />
      </div>

      <div className="group">
        <input 
        type='text' 
        name = 'source' 
        placeholder = "source" 
        value={this.state.source} 
        onChange = {this.onChange}>
        </input>
        <br />
      </div>

      <div className="group">
        <input 
        type='text' 
        name = 'year' 
        placeholder = "year" 
        value={this.state.year} 
        onChange = {this.onChange}>
        </input>
        <br />
      </div>

      <div className="group">
        <input 
        type='text' 
        name = 'doi' 
        placeholder = "doi" 
        value={this.state.doi} 
        onChange = {this.onChange}>
        </input>
        <br />
      </div>

      <div className="group">
        <input 
        type='text' 
        name = 'practice' 
        placeholder = "practice" 
        value={this.state.practice} 
        onChange = {this.onChange}>
        </input>
        <br />
      </div>

      <div className="group">
        <input 
        type='text' 
        name = 'claimed' 
        placeholder = "claimed" 
        value={this.state.claimed} 
        onChange = {this.onChange}>
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

