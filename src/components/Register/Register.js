import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                <h4>Create an Account</h4>
                <form onSubmit="" >
                    <input type="email" placeholder="Email" />
                    <br />
                    <input type="password"  placeholder="Password"/>
                    <br />
                    <input type="password"  placeholder="Confirm-Password"/>
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