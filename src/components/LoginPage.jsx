// import React, { useState, useContext } from 'react';
// import { AppContext } from '../App';

// function LoginPage() {
//   const { setIsAuthenticated } = useContext(AppContext);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     if (username === 'admin' && password === 'password') {
//       setIsAuthenticated(true);
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div>
//       <h2>Admin Login</h2>
//       <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
//       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default LoginPage;
import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import "./styles.css";

function LoginPage() {
  const { login } = useContext(AppContext);
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // For demo purposes, assume any password "admin" allows login
    if (password === "admin") {
      login();
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="logindiv">
      <form onSubmit={handleLogin}>
        
          <div className="passwordlogin">
          <h2>Attendance Login</h2>
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </div>
        
      </form>
    </div>
  );
}

export default LoginPage;
