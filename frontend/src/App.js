/*
 * @Author: Tai Zhang
 */
import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Home from "./pages/Home";
import SEPracticePage from "./pages/SEPracticePage";
import SubmitArticle from "./pages/Submit-Article";
import NotFoundPage from "./pages/404";
import Moderator from "./pages/Moderator";
import Analyze from "./pages/Analyze";
import Admin from "./pages/AdminPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>SPEED</h1>
        <ul className="header">
          <li><NavLink end to="/">Home</NavLink></li>
          <li><NavLink to="/SEPracticePage">Browse Articles</NavLink></li>
          <li><NavLink to="/SubmitArticle">Submit an Article</NavLink></li>
          <li><NavLink to="/Moderator">Moderater Page</NavLink></li>
          <li><NavLink to="/Analyze">Analyze Page</NavLink></li>
          <li><NavLink to="/Admin">Admin Page</NavLink></li>
        </ul>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SEPracticePage" element={<SEPracticePage />} />
            <Route path="/SubmitArticle" element={<SubmitArticle />} />
            <Route path="/Moderator" element={<Moderator />} />
            <Route path="/Analyze" element={<Analyze />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

