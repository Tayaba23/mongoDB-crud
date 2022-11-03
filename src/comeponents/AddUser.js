import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddUser = () => {
    const [user, setUser] = useState({})
    const handleAddUser = event => {
        event.preventDefault();
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('user added successfully');
                }
            })

    }
    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser);
    }
    return (
        <div>
            <h1>please add a new user</h1>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleInputBlur} type="text" name='name' placeholder='name' />
                <br />
                <input onBlur={handleInputBlur} type="text" name='address' placeholder='address' />
                <br></br>
                <input onBlur={handleInputBlur} type="email" name="email" placeholder='email' />
                <br />
                <button type='submit'>Add user</button>
            </form>
            <Link to='/'> <button>Home</button></Link>
        </div>
    );
};

export default AddUser;