import React, { useState, createContext, useContext } from 'react';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import './components/styles.css';

// Context to manage login and entries
export const AppContext = createContext();

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [entries, setEntries] = useState([]);

//   return (
//     <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated, entries, setEntries }}>
//       <div className="App">
//         {isAuthenticated ? <Dashboard /> : <LoginPage />}
//       </div>
//     </AppContext.Provider>
//   );
// }

// export default App;

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
