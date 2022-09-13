import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isIncorrect, setIsIncorrect] = useState(false);
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const success = props.handleLogin(email, password);
        if(success) navigate("/news");
        else {
            setIsIncorrect(true);
            setTimeout(() => {
                setIsIncorrect(false);
            }, 2000);
        }
    }


    return (
        <div className="container">
            <h1 className="text-center">Login to continue</h1>
            <form className='mx-auto' style={{width: '600px'}}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button className="btn btn-primary" type='submit' onClick={handleFormSubmit}>Login</button>
                <p>This is just a authentication demo. There is no backend for this app to verify users' identity. Login using the following credentials.</p>
                <p>Email: test@gmail.com</p>
                <p>Password: 12345678</p>
                {isIncorrect && <p className='text-danger'>Incorrect username or password</p>}
            </form>
        </div>
    )
}

export default Login