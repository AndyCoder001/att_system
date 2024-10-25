// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav>
//       <Link to="/qr">Show QR Code</Link>
//       <Link to="/entries">View Entries</Link>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import './styles.css'

function Navbar() {
  const { logout } = useContext(AppContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className='navbar'>
      <Link className='navlinks'  to="/qr">Show QR Code</Link>
      <Link className='navlinks' to="/entries">View Entries</Link>
      <Link className='navlinks' to="/scan">Mark attendance</Link>
      <button onClick={handleLogout} style={{ marginLeft: '20px' }}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;

