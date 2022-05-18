/*
 * @Author: Tai Zhang
 */

import React, { Component } from "react";

//this file is used for layouts of moderator and analyst
const tableadmin = [


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

export default tableadmin;