import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    {/* <div className="logo">
                        <img src="https://i.imgur.com/2xQ2yfK.png" alt="logo" />
                    </div> */}
                    <div className="navlinks">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/digital">Digital</Link></li>
                            <li><Link to="/branding">Branding</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
