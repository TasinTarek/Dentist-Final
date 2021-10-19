import React from 'react';
import image from '../../Images/teetth.png'
import './Welcome.css'
const Welcome = () => {
    return (
        <div>
            <div className="welcome background d-flex justify-content-center align-items-center ">
                <div className="container   ">
                    <div className="row  ">
                        <div className="col-md-6">
                            <div> 
                            <h1>
                                Welcome To Our Dentist Chamber
                            </h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus blanditiis dignissimos libero, natus deserunt iusto sed fugit impedit accusantium maxime consectetur iure repellat dolore ratione reprehenderit quam sequi vel commodi?</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div >
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;