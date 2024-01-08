import './App.css'

import AnimatedRoute from "./components/AnimatedRoute.jsx";
import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {


  return (
    <div className={'app'}>
            <Navbar/>
            <AnimatedRoute/>
            <Footer/>
    </div>
  )
}

export default App
