/*
 * @Author: Tai Zhang
 */
//All pages done together

import React from "react";

function Home() {
  return (
    <div>
      <h2> How to use Good Juice Lib(GJL)</h2>
      <p>Submit your prefered article in Submit an Article page</p>
      <p>Browse articles in the database via Select the Practice page</p>
      <div>
        <p>
          <br></br>
          Wish You Happy
          <br></br>
          <img src={require('../assets/happy.gif')} alt="" />
        </p>
      </div>

    </div>
  );
}

export default Home;
