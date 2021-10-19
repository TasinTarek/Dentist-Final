import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {

    const { signInUsingGoogle} = useAuth();
    return (
        <div>
            <div>
                <form onSubmit="">
                    <h4>Sign In</h4>
                    <input type="email" id="" placeholder="Email" />
                    <br />
                    <input type="password" id="" placeholder="Password" />
                    <br />
                    <Button>Login</Button>
                    <p>New ?</p>
                    <Link to="/register">Register</Link>
                    </form>
                    <div>------------or-------</div>
                    <Button onClick={signInUsingGoogle}>Google</Button>
            </div>
        </div>
    );
};

export default Login;