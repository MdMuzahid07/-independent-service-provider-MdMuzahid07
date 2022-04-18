import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-info text-center my-5'>Blogs</h1>
            <hr />
            <div className="row my-5">
                <div className="col-12 bg-info text-white rounded p-2 mb-2">
                    <h5> 1. Difference between Authorization and Authentication</h5>
                    <p>Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board.</p>
                </div>
                <div className="col-12 bg-info text-white rounded p-2 mb-2">
                    <h5> 2. Why are you using Firebase ? What other options do you have to implement authentication?</h5>
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                </div>
                <div className="col-12 bg-info text-white rounded p-2">
                    <h5> 3. What other services does Firebase provide other than Authentication</h5>
                    <p>
                        /= Parse – Open Source Backend Platform;
                        <br />
                        /= Back4app – Parse Hosting Platform;
                        <br />
                        /= Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise;
                        <br />
                        /= Backendless – Mobile Backend and API Services Platform;
                        <br />
                        /= Kuzzle – Backend for web, hybrid, or native mobile apps and IoT projects;
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;