import React from 'react';
import './About.css';
import gymCoach from '../../images/gym-coach.png';


const About = () => {
    return (
        <div>
            <div className="bg-image">
                <h1 className='text-white text-center py-5'>About Us</h1>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <img className='bg-info rounded' src = {gymCoach} alt="" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 mt-5">
                        <h1>Justein</h1>
                        <h4>A Personal Health Coach</h4>
                        <p>
                            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.

                            Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                        </p>

                        <button className='btn btn-info text-white rounded-pill'>Download CV</button>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;