import React from 'react';
import { Link } from 'react-router-dom';
import '../User.css'

const User = (props) => {
    const {name , phone, email, id} = props.user;
    return (
        <div className='userInfo'>
            <h1>{name}</h1>
            <h5>{phone}</h5>
            <h4>{email}</h4>
            <button><Link to={`/about/${id}`}>Add {id} </Link></button>
        </div>
    );
};

export default User;