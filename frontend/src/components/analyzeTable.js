/*
 * This is used as a prototype for Analyst
 */
//The MongoDB should contain 2 boolean var -- Moderated and Analyzed
import React, { Component } from "react";
import axios from "axios";
import Dropdown from "../components/dropDown.js";
import env from "../env";
import Styles from "../components/tableStyle";
import Table from "../components/evidenceTable";

class AnalyzeTable extends Component {
    constructor() {
        super();
        return;
    }

    //this is used for analyst
    state = {
        isChecked: false,
        isModerator: false,
        articles: [],
        tableadmin: [
            {
                Header: 'Analyzed',
                accessor: 'analyzed',
                //Create a cell for checkbox
                Cell: (row) => {
                    return (
                        <input
                        type = "checkbox"
                        defaultChecked={row.value === true ? true : false}
                            //Once the analyst click the checkbox, it will reverse the value of  "analyzed".
                            onClick={(e) => {
                                    console.log(this.state.articles[row.row.id]["_id"])
                                    console.log(this.state.articles[row.row.id]["analyzed"])
                                    let test = this.state.articles;
                                    test[row.row.id]["analyzed"] = !test[row.row.id]["analyzed"];
                                    this.setState({
                                        articles : test
                                    })
                                    let id = test[row.row.id]["_id"];
                                    let index = test[row.row.id]
                                    //Update the database
                                    axios.put("/api/article/" +  id, index)
                                    .then((res) => {
                                        alert("Successfully Analyzed!");
                                    })
                                    .catch((err) => console.error("cannot analyzed"));
                                    console.log(this.state.articles[row.row.id]["analyzed"]);
                            }}
                        >
                        </input>
                    );
                },
            },
            {
                Header: 'Title',
                accessor: 'title'
            },
            {
                Header: 'Authors',
                accessor: 'author'
            },
            {
                Header: 'Source',
                accessor: 'source'
            },
            {
                Header: 'Pub. Year',
                accessor: 'year'
            },
            {
                Header: 'DOI',
                accessor: 'doi'
            },
            {
                Header: 'Practice',
                accessor: 'practice'
            },
            {
                Header: 'Claimed Benefit',
                accessor: 'claimed'
            },
            {
                Header: 'Level of Evidence',
                accessor: 'evidence'
            },
        ]
    };




    //this is called, before browser render the page 
    componentDidMount() {
        axios.get(env.url)
            .then(res => {
                let tempData = [];
                console.log(res.data);
                //Use a filter to only show articles that is moderated.
                tempData = res.data.filter(
                    (item) => item["moderated"] === true && item["analyzed"] === false
                );
                this.setState({
                    articles: tempData
                })
            }).catch((e) => console.log("No Articles are Found"));
    }
    
    //Pops up an alert message and refresh the page
    update(event) {
        window.alert("analyzed successfully");
        window.location.reload();
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
                <h2>Welcom Analyst, Please check the Articles</h2>
                <Dropdown />
                <Styles>
                    <Table
                        data={articleList}
                        columns={this.state.tableadmin}
                    />
                    <button onClick={(e) => this.update(e)}>
                        Submit and Refresh the list
                    </button>
                </Styles>
            </div>
        );
    }
}

export default AnalyzeTable;