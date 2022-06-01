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

class managerTable extends Component {
    constructor() {
        super();
        return;
    }

    //this is used for administrator
    state = {
        isChecked: false,
        isModerator: false,
        articles: [],
        tableadmin: [
            {
                Header: 'Delete',
                accessor: 'delete',
                Cell: (row) => {
                    return(
                        //Add a button to delete any articles, once deleted, refresh the page
                        <button onClick={(e) => {
                            //Create a temporary array to hold the data
                            let test = this.state.articles;
                            //Get the id of the article
                            let id = test[row.row.id]["_id"];
                            axios
                            .delete(env.url + "/" + id)
                            .then((res) => {
                            alert("article successfully discarded");
                            window.location.reload();
                            })
                            .catch((err) => console.log("something bad happened!"))
                        }}
                        >
                            Delete
                        </button>
                    )
                }
            },
            {
                //Change boolean value in to string
                Header: 'Moderate',
                accessor: 'moderated',
                Cell: (row) => {
                    row.value.toString();
                    return (row.value.toString());
                }
            },
            {
                //Change boolean value in to string
                Header: 'Analyzed',
                accessor: 'analyzed',
                Cell: (row) => {
                    row.value.toString();
                    return (row.value.toString());
                }
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
                console.log(res.data);
                this.setState({
                    articles: res.data
                })
            }).catch((e) => console.log("No Articles are Found"));
    }
    //Update function, reload the page
    update(event) {
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
                <h2>Welcom Administrator, You can delete useless articles here</h2>
                <Dropdown />
                <Styles>
                    <Table
                        data={articleList}
                        columns={this.state.tableadmin}
                    />
                    <button onClick={(e) => this.update(e)}>
                        Refresh the list
                    </button>
                </Styles>
            </div>
        );
    }
}
//export default is to export everything
export default managerTable;