import React, { useState, createContext, useContext } from 'react';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import './components/styles.css';

export const AppContext = createContext();

function App() {
  const [entries, setEntries] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for login status

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false); // Logout function

  return (
    <AppContext.Provider value={{ entries, setEntries, isLoggedIn, login, logout }}>
      {isLoggedIn ? <Dashboard /> : <LoginPage />} {/* Render Login or Dashboard based on isLoggedIn */}
    </AppContext.Provider>
  );
}

export default App;
