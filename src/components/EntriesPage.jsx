import React, { useContext } from 'react';
import { AppContext } from '../App';
import './styles.css';

function EntriesPage() {
  const { entries } = useContext(AppContext);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Attendance</th>
            <th>IP Address</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.designation}</td>
              <td>{entry.attendance}</td>
              <td>{entry.ipAddress}</td>
              <td>{entry.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EntriesPage;
