import React from 'react';
import Navigation from '../components/Navigation';

const contacter = () => {
    return (
        <div>
            <Navigation/>
            <div className="bodycontact">
                <div className = "contacterheader">
                    <h1>Contact</h1>
                </div>

                <div className="idcontact">
                    <div className="contactid">
                        <div className="contactid">
                            <h2> Your Name</h2>
                            <input type="text" placeholder="Your Name" className="intaille" />
                        </div>

                        <div className="contactid">
                            <h2> Your Email</h2>
                            <input type="text" placeholder="Your Email" className="intaille"/>
                        </div>

                        <div className="contactid">
                            <h2> Your Phone</h2>
                            <input type="text" placeholder="Your Email" className="intaille"/>
                        </div>
                    </div>

                    <div className="contactmessage">
                        <h2>Your Message</h2>
                        <textarea placeholder="Your Message"className="intaillemessage" />
                    </div>
                
                </div>


                <div className="footercontact">
                    <button className="btnsendmessage">Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default contacter;