import React from 'react';
import map from '../../Images/map.jpg';
const Contact = () => {
    return (
        <div>
            <div className="contact mt-5 mb-5 background">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-md-6">
                            <div>
                            <h1>
                                Contact Us
                            </h1>
                            <div>
                            <h6>
                                Our Address
                            </h6>
                            <p><small>
                                525,Avenue,Cox's Bazar,ps:2500
                                </small></p>
                            </div>
                            <div>
                            <h6>
                                Phone
                            </h6>
                            <p><small>
                                Manager: ++1126545
                                </small></p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <img  src={map} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;