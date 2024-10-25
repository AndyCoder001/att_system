import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import "./styles.css";

function LoginPage() {
  const { login } = useContext(AppContext);
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
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
