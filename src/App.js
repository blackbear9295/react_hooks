import React, { useState } from 'react';
import './index.css';

function App() {
    const [user, setUser] = useState({ name: 'pak', gender: 'male', age: 29 });
    return (
        <div>
            <Header user={user} />
            <Body user={user} />
            <input value={user.name} onChange={e => setUser({ name: e.target.value, gender: user.gender, age: user.age })}></input>
        </div>
    )
}


function Header({ user }) {
    return (
        <div>Hi {user.name}</div>
    )
}

function Body({ user }) {
    return (
        <div>
            <h2>Your Information</h2>
            <div>Name : {user.name}</div>
            <div>Gender : {user.gender}</div>
            <div>Age : {user.age}</div>
        </div>
    )
}

export default App;