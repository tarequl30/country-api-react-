import React from 'react';
import '../User.css'

const User = (props) => {
    const {name , phone, email} = props.user;
    return (
        <div className='userInfo'>
            <h1>{name}</h1>
            <h5>{phone}</h5>
            <h4>{email}</h4>
            <button>Add me</button>
        </div>
    );
};

export default User;