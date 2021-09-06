import React from 'react';
import Navigation from '../components/Navigation';
import { useHistory } from 'react-router';

const Servicepopulation = () => {
    const history = useHistory();

    const contactClick = () => {
        history.push('/contacter');
    };


    return (
        <div>
            <Navigation/>
            <h1>Service population</h1>
            <div className="containerchoixSP">
                <div className="choixSP">
                    <div className="News-Image">
                        <img src="http://placehold.it/300x60" alt=""/>
                    </div>
                    <button onClick={contactClick}>Contacter</button>
                </div>

                <div className="choixSP">
                    <div className="News-Image">
                        <img src="http://placehold.it/300x60" alt=""/>
                    </div>
                    <h3>Envoie formulaire</h3>
                </div>


                <div className="choixSP">
                    <div className="News-Image">
                        <img src="http://placehold.it/300x60" alt=""/>
                    </div>
                    <button onClick={contactClick}>Contacter Gendarmerie</button>
                </div>
                <div className="choixSP">
                    <div className="News-Image">
                        <img src="http://placehold.it/300x60" alt=""/>
                    </div>
                    <h3>Choisissez votre service 4</h3>
                </div>

                <div className="choixSP">
                    <div className="News-Image">
                        <img src="http://placehold.it/300x60" alt=""/>
                    </div>
                    <h3>Choisissez votre service 5</h3>
                </div>


                <div className="choixSP">
                    <div className="News-Image">
                        <img src="http://placehold.it/300x60" alt=""/>
                    </div>
                    <h3>Choisissez votre service 6</h3>
                </div>



                <div className="choixSP">
                    <div className="News-Image">
                        <img src="http://placehold.it/300x60" alt=""/>
                    </div>
                    <h3>Choisissez votre service 7</h3>
                </div>

            </div>
            
            
        </div>
    );
};

export default Servicepopulation;