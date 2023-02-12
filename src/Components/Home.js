import React from 'react';
import '../Styles/Home.css'; 


function Home() {
    return (
        //homepage div
        <div className="homepage">
        <div className="homepage__picture">
            <img src={require('../Images/HOME.png')} alt="me" />
        </div>
        </div>
        
        
        
    );
    }

export default Home;



