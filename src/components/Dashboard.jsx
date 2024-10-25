// import React from 'react';
// import Navbar from './Navbar';
// import QRPage from './QRPage';
// import EntriesPage from './EntriesPage';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// function Dashboard() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/qr" element={<QRPage />} />
//         <Route path="/entries" element={<EntriesPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default Dashboard;
import React from 'react';
import Navbar from './Navbar';
import QRPage from './QRPage';
import EntriesPage from './EntriesPage';
import ScanPage from './ScanPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';

function Dashboard() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/qr" element={<QRPage />} />
        <Route path="/entries" element={<EntriesPage />} />
        <Route path="/scan" element={<ScanPage />} /> {/* New ScanPage route */}
      </Routes>
    </Router>
  );
}

export default Dashboard;
