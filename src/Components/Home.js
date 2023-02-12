import React from 'react';
import '../Styles/Home.css'; 


function Home() {
    return (
        //homepage div
        <div className="homepage">
        <div className="homepage__picture">
            <img src={require('../Images/HOME.png')} alt="me"  />
            {/* add a button inside the img */}
            <button className="homepage__button">Contact Me</button>
            
        </div>
        </div>
        
        
        
    );
    }

export default Home;



