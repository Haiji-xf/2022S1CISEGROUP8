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
import tableadmin from "../components/tableAdmin";

class AdminTable extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
        };
    }

    //this is used for moderator and analyst
    state = {
        isChecked: false,
        isModerator: false,
        tableAdmin: [
            {
                Header: 'Moderated',
                accessor: 'moderated',
                Cell: (row) => {
                    return (
                        <input
                            type="checkbox"
                            defaultChecked={row.value === true ? true : false}
                            onClick={(event) => {
                                if (event.target.checked) {
                                    console.log("checked row = " + row.row.id);
                                    //this.clearRows(parseInt(row.row.id));

                                    this.checkThis();
                                } else this.unclearRows(parseInt(row.row.id));
                            }}
                        />
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
                Header: 'Claimed Benefit',
                accessor: 'claimed'
            },
            {
                Header: 'Level of Evidence',
                accessor: 'evidence'
            },
        ]
    };

    checkThis() {
        //value = !value;
        this.setState({
            isChecked: !this.state.checked
        });
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
                        columns={tableadmin}
                    />
                    <input
                        type="submit"
                    />
                </Styles>
            </div>
        );
    }
}
//export default is to export everything
export default AdminTable;