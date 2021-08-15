import React from 'react';
import Navigation from '../components/Navigation';
import Pub from '../components/pub';
import Slideshow from '../components/Slideshow';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Slideshow/>
            
            <div className="containerhome">
                <Pub/>
                    <div className="contenthome">
                        <h1>Home</h1>
                    </div>
                <Pub/>
            </div>
            
            
        </div>
    );
};

export default Home;