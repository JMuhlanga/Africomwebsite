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
        <div className="homepage__aboutus">
            <h2 className="homepage__aboutus__title">Who We Are</h2>
            <p>Africom Media Limited is a tech-driven organization with an aim of using the right technology to explore and innovate new solutions in the dynamic world of mobile and web content.
             We partner with other players in the mobile content industry to aggregate, bill and deliver content to the consumer the best way.

            With a rapidly growing smartphone penetration in the region, 
            we look forward to enhancing how content is aggregated, billed and delivered to the consumer.

            At Africom Media Limited we believe in people and technology, 
            that is why we innovate solutions that target daily ordinary challenges that have an extraordinary scale of complexity.</p>
        </div>
        

        </div>
        
        
        
    );
    }

export default Home;



