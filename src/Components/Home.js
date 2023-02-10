import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';


function Home() {
    return (
        <div>
        <Navbar />
        <h1>Home</h1>
        <Footer />
        </div>
    );
    }




