//All pages done together

import React from "react";
import articles from "../dummyData/articles";
import Styles from "../components/tableStyle";
import Table from "../components/evidenceTable";
import tablecolumns from "../components/tableColumns";
import Dropdown from "../components/dropDown";

const SEPracticePage = () => {
    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
        <Dropdown/>
        <Styles>
          <Table
          data={articles}
          columns={tablecolumns}
          />
        </Styles>
      </div>
    );
}
 
export default SEPracticePage;

