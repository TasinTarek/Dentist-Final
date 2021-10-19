import React 
 from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login'
import './Login'

const Login = () => {

    const { signInUsingGoogle} = useAuth();
    return (
        <div >
            <div className="container" > 
                <form  onSubmit="">
                    <h4>Sign In</h4>
                    <input className="p-2 m-2" type="email" id="" placeholder="Email" />
                    <br />
                    <input className="p-2 m-2" type="password" id="" placeholder="Password" />
                    <br />
                    <Button>Login</Button>
                    <p>New ?</p>
                    <Link to="/register">Register</Link>
                    </form>
                    <div>------------or-----------</div>
                    <Button onClick={signInUsingGoogle}>Google</Button>
            </div>
        </div>
    );
};

export default Login;