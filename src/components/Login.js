import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';



const Login = () => {
    const { push } = useHistory();

    const [ cred, setCred ] = useState({
        username:"",
        password:""
    });

    const handleChange = (e) => {
        setCred({
           ...cred,
           [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('boobs');
        axios.post('http://localhost:9000/api/login', cred)
        .then(resp => {
            console.log(resp);
            localStorage.setItem('token', resp.data.token);
            push('/friends');
        })
        .catch(err => {
            console.log(err);
        })
    }

    console.log(cred);

    return (
        <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor='username'>Username:</label>
            <input onChange={handleChange} name='username' id='username'/>
            </div>
            
            <div>
            <label htmlFor='password'>Password:</label>
            <input onChange={handleChange} name='password' type='password' id='password'/>
            </div>
            <button>Submit</button>
        </form>
        </div>)
  }

  export default Login;
