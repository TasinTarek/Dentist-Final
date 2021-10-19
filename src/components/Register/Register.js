import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="container">
            <div>
                <h4>Create an Account</h4>
                <form onSubmit="" >
                    <input className="p-2 m-2" type="email" placeholder="Email" />
                    <br />
                    <input className="p-2 m-2" type="password"  placeholder="Password"/>
                    <br />
                    <input className="p-2 m-2" type="password"  placeholder="Confirm-Password"/>
                    <br />
                    <input className="mt-2" type="submit" placeholder="Submit" />
                </form>
                <br />
                <p>Already Have An Account?</p>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Register;