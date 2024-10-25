import React, { useContext } from 'react';
import { AppContext } from '../App';
import QrCodeGenerator from './QrCodeGenerator';
import './styles.css';

function QRPage() {
  const { entries, setEntries } = useContext(AppContext);

  const handleQRCodeShown = () => {
    const ipAddress = window.location.hostname; 
    const timestamp = new Date().toISOString();
    setEntries([...entries, { ipAddress, timestamp }]);
    alert(`QR Code shown, IP entry recorded: ${ipAddress}`);
  };

  return (
    <div>
      <QrCodeGenerator/>
    
    </div>
  );
}

export default QRPage;
