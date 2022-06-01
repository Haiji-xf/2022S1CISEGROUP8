/*
 * This is used as a prototype for Moderator and Analyst
 */
//The MongoDB should contain 2 boolean var -- Moderated and Analyzed
import React, { Component } from "react";
import axios from "axios";
import Dropdown from "../components/dropDown.js";
import env from "../env";
import Styles from "../components/tableStyle";
import Table from "../components/evidenceTable";

class AdminTable extends Component {
    constructor() {
        super();
        return;
    }

    //this is used for moderator
    state = {
        isChecked: false,
        isModerator: false,
        articles: [],
        tableadmin: [
            {
                Header: 'Moderated',
                accessor: 'moderated',
                //Create a checkbox in the cell
                Cell: (row) => {
                    return (
                        <input
                        type = "checkbox"    
                        defaultChecked={row.value === true ? true : false}
                            //Once user click the checkbox, it will reverse the value of moderated
                            onClick={(e) => {
                                    console.log(this.state.articles[row.row.id]["_id"])
                                    console.log(this.state.articles[row.row.id]["moderated"])
                                    //Create a temporary array to hold all data
                                    let test = this.state.articles;
                                    //Find the moderated attribute and change its value.
                                    test[row.row.id]["moderated"] = !test[row.row.id]["moderated"];
                                    this.setState({
                                        articles : test
                                    })
                                    //Get id and content of that row
                                    let id = test[row.row.id]["_id"];
                                    let index = test[row.row.id]
                                    //Update the database.
                                    axios.put("/api/article/" +  id, index)
                                    .then((res) => {
                                        alert("Moderation Successful");
                                    })
                                    .catch((err) => console.error("cannot modify"));
                                    console.log(this.state.articles[row.row.id]["moderated"]);
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
        axios.get("/api/article")
            .then(res => {
                let tempData = [];
                console.log(res.data);
                tempData = res.data.filter(
                    //Use a filter to show articles that is not moderated or analyzed
                    (item) => item["moderated"] === false && item["analyzed"] === false
                );
                this.setState({
                    articles: tempData
                })
            }).catch((e) => console.log("No Articles are Found"));
    }
    
    //Pops up an alert message and refresh the page
    update(event) {
        window.alert("modification successfully");
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
                <h2>Welcom Moderator, Please check the Articles</h2>
                <Dropdown />
                <Styles>
                    <Table
                        data={articleList}
                        columns={this.state.tableadmin}
                    />
                    <button onClick={(e) => this.update(e)}>
                        Submit and Refresh the submit list
                    </button>
                </Styles>
            </div>
        );
    }
}

export default AdminTable;