import { useEffect, useState } from 'react';
import User from '../User/User';

const Home = () => {
    const [users, setUser] = useState([])

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data));
  
    }, [])
    return (
        <div>
            <h1>Total User: {users.length}</h1>
                {
                    users.map(user => <User user={user}></User>)
                }
        </div>
    );
};

export default Home;