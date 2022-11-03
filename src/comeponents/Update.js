import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData();
    const [user, setUser] = useState(storedUser)
    const handleAddUser = event => {
        event.preventDefault();
        fetch(`http://localhost:5000/users/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('user update')
                    event.target.data();
                }
            })

    }
    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser);
    }
    return (
        <div>
            <h2>please update: {storedUser.name}</h2>
            <form onSubmit={handleAddUser}>
                <input onChange={handleInputChange} defaultValue={storedUser.name} type="text" name='name' placeholder='name' />
                <br />
                <input onChange={handleInputChange} defaultValue={storedUser.address} type="text" name='address' placeholder='address' />
                <br></br>
                <input onChange={handleInputChange} defaultValue={storedUser.email} type="email" name="email" placeholder='email' />
                <br />
                <button type='submit'>Update user</button>
            </form>
            <Link to='/'><button>Home</button></Link>
        </div>
    );
};

export default Update;