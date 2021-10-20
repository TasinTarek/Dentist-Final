import React 
, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/Userfirebase';
import './Login'
import './Login'



const Login = () => {

    const {handleUserRegister} = useFirebase();

    const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const handleEmail = (e) => {
    setEmail(e.target.value);
}
const handlePassword = (e) => {
    setPassword(e.target.value);
}

const handleRegister=()=>{
handleUserRegister(email,password);
}


    const { signInUsingGoogle} = useAuth();
    return (
        <div >
            <div className="container" > 
                <form  onSubmit="">
                    <h4>Sign In</h4>
                    <input
                    onChange={handleEmail}
                    className="p-2 m-2" type="email" id="" placeholder="Email" />
                    <br />
                    <input 
                    onChange={handlePassword}
                    className="p-2 m-2" type="password" id="" placeholder="Password" />
                    <br />
                    <Button>Login</Button>
                    <p>New ?</p>
                    <Link onClick={handleRegister} to="/register">Register</Link>
                    </form>
                    <div>------------or-----------</div>
                    <Button onClick={signInUsingGoogle}>Google</Button>
            </div>
        </div>
    );
};

export default Login;