import { useEffect, useState } from 'react';
import User from '../User/User';

const Home = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data));
  
    }, [])
    return (
        <div>
            <h1>Total User: {user.length}</h1>
                {
                    user.map(user => <User user={user}></User>)
                }
        </div>
    );
};

export default Home;