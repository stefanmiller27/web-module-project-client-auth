import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddFriend = () => {
const { push } = useHistory();

    const [form, setForm] = useState({
        name:'',
        age:'',
        email:''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        const token = localStorage.getItem('token');
        e.preventDefault();
        axios.post('http://localhost:9000/api/friends', form, {
            headers: {
                authorization: token
            }
        })
            .then(resp=> {
                push('/friends');
            })
            .catch(err => {
                console.log(err);
            })

    }

    return (<div>
        <h2>AddFriend</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input onChange={handleChange} name='name' id='name'/>
            </div>
            <div>
                <label htmlFor='age'>Age:</label>
                <input onChange={handleChange} name='age' id='age'/>
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input onChange={handleChange} name='email' id='email'/>
            </div>
            <button>Submit</button>
        </form>
        </div>)
  }

export default AddFriend;