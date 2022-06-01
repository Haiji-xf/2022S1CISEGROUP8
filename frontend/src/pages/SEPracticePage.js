import React, { Component } from "react";

import Styles from "../components/tableStyle";
import Table from "../components/evidenceTable";
import tablecolumns from "../components/tableColumns";
import Dropdown from "../components/dropDown";

//this is an env.js file in src folder, import files must be located inside the src folder.
import env from "../env";
import axios from "axios";
import '../App.css';


class SEPracticePage extends Component {

  //this state is used for select articles
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }
  //this is called, before browser render the page 
  componentDidMount() {
    axios.get(env.url)
            .then(res => {
                let tempData = [];
                console.log(res.data);
                //Use a filter to only show articles that is analyzed and moderated
                tempData = res.data.filter(
                    (item) => item["moderated"] === true && item["analyzed"] === true
                );
                this.setState({
                    articles: tempData
                })
            }).catch((e) => console.log("No Articles are Found"));
  }

  //Render the page
  render() {
    const articles = this.state.articles;
    console.log("PrintBook: " + articles);
    let articleList;
    if (!articles) {
      articleList = "Sorry, there is no book in database.";
    } else {
      articleList = articles;
    }
    return (
      <div>
        <h2>Check all the analyzed article</h2>
        <Dropdown />
        <Styles>
          <Table
            data={articleList}
            columns={tablecolumns}
          />
        </Styles>
      </div>
    );
  }
}
export default SEPracticePage;

