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

    //this is used for moderator and analyst
    state = {
        isChecked: false,
        isModerator: false,
        articles: [],
        tableadmin: [
            {
                Header: 'Moderated',
                accessor: 'moderated',
                Cell: (row) => {
                    return (
                        <input
                        type = "checkbox"    
                        defaultChecked={row.value === true ? true : false}
                            onClick={(e) => {
                                    console.log(this.state.articles[row.row.id]["_id"])
                                    console.log(this.state.articles[row.row.id]["moderated"])
                                    let test = this.state.articles;
                                    test[row.row.id]["moderated"] = !test[row.row.id]["moderated"];
                                    this.setState({
                                        articles : test
                                    })
                                    let id = test[row.row.id]["_id"];
                                    let index = test[row.row.id]
                                    axios.put(env.url + "/" +  id, index)
                                    .catch((err) => console.error("cannot modify"));
                                    console.log(this.state.articles[row.row.id]["moderated"]);
                                    //this.clearRows(parseInt(row.row.id));
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
                tempData = res.data.filter(
                    (item) => item["moderated"] === false && item["analyzed"] === false
                );
                this.setState({
                    articles: tempData
                })
            }).catch((e) => console.log("No Articles are Found"));
    }
    
    update(event) {
        window.alert("modification successfully");
        window.location.reload();
    }

    render() {
        const articles = this.state.articles;
        console.log("PrintBook: " + articles);
        //in case that the article is const
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
                        Refresh the submit list
                    </button>
                </Styles>
            </div>
        );
    }
}
//export default is to export everything
export default AdminTable;