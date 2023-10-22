import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MyRouter from './router/index';


// import Main from "./layouts/Main";


import Navbar from  './layouts/Navbar';
import Sidebar from  './layouts/Sidebar';
import Footer from  './layouts/Footer';



function App() {
  return (

    // <Router>
      // <Main />
    // </Router>

    <div className="nav-fixed">
        <Navbar></Navbar>
        <div id="layoutSidenav">
            <Sidebar></Sidebar>
            <div id="layoutSidenav_content">
              <MyRouter></MyRouter>
              <Footer></Footer>
            </div>
        </div>
    </div>

  );
}

export default App;
