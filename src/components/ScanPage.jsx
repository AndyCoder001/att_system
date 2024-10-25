import React, { useState, useContext } from 'react';
import { AppContext } from '../App';
import './styles.css';

function ScanPage() {
  const { entries, setEntries } = useContext(AppContext);
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [attendance, setAttendance] = useState('Present'); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const ipAddress = window.location.hostname;
    const timestamp = new Date().toISOString();

    setEntries([...entries, { name, designation, attendance, ipAddress, timestamp }]);
    alert('Attendance recorded successfully!');

    setName('');
    setDesignation('');
    setAttendance('Present');
  };

  return (
    <div className='scanpage'>
      <h2>Submit Attendance</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Designation:</label>
          <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
        </div>
        <div>
          <label>Attendance:</label>
          <select value={attendance} onChange={(e) => setAttendance(e.target.value)}>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ScanPage;
