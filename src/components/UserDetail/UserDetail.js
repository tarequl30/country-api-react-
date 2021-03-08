import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const {id} = useParams()
    const [detail, setDetail] = useState({});

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => setDetail(data))
    }, [])
    
    return (
        <div>
            <h1>Details of {id}</h1>
            <p>{detail.name}</p>
            <p>{detail.website}</p>
           
        </div>
    );
};

export default UserDetail;