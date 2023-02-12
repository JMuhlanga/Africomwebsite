import React from 'react';
import '../Styles/Home.css'; 


function Home() {
    return (
        //homepage div
        <div className="homepage">
        <div className="homepage__picture">
            <img src={require('../Images/HOME.png')} alt="me"  />
            {/* add arrow facing button to proceed to the next div */}
            <button className="homepage__button">down icon</button>  
        </div>
        <div className="homepage__about">
            <h1 className="homepage__about__title">About Us</h1>
        </div>
        </div>
        
        
        
    );
    }

export default Home;



